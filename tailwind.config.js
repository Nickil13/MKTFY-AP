/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {},
    },
    corePlugins: {
        preflight: false,
    },
    prefix: "tw-",
    important: true,
    plugins: [],
};
