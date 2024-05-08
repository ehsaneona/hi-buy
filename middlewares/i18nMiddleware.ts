import {
    type NextFetchEvent,
    type NextRequest,
    NextResponse,
} from 'next/server';

import { CustomMiddleware } from './chain';
import { i18n } from '@/i18n-config';

export function withI18nMiddleware(middleware: CustomMiddleware) {
    return async (
        request: NextRequest,
        event: NextFetchEvent,
        response: NextResponse
    ) => {
        const pathname = request.nextUrl.pathname;

        const pathnameIsMissingLocale = i18n.locales.every(
            (locale) =>
                !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
        );

        if (pathnameIsMissingLocale) {
            return NextResponse.rewrite(
                new URL(
                    `/${i18n.defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                    request.url
                )
            );
        }
    };
}
