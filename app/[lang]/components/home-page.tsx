'use client';

import { useEffect } from 'react';
import { cn, getLinksLang } from '@/libs/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Player from '@/app/[lang]/components/player';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useGlobalContext } from '@/contexts/store';

export default function HomePage({ dict, lang }) {
    const { frameIndex, setFrameIndex } = useGlobalContext();

    return (
        <main className="px-2.5">
            <div className="relative overflow-hidden">
                <div
                    className={cn(
                        'fixed right-16 top-44 z-50 max-w-80 text-white transition-all duration-700',
                        frameIndex >= 0 && frameIndex < 330
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-full opacity-0',
                    )}
                >
                    <h1 className="text-[44px] font-semibold leading-normal">
                        {dict.homeSlide1H1}
                    </h1>
                    <p className="mt-8 text-xl font-medium">
                        {dict.homeSlide1Paragraph}
                    </p>
                    <p className="mt-4 text-sm font-normal">
                        {dict.homeSlide1Paragraph2}
                    </p>
                    <Link
                        href={`${getLinksLang(lang)}/about`}
                        className={cn(buttonVariants(), 'mt-6 w-full')}
                    >
                        {dict.homeSlide1Button}
                    </Link>
                </div>
                <div
                    className={cn(
                        'fixed bottom-28 right-16 z-50 max-w-80 text-black transition-all duration-700',
                        frameIndex > 561 && frameIndex < 740
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-full opacity-0',
                    )}
                >
                    <div
                        className="flex w-fit items-center gap-2.5 rounded-full bg-white px-3 py-1.5 text-sm text-primary">
                        <svg
                            width="4"
                            height="5"
                            viewBox="0 0 4 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="2" cy="2.5" r="2" fill="#F410B5" />
                        </svg>
                        {dict.homeSlide2Badge}
                    </div>
                    <h1 className="text-[42px] font-semibold leading-normal">
                        {dict.homeSlide2H1}
                    </h1>
                    <p className="mt-4 text-sm font-normal">
                        {dict.homeSlide2Paragraph}
                    </p>
                    <Link
                        href={`${getLinksLang(lang)}/products`}
                        className={cn(buttonVariants(), 'mt-6 w-full')}
                    >
                        {dict.homeSlide2Button}
                    </Link>
                </div>
                {frameIndex > 561 && frameIndex < 740 && (
                    <div className="fixed bottom-28 right-16 z-10 h-48 w-64 bg-white opacity-50 blur-[110px]" />
                )}
                <div
                    className={cn(
                        'fixed bottom-28 left-16 z-50 max-w-80 text-black transition-all duration-700',
                        frameIndex > 852 && frameIndex < 1066
                            ? 'translate-x-0 opacity-100'
                            : '-translate-x-full opacity-0',
                    )}
                >
                    <div
                        className="flex w-fit items-center gap-2.5 rounded-full bg-white px-3 py-1.5 text-sm text-primary">
                        <svg
                            width="4"
                            height="5"
                            viewBox="0 0 4 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="2" cy="2.5" r="2" fill="#F410B5" />
                        </svg>
                        {dict.homeSlide3Badge}
                    </div>
                    <h1 className="text-[42px] font-semibold leading-normal">
                        {dict.homeSlide3H1}
                    </h1>
                    <p className="mt-4 text-sm font-normal">
                        {dict.homeSlide3Paragraph}
                    </p>
                    <Link
                        href={`${getLinksLang(lang)}/app`}
                        className={cn(buttonVariants(), 'mt-6 w-full')}
                    >
                        {dict.homeSlide3Button}
                    </Link>
                </div>
                {frameIndex > 852 && frameIndex < 1066 && (
                    <div className="fixed bottom-52 left-40 z-10 h-48 w-64 bg-white opacity-50 blur-[110px]" />
                )}
                <div
                    className={cn(
                        'fixed bottom-24 left-16 z-50 max-w-80 text-black transition-all duration-700',
                        frameIndex > 1180 && frameIndex < 1300
                            ? 'translate-x-0 opacity-100'
                            : '-translate-x-full opacity-0',
                    )}
                >
                    <div
                        className="flex w-fit items-center gap-2.5 rounded-full bg-white px-3 py-1.5 text-sm text-primary">
                        <svg
                            width="4"
                            height="5"
                            viewBox="0 0 4 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="2" cy="2.5" r="2" fill="#F410B5" />
                        </svg>
                        {dict.homeSlide4Badge}
                    </div>
                    <h1 className="text-[42px] font-semibold leading-normal">
                        {dict.homeSlide4H1}
                    </h1>
                    <p className="mt-4 text-sm font-normal">
                        {dict.homeSlide4Paragraph}
                    </p>
                    <Link
                        href={`${getLinksLang(lang)}/partners`}
                        className={cn(buttonVariants(), 'mt-6 w-full')}
                    >
                        {dict.homeSlide4Button}
                    </Link>
                </div>
                {frameIndex > 1180 && frameIndex < 1300 && (
                    <div className="fixed bottom-52 left-40 z-10 h-48 w-64 bg-white opacity-50 blur-[110px]" />
                )}
                <div
                    className={cn(
                        'fixed bottom-24 right-16 z-50 max-w-80 text-black transition-all duration-700',
                        frameIndex > 1550 && frameIndex < 1650
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-full opacity-0',
                    )}
                >
                    <div
                        className="flex w-fit items-center gap-2.5 rounded-full bg-white px-3 py-1.5 text-sm text-primary">
                        <svg
                            width="4"
                            height="5"
                            viewBox="0 0 4 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="2" cy="2.5" r="2" fill="#F410B5" />
                        </svg>
                        {dict.homeSlide5Badge}
                    </div>
                    <h1 className="text-[42px] font-semibold leading-normal">
                        {dict.homeSlide5H1}
                    </h1>
                    <p className="mt-4 text-sm font-normal">
                        {dict.homeSlide5Paragraph}
                    </p>
                    <Link
                        href={`${getLinksLang(lang)}/contact`}
                        className={cn(buttonVariants(), 'mt-6 w-full')}
                    >
                        {dict.homeSlide5Button}
                    </Link>
                </div>
                {frameIndex > 1550 && frameIndex < 1650 && (
                    <div className="fixed bottom-52 right-40 z-10 h-48 w-64 bg-white opacity-50 blur-[110px]" />
                )}
                <div
                    className={cn(
                        'fixed bottom-24 left-16 z-50 max-w-80 text-white transition-all duration-700',
                        frameIndex > 1740
                            ? 'translate-x-0 opacity-100'
                            : '-translate-x-full opacity-0',
                    )}
                >
                    <div
                        className="flex w-fit items-center gap-2.5 rounded-full bg-white px-3 py-1.5 text-sm text-primary">
                        <svg
                            width="4"
                            height="5"
                            viewBox="0 0 4 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="2" cy="2.5" r="2" fill="#F410B5" />
                        </svg>
                        {dict.homeSlide6Badge}
                    </div>
                    <h1 className="text-[42px] font-semibold leading-normal text-white">
                        {dict.homeSlide6H1}
                    </h1>
                    <p className="mt-4 text-sm font-normal text-white">
                        {dict.homeSlide6Paragraph}
                    </p>
                </div>
                <div
                    className={cn(
                        'fixed left-[50%] top-[68%] z-10 transition-all',
                        frameIndex > 1740 ? 'opacity-100' : 'opacity-0',
                    )}
                >
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <svg
                                    width="80"
                                    height="80"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.398 19.804C13.881 19.0348 19 16.0163 19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11C5 16.0163 10.119 19.0348 11.602 19.804C11.8548 19.9351 12.1452 19.9351 12.398 19.804ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                                        fill="#F410B5"
                                    />
                                </svg>
                            </TooltipTrigger>
                            <TooltipContent className="text-center">
                                <h1 className="text-base font-medium">
                                    {dict.homeAddress1TooltipH1}
                                </h1>
                                <h3 className="mt-1 text-xs font-medium text-black/40">
                                    {dict.homeAddress1TooltipH3}
                                </h3>
                                <a
                                    href="https://www.google.com/maps"
                                    target="_blank"
                                    className="mt-2 inline-block rounded-lg px-16 py-2 shadow-[0px_0px_0px_1px_#E1E6EC,_0px_3px_6px_0px_rgba(0,_0,_0,_0.07),_0px_-5px_1px_-1px_rgba(0,_0,_0,_0.03)_inset]"
                                >
                                    {dict.homeAddress1TooltipAnchor}
                                </a>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <Player
                    scrollHeight={50000}
                    numFrames={943}
                    frameIndex={frameIndex}
                    setFrameIndex={setFrameIndex}
                />
            </div>
        </main>
    );
}
