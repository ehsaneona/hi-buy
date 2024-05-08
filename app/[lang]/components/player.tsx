import React, { useEffect, useRef, useState } from 'react';
import { FastImageSequence } from '@mediamonks/fast-image-sequence';

const Player = ({ scrollHeight, numFrames, frameIndex, setFrameIndex }) => {
    const containerRef = useRef(null);
    const sequenceRef = useRef(null);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        sequenceRef.current = new FastImageSequence(containerRef.current, {
            frames: numFrames,
            imageURLCallback: (i) => `/video/Comp 1_${('' + (i)).padStart(5, '0')}.webp`,
            wrap: false,
            showDebugInfo: true,
            numberOfCachedImages: 943,
            useWorkerForImage: false,
        });
    }, []);
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
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY) {
                sequenceRef.current.play(30);
            } else if (currentScrollY < prevScrollY) {
                sequenceRef.current.play(-30);
            }
            setPrevScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scrollend', () => {
            setTimeout(() => {
                sequenceRef.current.stop();
            }, 10);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY]);

    return (
        <div style={{ height: scrollHeight }}>
            <div className="fixed rounded-3xl overflow-hidden w-[calc(100vw-25px)] h-[calc(100vh-100px)]"
                 ref={containerRef} />
        </div>
    );
};

export default Player;
