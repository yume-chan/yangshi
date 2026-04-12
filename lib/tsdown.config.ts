import { defineConfig } from "tsdown";

export default defineConfig([
    {
        entry: "./src/index.ts",
        outDir: "./lib",
        dts: true,
        exports: true
    },
    {
        entry: "./src/processors/css.ts",
        outDir: "./processors",
        dts: false,
        format: 'cjs',
        cjsDefault: false,
    },
]);
