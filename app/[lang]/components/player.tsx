import React, { useEffect, useRef, useState } from 'react';
import { FastImageSequence } from '@mediamonks/fast-image-sequence';

// Debounce function to delay the execution of a function
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

const Player = ({ scrollHeight, numFrames, frameIndex, setFrameIndex }) => {
    const containerRef = useRef(null);
    const sequenceRef = useRef(null);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        sequenceRef.current = new FastImageSequence(containerRef.current, {
            frames: numFrames,
            imageURLCallback: (i) => `/video/Comp 1_${('' + (i)).padStart(5, '0')}.webp`,
            showDebugInfo: true,
            maxCachedImages: numFrames,
        });
    }, [numFrames]);

    useEffect(() => {
        sequenceRef.current.frame = frameIndex;
    }, [frameIndex]);

    useEffect(() => {
        const intervalId = setInterval(() => {
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

        const handleScrollEnd = debounce(() => {
            sequenceRef.current.stop();
        }, 1500);

        window.addEventListener('wheel', handleWheel);
        window.addEventListener('wheel', handleScrollEnd);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('wheel', handleScrollEnd);
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
