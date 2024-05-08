import React from 'react';
import localFont from 'next/font/local';
import { Toaster } from '@/components/ui/sonner';
import { Providers } from '@/app/[lang]/providers';
import { getDirection } from '@/libs/utils';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import PageLoader from '@/components/page-loader';
import './globals.css';
import { Header } from '@/components/header';

const satoshi = localFont({
    src: [
        {
            path: '../../fonts/Satoshi-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../fonts/Satoshi-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../fonts/Satoshi-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../fonts/Satoshi-Black.ttf',
            weight: '900',
            style: 'normal',
        },
    ],
});
const rubik = localFont({
    src: [
        {
            path: '../../fonts/Rubik-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../fonts/Rubik-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../fonts/Rubik-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../fonts/Rubik-Black.ttf',
            weight: '900',
            style: 'normal',
        },
    ],
});

export const metadata = {
    metadataBase: new URL('https://hiandbuy.com'),
    openGraph: {
        images: '/sign.png',
    },
};

export default async function RootLayout({
    children,
    params: { lang },
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    const dict = await getDictionary(lang);
    const dir = getDirection(lang);

    return (
        <html
            lang={lang}
            dir={dir}
            className={lang === 'ar' ? rubik.className : satoshi.className}
        >
            <body className="min-h-screen">
                <Providers>
                    <PageLoader />
                    <Header dict={dict} lang={lang} />
                    {children}
                    <Toaster
                        position="top-right"
                        offset={16}
                        dir={dir}
                        closeButton
                        richColors
                    />
                </Providers>
            </body>
        </html>
    );
}
