'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Mousewheel } from 'swiper/modules';
import { useState } from 'react';

import 'swiper/css/bundle';

export default function AboutPage({ lang, dict }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <main>
            <Swiper
                direction="vertical"
                effect="fade"
                speed={500}
                mousewheel={true}
                fadeEffect={{
                    crossFade: true,
                }}
                slidesPerView={1}
                modules={[Mousewheel, EffectFade]}
                onSlideChange={(swiper) => {
                    setActiveIndex(swiper.activeIndex);
                }}
            >
                <SwiperSlide>
                    <div className="flex h-full flex-col items-center gap-2.5 pt-4">
                        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
                            <div className="mb-4 w-fit rounded-full bg-gray px-6 py-1.5 text-sm">
                                {dict.aboutSlide1Badge}
                            </div>
                            <h1 className="mx-auto max-w-md text-[2.75rem] font-semibold leading-normal">
                                {dict.aboutSlide1H1}{' '}
                                <span className="text-secondary">
                                    {dict.aboutSlide1H1S2}
                                </span>
                            </h1>
                            <h3 className="mt-4">{dict.aboutSlide1H3}</h3>
                            <div className="mt-8 flex items-center rounded-2xl border border-black/5 px-2">
                                <input
                                    className="px-4 py-3.5 outline-0"
                                    type="text"
                                    placeholder={dict.aboutSlide1Input}
                                />
                                <button className="rounded-lg bg-[#292C2F] px-10 py-3 text-xs font-semibold text-white">
                                    {dict.aboutSlide1Button}
                                </button>
                            </div>
                        </div>
                        <div className="my-10 flex gap-20">
                            <div className="flex flex-col gap-2 rounded-lg border border-black/5 bg-white p-5 shadow-[0px_49px_78.9px_-22px_rgba(45,_213,_112,_0.11)]">
                                <div className="flex items-center gap-2 text-blue-grey">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="26"
                                        height="26"
                                        fill="none"
                                        viewBox="0 0 26 26"
                                    >
                                        <path
                                            stroke="#2DD570"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M12.414 2.68c-5.517.159-9.867 4.766-9.708 10.284.16 5.517 4.766 9.867 10.284 9.708 5.518-.16 9.867-4.766 9.708-10.284a10.047 10.047 0 00-3.123-6.993 10.03 10.03 0 00-7.16-2.715z"
                                        ></path>
                                        <path
                                            stroke="#2DD570"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M3.318 16.147l.058-.061c1.525-1.615 4.58 1.629 6.288-.181 1.524-1.615-.903-3.906 1.388-6.333 2.155-2.283.677-3.951-1.75-6.242L9.25 3.28M12.41 22.658a2.825 2.825 0 01-.205-.504 3.353 3.353 0 01.787-3.254 3.363 3.363 0 013.214-.943 3.345 3.345 0 012.417 2.311c.034.13.058.259.072.399"
                                        ></path>
                                    </svg>
                                    <span className="text-lg font-medium">
                                        {dict.aboutSlide1Pros1Title}
                                    </span>
                                </div>
                                <div className="text-blue-grey/40">
                                    {dict.aboutSlide1Pros1Description}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 rounded-lg border border-black/5 bg-white p-5 shadow-[0px_49px_78.9px_-22px_rgba(248,_81,_44,_0.11)]">
                                <div className="flex items-center gap-2 text-blue-grey">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="22"
                                        fill="none"
                                        viewBox="0 0 18 22"
                                    >
                                        <path
                                            stroke="#F8512C"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M17.048 5.988l.007 10c.002 4-.997 5-4.997 5.003l-6 .004c-4 .003-5-.996-5.003-4.996l-.007-10c-.003-4 .997-5.001 4.997-5.004l6-.004c4-.002 5 .997 5.003 4.997zM11.047 4.492l-4 .003"
                                        ></path>
                                        <path
                                            stroke="#F8512C"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M9.056 18.093a1.55 1.55 0 10-.002-3.1 1.55 1.55 0 00.002 3.1z"
                                        ></path>
                                    </svg>
                                    <span className="text-lg font-medium">
                                        {dict.aboutSlide1Pros2Title}
                                    </span>
                                </div>
                                <div className="text-blue-grey/40">
                                    {dict.aboutSlide1Pros2Description}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <div className="flex flex-col gap-2 rounded-lg border border-black/5 bg-white p-5 shadow-[0px_31px_78.9px_-22px_rgba(44,_153,_248,_0.17)]">
                                <div className="flex items-center gap-2 text-blue-grey">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        fill="none"
                                        viewBox="0 0 25 25"
                                    >
                                        <path
                                            stroke="#2C99F8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M18.46 13.971h-4.92c-.23 0-.35-.26-.22-.44l3.27-4.35c.16-.21.5-.1.49.17l-.11 5.78M7.25 10.581c0-.89.72-1.61 1.6-1.61.89 0 1.61.72 1.61 1.61 0 2.01-3.22 2.01-3.22 4.39h3.22M22.85 15.051c0 3.87-3.13 7-7 7l1.05-1.75M2.85 9.051c0-3.87 3.13-7 7-7L8.8 3.801"
                                        ></path>
                                        <path
                                            stroke="#2C99F8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M22.85 15.051c0 3.87-3.13 7-7 7l1.05-1.75M2.85 9.051c0-3.87 3.13-7 7-7L8.8 3.801"
                                        ></path>
                                    </svg>
                                    <span className="text-lg font-medium">
                                        {dict.aboutSlide1Pros3Title}
                                    </span>
                                </div>
                                <div className="text-blue-grey/40">
                                    {dict.aboutSlide1Pros3Description}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 rounded-lg border border-black/5 bg-white p-5 shadow-[0px_31px_78.9px_-22px_rgba(134,_44,_248,_0.11)]">
                                <div className="flex items-center gap-2 text-blue-grey">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        fill="none"
                                        viewBox="0 0 25 25"
                                    >
                                        <path
                                            stroke="#862CF8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M18.45 16.045v1.9c0 .4-.2.7-.5.9l-3.9 2.4c-.7.4-1.6.4-2.3 0l-3.9-2.4c-.3-.2-.5-.6-.5-.9v-1.9M18.25 9.445l-5.4 3.5-5.4-3.5 5.4-3.4 5.4 3.4z"
                                        ></path>
                                        <path
                                            stroke="#862CF8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M18.25 9.445l4.1 2.6c.6.4.6 1.3 0 1.7l-3 1.9c-.7.4-1.5.4-2.1 0l-4.4-2.7-4.4 2.8c-.7.4-1.5.4-2.1 0l-3-1.9c-.6-.4-.6-1.3 0-1.7l4.1-2.6-4.1-2.7c-.6-.4-.6-1.3 0-1.7l3-1.9c.7-.4 1.5-.4 2.1 0l4.4 2.8 4.4-2.8c.7-.4 1.5-.4 2.1 0l3 1.9c.6.4.6 1.3 0 1.7l-4.1 2.6z"
                                        ></path>
                                    </svg>
                                    <span className="text-lg font-medium">
                                        {dict.aboutSlide1Pros4Title}
                                    </span>
                                </div>
                                <div className="text-blue-grey/40">
                                    {dict.aboutSlide1Pros4Description}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 rounded-lg border border-black/5 bg-white p-5 shadow-[0px_49px_78.9px_-22px_rgba(248,_142,_44,_0.11)]">
                                <div className="flex items-center gap-2 text-blue-grey">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="26"
                                        height="25"
                                        fill="none"
                                        viewBox="0 0 26 25"
                                    >
                                        <path
                                            stroke="#F88E2C"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M19.084 8.62l.06 2.1c.013.41-.146.794-.409 1.072a2.009 2.009 0 01-.214.196c-.078.053-.157.105-.236.137-.188.086-.376.141-.596.148a1.498 1.498 0 01-1.543-1.457 1.498 1.498 0 01-1.456 1.543 1.498 1.498 0 01-1.542-1.456 1.498 1.498 0 01-1.457 1.542 1.498 1.498 0 01-1.542-1.456 1.498 1.498 0 01-1.456 1.543 1.5 1.5 0 01-.604-.113 2.853 2.853 0 01-.244-.123 1.69 1.69 0 01-.41-.388 1.517 1.517 0 01-.285-.832l-.06-2.11c-.04-1.329 1-2.43 2.329-2.468l7.197-.207a2.407 2.407 0 012.468 2.33z"
                                        ></path>
                                        <path
                                            stroke="#F88E2C"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M18.285 12.115l.107 3.729a2.407 2.407 0 01-2.33 2.468l-5.398.155a2.407 2.407 0 01-2.468-2.33L8.09 12.41"
                                        ></path>
                                        <path
                                            stroke="#F88E2C"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M18.477 22.244l-9.996.288a5.015 5.015 0 01-5.142-4.854L3.05 7.682A5.015 5.015 0 017.904 2.54l9.996-.288a5.015 5.015 0 015.142 4.854l.288 9.996a5.015 5.015 0 01-4.853 5.142z"
                                        ></path>
                                    </svg>
                                    <span className="text-lg font-medium">
                                        {dict.aboutSlide1Pros5Title}
                                    </span>
                                </div>
                                <div className="text-blue-grey/40">
                                    {dict.aboutSlide1Pros5Description}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 rounded-lg border border-black/5 bg-white p-5 shadow-[0px_49px_78.9px_-22px_rgba(244,_44,_248,_0.07)]">
                                <div className="flex items-center gap-2 text-blue-grey">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="26"
                                        height="25"
                                        fill="none"
                                        viewBox="0 0 26 25"
                                    >
                                        <path
                                            stroke="#F42CF8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M19.084 8.62l.06 2.1c.013.41-.146.794-.409 1.072a2.009 2.009 0 01-.214.196c-.078.053-.157.105-.236.137-.188.086-.376.141-.596.148a1.498 1.498 0 01-1.543-1.457 1.498 1.498 0 01-1.456 1.543 1.498 1.498 0 01-1.542-1.456 1.498 1.498 0 01-1.457 1.542 1.498 1.498 0 01-1.542-1.456 1.498 1.498 0 01-1.456 1.543 1.5 1.5 0 01-.604-.113 2.853 2.853 0 01-.244-.123 1.69 1.69 0 01-.41-.388 1.517 1.517 0 01-.285-.832l-.06-2.11c-.04-1.329 1-2.43 2.329-2.468l7.197-.207a2.407 2.407 0 012.468 2.33z"
                                        ></path>
                                        <path
                                            stroke="#F42CF8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M18.285 12.115l.107 3.729a2.407 2.407 0 01-2.33 2.468l-5.398.155a2.407 2.407 0 01-2.468-2.33L8.09 12.41"
                                        ></path>
                                        <path
                                            stroke="#F42CF8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M18.477 22.244l-9.996.288a5.015 5.015 0 01-5.142-4.854L3.05 7.682A5.015 5.015 0 017.904 2.54l9.996-.288a5.015 5.015 0 015.142 4.854l.288 9.996a5.015 5.015 0 01-4.853 5.142z"
                                        ></path>
                                    </svg>
                                    <span className="text-lg font-medium">
                                        {dict.aboutSlide1Pros6Title}
                                    </span>
                                </div>
                                <div className="text-blue-grey/40">
                                    {dict.aboutSlide1Pros6Description}
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex !h-[calc(100vh-100px)] flex-col items-center gap-2.5 pt-4">
                        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
                            <div className="mb-3 w-fit rounded-full bg-gray px-6 py-1.5 text-sm">
                                {dict.aboutSlide2Badge}
                            </div>
                            <h1 className="mx-auto max-w-md text-[44px] font-semibold leading-normal">
                                {dict.aboutSlide2H1}
                            </h1>
                            <h3>{dict.aboutSlide2H3}</h3>
                        </div>
                        <div className="mt-2 grid grid-cols-4 gap-2.5 px-2">
                            <img
                                className="rounded-3xl object-cover h-full"
                                src="/store-1.png"
                                alt="store"
                            />
                            <img
                                className="rounded-3xl object-cover h-full"
                                src="/store-2.png"
                                alt="store"
                            />
                            <img
                                className="rounded-3xl object-cover h-full"
                                src="/store-3.png"
                                alt="store"
                            />
                            <img
                                className="rounded-3xl object-cover h-full"
                                src="/store-4.png"
                                alt="store"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex h-full flex-col items-center gap-2.5 pt-4">
                        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
                            <div className="mb-3 w-fit rounded-full bg-gray px-6 py-1.5 text-sm">
                                {dict.aboutSlide3Badge}
                            </div>
                            <h1 className="mx-auto max-w-md text-[44px] font-semibold leading-normal">
                                {dict.aboutSlide3H1}
                            </h1>
                            <h3>
                                {dict.aboutSlide3H3}
                            </h3>
                        </div>
                        <div className="mx-auto mt-8 flex w-full max-w-6xl items-center justify-between gap-2.5">
                            <img src="/samsung.svg" alt="" />
                            <img src="/amazon.svg" alt="" />
                            <img src="/meta.svg" alt="" />
                            <img src="/loom.svg" alt="" />
                            <img src="/apple.svg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </main>
    );
}
