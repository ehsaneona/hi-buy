import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/system/health-check',
        },
        host: 'https://hiandbuy.com',
    };
}
