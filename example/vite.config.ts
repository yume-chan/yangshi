import { defineConfig } from "vite";
import wyw from "@wyw-in-js/vite";

export default defineConfig({
    root: './src',
    build: {
        outDir: '../dist',
        emptyOutDir: true
    },
    plugins: [
        wyw({
            include: ["./**/*.{ts,tsx}"],
        }),
    ],
});
