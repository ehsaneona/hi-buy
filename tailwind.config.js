/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            white: '#fff',
            black: '#000',
            gray: '#f4f4f4',
            'blue-grey': '#2C2C30',
            primary: '#F410B5',
            secondary: '#2C99F8',
            red: '#ef1e1e',
        },
        extend: {
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            boxShadow: {},
        },
    },
    plugins: [require('tailwindcss-animate')],
};
