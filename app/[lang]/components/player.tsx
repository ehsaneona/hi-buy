import React, { useEffect, useRef, useState } from 'react';
import { FastImageSequence } from '@mediamonks/fast-image-sequence';

const Player = ({ scrollHeight, numFrames, frameIndex, setFrameIndex }) => {
    const containerRef = useRef(null);
    const sequenceRef = useRef<FastImageSequence>(null);

    useEffect(() => {
        sequenceRef.current = new FastImageSequence(containerRef.current, {
            frames: numFrames,
            src: {
                imageURL: (i) => `/video/Comp 1_${('' + (i)).padStart(5, '0')}.webp`,
                maxCachedImages: numFrames,
            },
            showDebugInfo: true,
        });

        return () => {
            sequenceRef.current.destruct();
        };
    }, [numFrames]);

    useEffect(() => {
        sequenceRef.current.frame = frameIndex;
        console.log(frameIndex);

        if (frameIndex >= 325 && frameIndex <= 350) {
            sequenceRef.current.stop();
        } else if (frameIndex >= 434 && frameIndex <= 464) {
            sequenceRef.current.stop();
        } else if (frameIndex >= 588 && frameIndex <= 605) {
            sequenceRef.current.stop();
        } else if (frameIndex >= 767 && frameIndex <= 797) {
            sequenceRef.current.stop();
        }
    }, [frameIndex]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // @ts-ignore
            setFrameIndex(sequenceRef.current.lastFrameDrawn);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [setFrameIndex]);

    useEffect(() => {
        const handleWheel = (event) => {
            const deltaY = event.deltaY;
            if (deltaY > 0) {
                sequenceRef.current.play(30);
            } else if (deltaY < 0) {
                sequenceRef.current.play(-30);
            }
        };

        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <div>
            <div className="fixed rounded-3xl overflow-hidden w-[calc(100vw-25px)] h-[calc(100vh-100px)]"
                 ref={containerRef} />
        </div>
    );
};

export default Player;
