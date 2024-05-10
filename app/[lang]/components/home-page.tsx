'use client';

import { cn, getLinksLang } from '@/libs/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Player from '@/app/[lang]/components/player';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useGlobalContext } from '@/contexts/store';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HomePage({ dict, lang }) {
    const { frameIndex, setFrameIndex } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 10000);
    }, []);

    return (
        <main className="px-2.5">
            {isLoading &&
                <div className="fixed bg-white flex justify-center items-center top-0 left-0 right-0 bottom-0 z-[999]">
                    Loading...
                </div>}
            <div className="relative overflow-hidden">
                <div
                    className={cn(
                        'fixed right-16 top-44 z-50 max-w-80 text-white transition-all duration-700',
                        frameIndex >= 0 && frameIndex < 165
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
                        frameIndex > 280 && frameIndex < 370
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
                {frameIndex > 280 && frameIndex < 370 && (
                    <div className="fixed bottom-28 right-16 z-10 h-48 w-64 bg-white opacity-50 blur-[110px]" />
                )}
                <div
                    className={cn(
                        'fixed bottom-28 left-16 z-50 max-w-80 text-black transition-all duration-700',
                        frameIndex > 426 && frameIndex < 533
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
                {frameIndex > 426 && frameIndex < 533 && (
                    <div className="fixed bottom-52 left-40 z-10 h-48 w-64 bg-white opacity-50 blur-[110px]" />
                )}
                <div
                    className={cn(
                        'fixed bottom-24 left-16 z-50 max-w-80 text-black transition-all duration-700',
                        frameIndex > 590 && frameIndex < 650
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
                {frameIndex > 590 && frameIndex < 650 && (
                    <div className="fixed bottom-52 left-40 z-10 h-48 w-64 bg-white opacity-50 blur-[110px]" />
                )}
                <div
                    className={cn(
                        'fixed bottom-24 right-16 z-50 max-w-80 text-black transition-all duration-700',
                        frameIndex > 775 && frameIndex < 825
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
                {frameIndex > 775 && frameIndex < 825 && (
                    <div className="fixed bottom-52 right-40 z-10 h-48 w-64 bg-white opacity-50 blur-[110px]" />
                )}
                <div
                    className={cn(
                        'fixed bottom-24 left-16 z-50 max-w-80 text-white transition-all duration-700',
                        frameIndex > 870
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
                        'fixed z-10 transition-all',
                        frameIndex > 870 ? 'opacity-100' : 'opacity-0',
                    )}
                >
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger className="fixed left-[31%] top-[48%]">
                                <Image src="/pin.png" alt="" width={50} height={266} />
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
                            <TooltipTrigger className="fixed left-[33%] top-[52%]">
                                <Image src="/pin.png" alt="" width={50} height={266} />
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
                            <TooltipTrigger className="fixed left-[30%] top-[60%]">
                                <Image src="/pin.png" alt="" width={50} height={266} />
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
                            <TooltipTrigger className="fixed left-[42%] top-[49%]">
                                <Image src="/pin.png" alt="" width={50} height={266} />
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
                            <TooltipTrigger className="fixed left-[42%] top-[56%]">
                                <Image src="/pin.png" alt="" width={50} height={266} />
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
                            <TooltipTrigger className="fixed left-[49%] top-[51%]">
                                <Image src="/pin.png" alt="" width={50} height={266} />
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
                            <TooltipTrigger className="fixed left-[58%] top-[56%]">
                                <Image src="/pin.png" alt="" width={50} height={266} />
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
                            <TooltipTrigger className="fixed left-[66%] top-[62%]">
                                <Image src="/pin.png" alt="" width={50} height={266} />
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
                            <TooltipTrigger className="fixed left-[75%] top-[60%]">
                                <Image src="/pin.png" alt="" width={50} height={266} />
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
                    scrollHeight={100000}
                    numFrames={900}
                    frameIndex={frameIndex}
                    setFrameIndex={setFrameIndex}
                />
            </div>
        </main>
    );
}
