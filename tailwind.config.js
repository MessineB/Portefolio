/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",                 // <- indispensable pour que .dark fonctionne
    content: ["./src/**/*.{ts,tsx}"],  // adapte si tu n'es pas dans /src
    theme: { extend: {} },
    plugins: [],
  };
  