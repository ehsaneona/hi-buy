import React, { useEffect, useRef, useState } from 'react';
import { FastImageSequence } from '@mediamonks/fast-image-sequence';
import { useGlobalContext } from '@/contexts/store';

const Player = ({ scrollHeight, numFrames }) => {
    const containerRef = useRef(null);
    const sequenceRef = useRef<FastImageSequence>(null);
    const { frameIndex, setFrameIndex, manuallyFrameIndex, setManuallyFrameIndex } = useGlobalContext();

    useEffect(() => {
        sequenceRef.current = new FastImageSequence(containerRef.current, {
            frames: numFrames,
            src: {
                imageURL: (i) => `/video/Comp 1_${('' + (i)).padStart(5, '0')}.webp`,
                useWorker: false,
                maxCachedImages: numFrames,
            },
            showDebugInfo: process.env.NODE_ENV !== 'production',
        });

        return () => {
            sequenceRef.current.destruct();
        };
    }, [numFrames]);
    useEffect(() => {
        if (frameIndex === 335) {
            sequenceRef.current.stop();
        } else if (frameIndex === 444) {
            sequenceRef.current.stop();
        } else if (frameIndex === 598) {
            sequenceRef.current.stop();
        } else if (frameIndex === 777) {
            sequenceRef.current.stop();
        }
    }, [frameIndex]);
    useEffect(() => {
        sequenceRef.current.frame = manuallyFrameIndex;
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
