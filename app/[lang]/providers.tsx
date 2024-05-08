'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { GlobalContextProvider } from '@/contexts/store';
import { SWRConfig } from 'swr';
import Cookies from 'js-cookie';

export const fetcher = async (params: any) => {
    if (!params.url && !params.absoluteUrl) return;

    const queryString = new URLSearchParams(params.params).toString();
    const res = await fetch(
        params.absoluteUrl
            ? `${params.absoluteUrl}?${queryString}`
            : `${process.env.NEXT_PUBLIC_API_URL}${params.url}?${queryString}`,
        {
            method: params.method ?? 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...(Cookies.get('token') &&
                    !params.absoluteUrl && {
                        Authorization: `Bearer ${Cookies.get('token')}`,
                    }),
                ...(params.lang && {
                    language: params.lang,
                }),
            },
            ...(params.body && { body: JSON.stringify(params.body) }),
        }
    );

    if (!res.ok) {
        const error = new Error('An error occurred while fetching the data.');
        // @ts-ignore
        error.info = await res.json();
        // @ts-ignore
        error.status = res.status;
        throw error;
    }

    return res.json();
};

export function Providers({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <SWRConfig
                value={{
                    fetcher,
                    refreshInterval: 500000,
                    revalidateOnFocus: false,
                }}
            >
                <GlobalContextProvider>{children}</GlobalContextProvider>
            </SWRConfig>
        </ThemeProvider>
    );
}
