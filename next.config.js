module.exports = {
    reactStrictMode: false,
    async headers() {
        return [
            {
                source: '/(.*).jpg',
                headers: [
                    {
                        key: 'Cache-Control',
                        value:
                            'public, max-age=180000, s-maxage=180000, stale-while-revalidate=180000',
                    },
                ],
            },
            {
                source: '/_next/image(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=180000, s-maxage=180000, stale-while-revalidate=180000',
                    },
                ],
            },
        ]
    },
    images: {
        minimumCacheTTL: 600000,
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
