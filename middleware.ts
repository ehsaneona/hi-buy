import { chain } from '@/middlewares/chain';
import { withI18nMiddleware } from '@/middlewares/i18nMiddleware';

export default chain([withI18nMiddleware]);

export const config = {
    matcher: ['/((?!api|_next/static|.*\\..*|_next/image|favicon.ico).*)'],
};
