import {
    type NextFetchEvent,
    type NextRequest,
    NextResponse,
} from 'next/server';

import { CustomMiddleware } from './chain';

export function withTickerMiddleware(middleware: CustomMiddleware) {
    return async (request: NextRequest, event: NextFetchEvent) => {
        const pathname = request.nextUrl.pathname;
        return NextResponse.redirect(new URL('/coins/FTM', request.url));
    };
}
