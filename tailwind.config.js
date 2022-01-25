module.exports = {
    mode: "jit",
    content: [
        './src/**/*.{html,ts}'
    ],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        // require('daisyui'),
    ],
    daisyui: {
        styled: true,
        themes: true,
        // themes: [
        //     "light",
        //     'emerald', // first one will be the default theme
        //     'dark',
        //     'forest',
        //     'synthwave',
        //     'cupcake'
        // ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
    },
};
