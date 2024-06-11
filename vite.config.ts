import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";
import { defineConfig } from "vite";
import { crx, ManifestV3Export } from "@crxjs/vite-plugin";

import manifest from "./manifest.json";
import devManifest from "./manifest.dev.json";
import pkg from "./package.json";

const root = resolve(__dirname, "src");
const pagesDir = resolve(root, "pages");
const assetsDir = resolve(root, "assets");
const outDir = resolve(__dirname, "dist");
const publicDir = resolve(__dirname, "public");

const isDev = process.env.__DEV__ === "true";

const extensionManifest = {
  ...manifest,
  ...(isDev ? devManifest : ({} as ManifestV3Export)),
  name: isDev ? `${manifest.name}` : manifest.name,
  version: pkg.version,
};

// plugin to remove dev icons from prod build
function stripDevIcons(apply: boolean) {
  if (apply) return null;

  return {
    name: "strip-dev-icons",
    resolveId(source: string) {
      return source === "virtual-module" ? source : null;
    },
    renderStart(outputOptions: any, inputOptions: any) {
      const outDir = outputOptions.dir;
      fs.rm(resolve(outDir, "target.png"), () =>
        console.log(`Deleted target.png frm prod build`)
      );
    },
  };
}

export default defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir,
    },
  },
  plugins: [
    react(),
    crx({
      manifest: extensionManifest as ManifestV3Export,
      contentScripts: {
        injectCss: true,
      },
    }),
    stripDevIcons(isDev),
  ],
  publicDir,
  build: {
    outDir,
    sourcemap: isDev,
    emptyOutDir: !isDev,
    rollupOptions: {
      onwarn(warning, defaultHandler) {
        if (warning.code === "SOURCEMAP_ERROR") {
          return;
        }

        defaultHandler(warning);
      },
    },
  },
});
