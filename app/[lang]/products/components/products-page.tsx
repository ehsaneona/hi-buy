'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Mousewheel } from 'swiper/modules';
import { useState } from 'react';

import 'swiper/css/bundle';
import { Button } from '@/components/ui/button';

export default function ProductsPage({ dict, lang }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <main>
            <Swiper
                className="!h-[calc(100vh-92px)]"
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
                    <div className="flex h-full flex-col items-center gap-2.5 pt-[1vh]">
                        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
                            <div className="mb-4 w-fit rounded-full bg-gray px-6 py-1.5 text-sm">
                                {dict.productsSlide1Badge}
                            </div>
                            <h1 className="mx-auto max-w-md text-[5.5vh] font-semibold leading-normal">
                                {dict.productsSlide1H1}{' '}
                                <span className="text-secondary">
                                    {dict.productsSlide1H1S2}
                                </span>
                            </h1>
                            <h3 className="mt-[1vh]">{dict.productsSlide2H3}</h3>
                            <Button className="mt-[1.5vh]">
                                {dict.productsSlide1Button}
                            </Button>
                        </div>
                        <div className="mx-auto mt-[2vh] flex w-full max-w-6xl items-center justify-between">
                            <div className="rounded-3xl border border-black/5 p-3 shadow-[0px_49px_78.9px_-29px_rgba(0,_0,_0,_0.07)]">
                                <div className="flex items-center gap-2.5 font-medium">
                                    <img
                                        className="h-7 w-7"
                                        src="/logo.svg"
                                        alt=""
                                    />
                                    <div className="flex flex-col gap-0.5">
                                        <span>
                                            {dict.productsSlide1Product1H1}
                                        </span>
                                        <span className="text-black/40">
                                            {dict.productsSlide1Product1H2}
                                        </span>
                                    </div>
                                </div>
                                <img
                                    className="max-h-[20vh] w-full rounded-lg object-cover"
                                    src="/product.png"
                                    alt=""
                                />
                            </div>
                            <div className="relative top-[15vh] rounded-3xl border border-black/5 p-3 shadow-[0px_49px_78.9px_-29px_rgba(0,_0,_0,_0.07)]">
                                <div className="flex items-center gap-2.5 font-medium">
                                    <img
                                        className="h-7 w-7"
                                        src="/logo.svg"
                                        alt=""
                                    />
                                    <div className="flex flex-col gap-0.5">
                                        <span>{dict.productsSlide1Product1H1}</span>
                                        <span className="text-black/40">
                                            {dict.productsSlide1Product1H2}
                                        </span>
                                    </div>
                                </div>
                                <img
                                    className="max-h-[20vh] w-full rounded-lg object-cover"
                                    src="/product.png"
                                    alt=""
                                />
                            </div>
                            <div className="relative top-[10vh] rounded-3xl border border-black/5 p-3 shadow-[0px_49px_78.9px_-29px_rgba(0,_0,_0,_0.07)]">
                                <div className="flex items-center gap-2.5 font-medium">
                                    <img
                                        className="h-7 w-7"
                                        src="/logo.svg"
                                        alt=""
                                    />
                                    <div className="flex flex-col gap-0.5">
                                        <span>{dict.productsSlide1Product1H1}</span>
                                        <span className="text-black/40">
                                            {dict.productsSlide1Product1H2}
                                        </span>
                                    </div>
                                </div>
                                <img
                                    className="max-h-[20vh] w-full rounded-lg object-cover"
                                    src="/product.png"
                                    alt=""
                                />
                            </div>
                            <div className="rounded-3xl border border-black/5 p-3 shadow-[0px_49px_78.9px_-29px_rgba(0,_0,_0,_0.07)]">
                                <div className="flex items-center gap-2.5 font-medium">
                                    <img
                                        className="h-7 w-7"
                                        src="/logo.svg"
                                        alt=""
                                    />
                                    <div className="flex flex-col gap-0.5">
                                        <span>{dict.productsSlide1Product1H1}</span>
                                        <span className="text-black/40">
                                            {dict.productsSlide1Product1H2}
                                        </span>
                                    </div>
                                </div>
                                <img
                                    className="max-h-[20vh] w-full rounded-lg object-cover"
                                    src="/product.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex h-full flex-col items-center gap-2.5 pt-4">
                        <div className="relative z-50 mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
                            <div className="mb-4 w-fit rounded-full bg-gray px-6 py-1.5 text-sm">
                                {dict.productsSlide2Badge}
                            </div>
                            <h1 className="mx-auto max-w-md text-[44px] font-semibold leading-normal">
                                {dict.productsSlide2H1}
                            </h1>
                            <h3 className="mt-4">{dict.productsSlide2H3}</h3>
                            <Button className="mt-5">
                                {dict.productsSlide2Button}
                            </Button>
                        </div>
                        <div className="relative w-full">
                            <img
                                className="absolute -top-24 right-0 z-10"
                                src="/blob-1.png"
                                alt=""
                            />
                            <img
                                className="absolute -top-[250px] left-0 z-10"
                                src="/blob-2.png"
                                alt=""
                            />
                            <img
                                className="absolute -top-[30px] left-20"
                                src="/blob-3.png"
                                alt=""
                            />
                            <img
                                className="absolute right-0"
                                src="/blob-4.png"
                                alt=""
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </main>
    );
}
