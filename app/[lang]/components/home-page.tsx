'use client';

import { cn, getLinksLang } from '@/libs/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Player from '@/app/[lang]/components/player';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { useGlobalContext } from '@/contexts/store';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Icons } from '@/components/ui/icons';
import Spinner from '@/components/spinner';
import { StopFrames } from '@/app/[lang]/components/constant/StopFrames';

export default function HomePage({ dict, lang }) {
    const { frameIndex, setFrameIndex } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(true);

    return (
        <main className="px-2.5">
            {isLoading && (
                <div className="fixed bottom-0 left-0 right-0 top-0 z-[999] flex items-center justify-center bg-[#f8fdfc]">
                    <div className="relative flex flex-col items-center justify-center">
                        <Icons.logo className="h-auto w-44" />
                        <video
                            className="h-[360px] object-cover"
                            src="/loading.mp4"
                            muted
                            autoPlay
                            loop
                        />
                        <Spinner width={30} height={30} />
                    </div>
                </div>
            )}
            <div className="relative overflow-hidden">
                <div
                    className={cn(
                        'fixed bottom-20 left-8 z-50 max-w-80 text-white transition-all duration-700 lg:left-[unset] lg:right-16 lg:top-44',
                        frameIndex >= 0 && frameIndex < StopFrames[0]
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-full opacity-0'
                    )}
                >
                    <h1 className="text-3xl font-semibold leading-normal lg:text-[42px]">
                        {dict.homeSlide1H1}
                    </h1>
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
                {frameIndex >= 0 && frameIndex < StopFrames[0] && (
                    <div className="fixed bottom-20 left-8 z-10 h-48 w-64 bg-black opacity-50 blur-[110px] lg:left-[unset] lg:right-16 lg:top-44" />
                )}
                <div
                    className={cn(
                        'fixed bottom-20 left-8 z-50 max-w-80 text-black transition-all duration-700 lg:bottom-28 lg:left-[unset] lg:right-16',
                        frameIndex > StopFrames[1] - 100 &&
                            frameIndex < StopFrames[1]
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-full opacity-0'
                    )}
                >
                    <div className="flex w-fit items-center gap-1.5 rounded-full bg-white px-2 py-1 text-xs text-primary lg:gap-2.5 lg:px-3 lg:py-1.5 lg:text-sm">
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
                    <h1 className="text-3xl font-semibold leading-normal lg:text-[42px]">
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
                {frameIndex > StopFrames[1] - 100 &&
                    frameIndex < StopFrames[1] && (
                        <div className="fixed bottom-20 left-8 z-10 h-48 w-64 bg-white opacity-50 blur-[110px] lg:bottom-28 lg:left-[unset] lg:right-16" />
                    )}
                <div
                    className={cn(
                        'fixed bottom-20 left-8 z-50 max-w-80 text-black transition-all duration-700 lg:bottom-28 lg:left-16 lg:left-[unset]',
                        frameIndex > StopFrames[2] - 100 &&
                            frameIndex < StopFrames[2]
                            ? 'translate-x-0 opacity-100'
                            : '-translate-x-full opacity-0'
                    )}
                >
                    <div className="flex w-fit items-center gap-1.5 rounded-full bg-white px-2 py-1 text-xs text-primary lg:gap-2.5 lg:px-3 lg:py-1.5 lg:text-sm">
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
                    <h1 className="text-3xl font-semibold leading-normal lg:text-[42px]">
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
                {frameIndex > StopFrames[2] - 100 &&
                    frameIndex < StopFrames[2] && (
                        <div className="fixed bottom-20 left-8 z-10 h-48 w-64 bg-white opacity-50 blur-[110px] lg:bottom-28 lg:left-16 lg:left-[unset]" />
                    )}
                <div
                    className={cn(
                        'fixed bottom-20 left-8 z-50 max-w-80 text-black transition-all duration-700 lg:bottom-24 lg:left-16 lg:left-[unset]',
                        frameIndex > StopFrames[3] - 100 &&
                            frameIndex < StopFrames[3]
                            ? 'translate-x-0 opacity-100'
                            : '-translate-x-full opacity-0'
                    )}
                >
                    <div className="flex w-fit items-center gap-1.5 rounded-full bg-white px-2 py-1 text-xs text-primary lg:gap-2.5 lg:px-3 lg:py-1.5 lg:text-sm">
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
                    <h1 className="text-3xl font-semibold leading-normal lg:text-[42px]">
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
                {frameIndex > StopFrames[3] - 100 &&
                    frameIndex < StopFrames[3] && (
                        <div className="fixed bottom-20 left-8 z-10 h-48 w-64 bg-white opacity-50 blur-[110px] lg:bottom-24 lg:left-16 lg:left-[unset]" />
                    )}
                <div
                    className={cn(
                        'fixed bottom-20 left-8 z-50 max-w-80 text-black transition-all duration-700 lg:bottom-24 lg:left-[unset] lg:right-16',
                        frameIndex > StopFrames[4] - 100 &&
                            frameIndex < StopFrames[4]
                            ? 'translate-x-0 opacity-100'
                            : 'translate-x-full opacity-0'
                    )}
                >
                    <div className="flex w-fit items-center gap-1.5 rounded-full bg-white px-2 py-1 text-xs text-primary lg:gap-2.5 lg:px-3 lg:py-1.5 lg:text-sm">
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
                    <h1 className="text-3xl font-semibold leading-normal lg:text-[42px]">
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
                {frameIndex > StopFrames[4] - 100 &&
                    frameIndex < StopFrames[4] && (
                        <div className="fixed bottom-20 left-8 z-10 h-48 w-64 bg-white opacity-50 blur-[110px] lg:bottom-52 lg:left-[unset] lg:right-40" />
                    )}
                <div
                    className={cn(
                        'fixed bottom-20 left-8 z-50 max-w-80 text-white transition-all duration-700 lg:bottom-24 lg:left-16 lg:left-[unset]',
                        frameIndex > StopFrames[4]
                            ? 'translate-x-0 opacity-100'
                            : '-translate-x-full opacity-0'
                    )}
                >
                    <div className="flex w-fit items-center gap-1.5 rounded-full bg-white px-2 py-1 text-xs text-primary lg:gap-2.5 lg:px-3 lg:py-1.5 lg:text-sm">
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
                    <h1 className="text-3xl font-semibold leading-normal text-white lg:text-[42px]">
                        {dict.homeSlide6H1}
                    </h1>
                    <p className="mt-4 text-sm font-normal text-white">
                        {dict.homeSlide6Paragraph}
                    </p>
                </div>
                <div
                    className={cn(
                        'fixed z-10',
                        frameIndex > StopFrames[4] ? '' : 'hidden'
                    )}
                >
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger
                                className={cn(
                                    'duration-[600ms] fixed left-[31%] top-[48%] transition',
                                    frameIndex > StopFrames[4] - 3
                                        ? 'translate-y-0 opacity-100'
                                        : '-translate-y-5 opacity-0'
                                )}
                            >
                                <Image
                                    src="/pin.png"
                                    alt=""
                                    width={50}
                                    height={266}
                                />
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
                        <Tooltip>
                            <TooltipTrigger
                                className={cn(
                                    'duration-[250ms] fixed left-[33%] top-[52%] transition',
                                    frameIndex > StopFrames[4] - 3
                                        ? 'translate-y-0 opacity-100'
                                        : '-translate-y-5 opacity-0'
                                )}
                            >
                                <Image
                                    src="/pin.png"
                                    alt=""
                                    width={50}
                                    height={266}
                                />
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
                        <Tooltip>
                            <TooltipTrigger
                                className={cn(
                                    'fixed left-[30%] top-[60%] transition duration-300',
                                    frameIndex > StopFrames[4] - 3
                                        ? 'translate-y-0 opacity-100'
                                        : '-translate-y-6 opacity-0'
                                )}
                            >
                                <Image
                                    src="/pin.png"
                                    alt=""
                                    width={50}
                                    height={266}
                                />
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
                        <Tooltip>
                            <TooltipTrigger
                                className={cn(
                                    'fixed left-[42%] top-[49%] transition duration-500',
                                    frameIndex > 870
                                        ? 'translate-y-0 opacity-100'
                                        : '-translate-y-4 opacity-0'
                                )}
                            >
                                <Image
                                    src="/pin.png"
                                    alt=""
                                    width={50}
                                    height={266}
                                />
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
                        <Tooltip>
                            <TooltipTrigger
                                className={cn(
                                    'fixed left-[42%] top-[56%] transition duration-700',
                                    frameIndex > StopFrames[4] - 3
                                        ? 'translate-y-0 opacity-100'
                                        : '-translate-y-8 opacity-0'
                                )}
                            >
                                <Image
                                    src="/pin.png"
                                    alt=""
                                    width={50}
                                    height={266}
                                />
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
                        <Tooltip>
                            <TooltipTrigger
                                className={cn(
                                    'fixed left-[49%] top-[51%] transition duration-300',
                                    frameIndex > StopFrames[4] - 3
                                        ? 'translate-y-0 opacity-100'
                                        : '-translate-y-9 opacity-0'
                                )}
                            >
                                <Image
                                    src="/pin.png"
                                    alt=""
                                    width={50}
                                    height={266}
                                />
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
                        <Tooltip>
                            <TooltipTrigger
                                className={cn(
                                    'fixed left-[58%] top-[56%] transition duration-200',
                                    frameIndex > StopFrames[4] - 3
                                        ? 'translate-y-0 opacity-100'
                                        : '-translate-y-6 opacity-0'
                                )}
                            >
                                <Image
                                    src="/pin.png"
                                    alt=""
                                    width={50}
                                    height={266}
                                />
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
                        <Tooltip>
                            <TooltipTrigger
                                className={cn(
                                    'fixed transition duration-150 lg:left-[61%] lg:top-[62%] xl:left-[62%] xl:top-[63%]',
                                    frameIndex > StopFrames[4] - 3
                                        ? 'translate-y-0 opacity-100'
                                        : '-translate-y-2 opacity-0'
                                )}
                            >
                                <Image
                                    src="/pin.png"
                                    alt=""
                                    width={50}
                                    height={266}
                                />
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
                        <Tooltip>
                            <TooltipTrigger
                                className={cn(
                                    'fixed transition duration-100 lg:left-[75%] lg:top-[60%] xl:left-[70%] xl:top-[63%]',
                                    frameIndex > StopFrames[4] - 3
                                        ? 'translate-y-0 opacity-100'
                                        : '-translate-y-7 opacity-0'
                                )}
                            >
                                <Image
                                    src="/pin.png"
                                    alt=""
                                    width={50}
                                    height={266}
                                />
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
                    numFrames={761}
                    onLoad={(load) => {
                        if (load > 0.3) setIsLoading(false);
                    }}
                />
            </div>
        </main>
    );
}
