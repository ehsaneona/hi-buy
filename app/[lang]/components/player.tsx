import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FastImageSequence } from '@mediamonks/fast-image-sequence';
import { useGlobalContext } from '@/contexts/store';
import { isMobile } from 'react-device-detect';
import { StopFrames } from '@/app/[lang]/components/constant/StopFrames';

const Player = ({ numFrames, onLoad }) => {
    const containerRef = useRef(null);
    const sequenceRef = useRef<FastImageSequence>(null);
    const {
        frameIndex,
        setFrameIndex,
        manuallyFrameIndex,
        setManuallyFrameIndex,
    } = useGlobalContext();

    useLayoutEffect(() => {
        sequenceRef.current = new FastImageSequence(containerRef.current, {
            frames: numFrames,
            src: {
                imageURL: (i) =>
                    `/video/${isMobile ? 'mobile' : 'desktop'}/${isMobile ? 'mobile' : 'desktop'}${('' + i).padStart(5, '0')}.webp`,
                useWorker: false,
                maxCachedImages: numFrames,
            },
            showDebugInfo: true,
        });
        sequenceRef.current.onLoadProgress(onLoad);

        return () => {
            sequenceRef.current.destruct();
        };
    }, [numFrames]);
    useEffect(() => {
        if (StopFrames.includes(frameIndex)) sequenceRef.current.stop();
    }, [frameIndex]);
    useEffect(() => {
        if (manuallyFrameIndex !== null)
            sequenceRef.current.frame = manuallyFrameIndex;
        setManuallyFrameIndex(null);
        sequenceRef.current.stop();
    }, [manuallyFrameIndex]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // @ts-ignore
            setFrameIndex(sequenceRef.current.lastFrameDrawn);
        }, 0);

        return () => {
            clearInterval(intervalId);
        };
    }, [setFrameIndex]);

    useEffect(() => {
        let startY = 0;
        let isStartYSet = false;
        const handleTouchMove = (event) => {
            if (!isStartYSet) {
                startY = event.touches[0].clientY;
                isStartYSet = true;
            }

            const currentY = event.touches[0].clientY;
            const deltaY = startY - currentY;

            if (Math.abs(deltaY) > 30) {
                // A threshold to prevent accidental swipes
                if (deltaY > 0) {
                    sequenceRef.current.play(30); // Swiping up
                } else {
                    sequenceRef.current.play(-30); // Swiping down
                }
                isStartYSet = false; // Reset after a swipe is detected
            }
        };
        const handleTouchEnd = () => {
            isStartYSet = false;
        };
        const handleWheel = (event) => {
            const deltaY = event.deltaY;
            if (deltaY > 0) {
                sequenceRef.current.play(30);
            } else if (deltaY < 0) {
                sequenceRef.current.play(-30);
            }
        };

        window.addEventListener('wheel', handleWheel);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <div>
            <div
                className="fixed h-[calc(100dvh-74px)] w-[calc(100dvw-20px)] overflow-hidden rounded-3xl lg:h-[calc(100dvh-100px)] lg:w-[calc(100dvw-20px)]"
                ref={containerRef}
            />
        </div>
    );
};

export default Player;
