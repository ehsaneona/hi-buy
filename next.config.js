module.exports = {
    reactStrictMode: false,
    async headers() {
        return [
            {
                source: '/(.*).webp',
                headers: [
                    {
                        key: 'Cache-Control',
                        value:
                            'public, max-age=25920000, s-maxage=25920000, stale-while-revalidate=25920000',
                    },
                ],
            },
            {
                source: '/_next/image(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=25920000, s-maxage=25920000, stale-while-revalidate=25920000',
                    },
                ],
            },
        ]
    },
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy:
            'default-src \'self\'; script-src \'none\'; sandbox;',
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};
