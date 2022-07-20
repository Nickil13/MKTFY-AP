/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        colors: {
            green: "#6CC04B",
            red: "#FF2128",
            white: "#FFFFFF",
            gray: {
                100: "#E2E2E2",
                200: "#4D4D4D60",
                300: "#0000007E",
                400: "#6B6B6C",
                500: "#4D4D4D",
                600: "#434344",
                700: "#2A2E43",
                "cloud-gray": "#F4F4F5",
                footer: "#888889",
                "footer-border": "#707070",
            },
            purple: {
                50: "#A54BC033",
                100: "#9349DE",
                200: "#8840D9",
                400: "#6E20BE",
                500: "#6318AF",
                600: "#560F9F",
            },
            gold: { 100: "#ffc832", 200: "#FFBA00" },
            black: "#000000",
            beige: { 100: "#FFFFFF99", 200: "#F7F7F7" },
            transparent: "transparent",
        },
        fontSize: {
            "2xs": "0.75rem",
            xs: "0.875rem",
            "sm-16": "1rem",
            "sm-17": "1.0625rem",
            base: "1.25rem",
            "lg-36": "2.25rem",
            lg: "2.5rem",
            xl: "2.625rem",
            inherit: "inherit",
        },
        extend: {
            fontFamily: {
                mktfy: ["Open Sans", "sans-serif"],
            },
            boxShadow: {
                "card-header": "0px 6px 20px #00000024",
            },
            height: {
                "ap-nav": "153px",
            },
            padding: {
                drawer: "400px",
            },
            minHeight: {
                ap: "calc(100vh - 153px)",
            },
            backgroundImage: {
                "login-clouds": "url(../img/mktfy/background_begin.svg)",
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
    prefix: "tw-",
    important: true,
    plugins: [],
};
