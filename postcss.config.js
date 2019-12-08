//postcss.config.js
// const tailwindcss = require('tailwindcss');
module.exports = {

    plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
    ],
    corePlugins: {
        preflight: false,
    },
};