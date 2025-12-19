/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
            },
            colors: {
                brand: {
                    orange: '#f75c03',
                    teal: '#28afb0',
                    tealdark: '#2b818b',
                    navy: '#2e5266',
                    dark: '#22333b',
                    gray: '#8a9497',
                    graylight: '#bec4c5',
                    offwhite: '#f2f4f3',
                    white: '#ffffff',
                }
            }
        },
    },
    plugins: [],
}
