module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Zen Old Mincho'],
        },
        extend: {
            backgroundImage: {
                'main-pattern': "url('./assets/logo2.jpg')",
            },
        },
        maxWidth: {
            xxs: '210px',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
