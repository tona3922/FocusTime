// vite.config.ts
import react from "file:///C:/Users/LENOVO/documents/extension/extension/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import fs from "fs";
import { defineConfig } from "file:///C:/Users/LENOVO/documents/extension/extension/node_modules/vite/dist/node/index.js";
import { crx } from "file:///C:/Users/LENOVO/documents/extension/extension/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// manifest.json
var manifest_default = {
  manifest_version: 3,
  name: "FocusTime",
  description: "Focus Time",
  options_ui: {
    page: "src/pages/options/index.html"
  },
  options_page: "src/pages/newtab/index.html",
  background: {
    service_worker: "src/pages/background/index.ts",
    type: "module"
  },
  action: {
    default_icon: {
      "32": "target.png"
    }
  },
  icons: {
    "128": "target.png"
  },
  permissions: ["activeTab", "storage"],
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/pages/content/index.tsx"],
      css: ["contentStyle.css"]
    }
  ],
  devtools_page: "src/pages/devtools/index.html",
  web_accessible_resources: [
    {
      resources: ["contentStyle.css", "target.png"],
      matches: []
    }
  ]
};

// manifest.dev.json
var manifest_dev_default = {
  action: {
    default_icon: "public/target.png"
  },
  background: {
    service_worker: "src/pages/background/index.ts",
    type: "module"
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/pages/content/index.tsx"],
      css: ["contentStyle.css"]
    }
  ],
  icons: {
    "128": "public/target.png"
  },
  web_accessible_resources: [
    {
      resources: ["contentStyle.css", "target.png"],
      matches: []
    }
  ]
};

// package.json
var package_default = {
  name: "vite-web-extension",
  version: "1.2.0",
  description: "A simple chrome extension template with Vite, React, TypeScript and Tailwind CSS.",
  license: "MIT",
  repository: {
    type: "git",
    url: "https://github.com/JohnBra/web-extension.git"
  },
  scripts: {
    build: "vite build",
    dev: "nodemon"
  },
  type: "module",
  dependencies: {
    antd: "^5.18.0",
    react: "^18.3.1",
    "react-dom": "^18.3.1",
    "webextension-polyfill": "^0.11.0"
  },
  devDependencies: {
    "@crxjs/vite-plugin": "^2.0.0-beta.23",
    "@types/chrome": "^0.0.268",
    "@types/node": "^20.12.11",
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.0.1",
    "@types/webextension-polyfill": "^0.10.7",
    "@typescript-eslint/eslint-plugin": "^7.8.0",
    "@typescript-eslint/parser": "^7.8.0",
    "@vitejs/plugin-react": "^4.2.1",
    autoprefixer: "^10.4.19",
    eslint: "^8.57.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jsx-a11y": "^6.8.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.2",
    "fs-extra": "^11.2.0",
    nodemon: "^3.1.0",
    postcss: "^8.4.38",
    tailwindcss: "^3.4.3",
    "ts-node": "^10.9.2",
    typescript: "^5.4.5",
    vite: "^5.2.11"
  }
};

// vite.config.ts
var __vite_injected_original_dirname = "C:\\Users\\LENOVO\\documents\\extension\\extension";
var root = resolve(__vite_injected_original_dirname, "src");
var pagesDir = resolve(root, "pages");
var assetsDir = resolve(root, "assets");
var outDir = resolve(__vite_injected_original_dirname, "dist");
var publicDir = resolve(__vite_injected_original_dirname, "public");
var isDev = process.env.__DEV__ === "true";
var extensionManifest = {
  ...manifest_default,
  ...isDev ? manifest_dev_default : {},
  name: isDev ? `${manifest_default.name}` : manifest_default.name,
  version: package_default.version
};
function stripDevIcons(apply) {
  if (apply)
    return null;
  return {
    name: "strip-dev-icons",
    resolveId(source) {
      return source === "virtual-module" ? source : null;
    },
    renderStart(outputOptions, inputOptions) {
      const outDir2 = outputOptions.dir;
      fs.rm(
        resolve(outDir2, "target.png"),
        () => console.log(`Deleted target.png frm prod build`)
      );
    }
  };
}
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir
    }
  },
  plugins: [
    react(),
    crx({
      manifest: extensionManifest,
      contentScripts: {
        injectCss: true
      }
    }),
    stripDevIcons(isDev)
  ],
  publicDir,
  build: {
    outDir,
    sourcemap: isDev,
    emptyOutDir: !isDev
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAibWFuaWZlc3QuanNvbiIsICJtYW5pZmVzdC5kZXYuanNvbiIsICJwYWNrYWdlLmpzb24iXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMRU5PVk9cXFxcZG9jdW1lbnRzXFxcXGV4dGVuc2lvblxcXFxleHRlbnNpb25cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXExFTk9WT1xcXFxkb2N1bWVudHNcXFxcZXh0ZW5zaW9uXFxcXGV4dGVuc2lvblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTEVOT1ZPL2RvY3VtZW50cy9leHRlbnNpb24vZXh0ZW5zaW9uL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgeyBjcngsIE1hbmlmZXN0VjNFeHBvcnQgfSBmcm9tIFwiQGNyeGpzL3ZpdGUtcGx1Z2luXCI7XHJcblxyXG5pbXBvcnQgbWFuaWZlc3QgZnJvbSBcIi4vbWFuaWZlc3QuanNvblwiO1xyXG5pbXBvcnQgZGV2TWFuaWZlc3QgZnJvbSBcIi4vbWFuaWZlc3QuZGV2Lmpzb25cIjtcclxuaW1wb3J0IHBrZyBmcm9tIFwiLi9wYWNrYWdlLmpzb25cIjtcclxuXHJcbmNvbnN0IHJvb3QgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIik7XHJcbmNvbnN0IHBhZ2VzRGlyID0gcmVzb2x2ZShyb290LCBcInBhZ2VzXCIpO1xyXG5jb25zdCBhc3NldHNEaXIgPSByZXNvbHZlKHJvb3QsIFwiYXNzZXRzXCIpO1xyXG5jb25zdCBvdXREaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJkaXN0XCIpO1xyXG5jb25zdCBwdWJsaWNEaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgXCJwdWJsaWNcIik7XHJcblxyXG5jb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Ll9fREVWX18gPT09IFwidHJ1ZVwiO1xyXG5cclxuY29uc3QgZXh0ZW5zaW9uTWFuaWZlc3QgPSB7XHJcbiAgLi4ubWFuaWZlc3QsXHJcbiAgLi4uKGlzRGV2ID8gZGV2TWFuaWZlc3QgOiAoe30gYXMgTWFuaWZlc3RWM0V4cG9ydCkpLFxyXG4gIG5hbWU6IGlzRGV2ID8gYCR7bWFuaWZlc3QubmFtZX1gIDogbWFuaWZlc3QubmFtZSxcclxuICB2ZXJzaW9uOiBwa2cudmVyc2lvbixcclxufTtcclxuXHJcbi8vIHBsdWdpbiB0byByZW1vdmUgZGV2IGljb25zIGZyb20gcHJvZCBidWlsZFxyXG5mdW5jdGlvbiBzdHJpcERldkljb25zKGFwcGx5OiBib29sZWFuKSB7XHJcbiAgaWYgKGFwcGx5KSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IFwic3RyaXAtZGV2LWljb25zXCIsXHJcbiAgICByZXNvbHZlSWQoc291cmNlOiBzdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIHNvdXJjZSA9PT0gXCJ2aXJ0dWFsLW1vZHVsZVwiID8gc291cmNlIDogbnVsbDtcclxuICAgIH0sXHJcbiAgICByZW5kZXJTdGFydChvdXRwdXRPcHRpb25zOiBhbnksIGlucHV0T3B0aW9uczogYW55KSB7XHJcbiAgICAgIGNvbnN0IG91dERpciA9IG91dHB1dE9wdGlvbnMuZGlyO1xyXG4gICAgICBmcy5ybShyZXNvbHZlKG91dERpciwgXCJ0YXJnZXQucG5nXCIpLCAoKSA9PlxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBEZWxldGVkIHRhcmdldC5wbmcgZnJtIHByb2QgYnVpbGRgKVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQHNyY1wiOiByb290LFxyXG4gICAgICBcIkBhc3NldHNcIjogYXNzZXRzRGlyLFxyXG4gICAgICBcIkBwYWdlc1wiOiBwYWdlc0RpcixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgY3J4KHtcclxuICAgICAgbWFuaWZlc3Q6IGV4dGVuc2lvbk1hbmlmZXN0IGFzIE1hbmlmZXN0VjNFeHBvcnQsXHJcbiAgICAgIGNvbnRlbnRTY3JpcHRzOiB7XHJcbiAgICAgICAgaW5qZWN0Q3NzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBzdHJpcERldkljb25zKGlzRGV2KSxcclxuICBdLFxyXG4gIHB1YmxpY0RpcixcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyLFxyXG4gICAgc291cmNlbWFwOiBpc0RldixcclxuICAgIGVtcHR5T3V0RGlyOiAhaXNEZXYsXHJcbiAgfSxcclxufSk7XHJcbiIsICJ7XHJcbiAgXCJtYW5pZmVzdF92ZXJzaW9uXCI6IDMsXHJcbiAgXCJuYW1lXCI6IFwiRm9jdXNUaW1lXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkZvY3VzIFRpbWVcIixcclxuICBcIm9wdGlvbnNfdWlcIjoge1xyXG4gICAgXCJwYWdlXCI6IFwic3JjL3BhZ2VzL29wdGlvbnMvaW5kZXguaHRtbFwiXHJcbiAgfSxcclxuICBcIm9wdGlvbnNfcGFnZVwiOiBcInNyYy9wYWdlcy9uZXd0YWIvaW5kZXguaHRtbFwiLFxyXG4gIFwiYmFja2dyb3VuZFwiOiB7XHJcbiAgICBcInNlcnZpY2Vfd29ya2VyXCI6IFwic3JjL3BhZ2VzL2JhY2tncm91bmQvaW5kZXgudHNcIixcclxuICAgIFwidHlwZVwiOiBcIm1vZHVsZVwiXHJcbiAgfSxcclxuICBcImFjdGlvblwiOiB7XHJcbiAgICBcImRlZmF1bHRfaWNvblwiOiB7XHJcbiAgICAgIFwiMzJcIjogXCJ0YXJnZXQucG5nXCJcclxuICAgIH1cclxuICB9LFxyXG4gIFwiaWNvbnNcIjoge1xyXG4gICAgXCIxMjhcIjogXCJ0YXJnZXQucG5nXCJcclxuICB9LFxyXG4gIFwicGVybWlzc2lvbnNcIjogW1wiYWN0aXZlVGFiXCIsIFwic3RvcmFnZVwiXSxcclxuICBcImNvbnRlbnRfc2NyaXB0c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwibWF0Y2hlc1wiOiBbXCI8YWxsX3VybHM+XCJdLFxyXG4gICAgICBcImpzXCI6IFtcInNyYy9wYWdlcy9jb250ZW50L2luZGV4LnRzeFwiXSxcclxuICAgICAgXCJjc3NcIjogW1wiY29udGVudFN0eWxlLmNzc1wiXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgXCJkZXZ0b29sc19wYWdlXCI6IFwic3JjL3BhZ2VzL2RldnRvb2xzL2luZGV4Lmh0bWxcIixcclxuICBcIndlYl9hY2Nlc3NpYmxlX3Jlc291cmNlc1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwicmVzb3VyY2VzXCI6IFtcImNvbnRlbnRTdHlsZS5jc3NcIiwgXCJ0YXJnZXQucG5nXCJdLFxyXG4gICAgICBcIm1hdGNoZXNcIjogW11cclxuICAgIH1cclxuICBdXHJcbn1cclxuIiwgIntcclxuICBcImFjdGlvblwiOiB7XHJcbiAgICBcImRlZmF1bHRfaWNvblwiOiBcInB1YmxpYy90YXJnZXQucG5nXCJcclxuICB9LFxyXG4gIFwiYmFja2dyb3VuZFwiOiB7XHJcbiAgICBcInNlcnZpY2Vfd29ya2VyXCI6IFwic3JjL3BhZ2VzL2JhY2tncm91bmQvaW5kZXgudHNcIixcclxuICAgIFwidHlwZVwiOiBcIm1vZHVsZVwiXHJcbiAgfSxcclxuICBcImNvbnRlbnRfc2NyaXB0c1wiOiBbXHJcbiAgICB7XHJcbiAgICAgIFwibWF0Y2hlc1wiOiBbXCI8YWxsX3VybHM+XCJdLFxyXG4gICAgICBcImpzXCI6IFtcInNyYy9wYWdlcy9jb250ZW50L2luZGV4LnRzeFwiXSxcclxuICAgICAgXCJjc3NcIjogW1wiY29udGVudFN0eWxlLmNzc1wiXVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgXCJpY29uc1wiOiB7XHJcbiAgICBcIjEyOFwiOiBcInB1YmxpYy90YXJnZXQucG5nXCJcclxuICB9LFxyXG4gIFwid2ViX2FjY2Vzc2libGVfcmVzb3VyY2VzXCI6IFtcclxuICAgIHtcclxuICAgICAgXCJyZXNvdXJjZXNcIjogW1wiY29udGVudFN0eWxlLmNzc1wiLCBcInRhcmdldC5wbmdcIl0sXHJcbiAgICAgIFwibWF0Y2hlc1wiOiBbXVxyXG4gICAgfVxyXG4gIF1cclxufVxyXG4iLCAie1xyXG4gIFwibmFtZVwiOiBcInZpdGUtd2ViLWV4dGVuc2lvblwiLFxyXG4gIFwidmVyc2lvblwiOiBcIjEuMi4wXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkEgc2ltcGxlIGNocm9tZSBleHRlbnNpb24gdGVtcGxhdGUgd2l0aCBWaXRlLCBSZWFjdCwgVHlwZVNjcmlwdCBhbmQgVGFpbHdpbmQgQ1NTLlwiLFxyXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxyXG4gIFwicmVwb3NpdG9yeVwiOiB7XHJcbiAgICBcInR5cGVcIjogXCJnaXRcIixcclxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0pvaG5CcmEvd2ViLWV4dGVuc2lvbi5naXRcIlxyXG4gIH0sXHJcbiAgXCJzY3JpcHRzXCI6IHtcclxuICAgIFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkXCIsXHJcbiAgICBcImRldlwiOiBcIm5vZGVtb25cIlxyXG4gIH0sXHJcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXHJcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xyXG4gICAgXCJhbnRkXCI6IFwiXjUuMTguMFwiLFxyXG4gICAgXCJyZWFjdFwiOiBcIl4xOC4zLjFcIixcclxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjMuMVwiLFxyXG4gICAgXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIjogXCJeMC4xMS4wXCJcclxuICB9LFxyXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcclxuICAgIFwiQGNyeGpzL3ZpdGUtcGx1Z2luXCI6IFwiXjIuMC4wLWJldGEuMjNcIixcclxuICAgIFwiQHR5cGVzL2Nocm9tZVwiOiBcIl4wLjAuMjY4XCIsXHJcbiAgICBcIkB0eXBlcy9ub2RlXCI6IFwiXjIwLjEyLjExXCIsXHJcbiAgICBcIkB0eXBlcy9yZWFjdFwiOiBcIl4xOC4zLjFcIixcclxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4wLjFcIixcclxuICAgIFwiQHR5cGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiOiBcIl4wLjEwLjdcIixcclxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNy44LjBcIixcclxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L3BhcnNlclwiOiBcIl43LjguMFwiLFxyXG4gICAgXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiOiBcIl40LjIuMVwiLFxyXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4xOVwiLFxyXG4gICAgXCJlc2xpbnRcIjogXCJeOC41Ny4wXCIsXHJcbiAgICBcImVzbGludC1jb25maWctcHJldHRpZXJcIjogXCJeOS4xLjBcIixcclxuICAgIFwiZXNsaW50LXBsdWdpbi1pbXBvcnRcIjogXCJeMi4yOS4xXCIsXHJcbiAgICBcImVzbGludC1wbHVnaW4tanN4LWExMXlcIjogXCJeNi44LjBcIixcclxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdFwiOiBcIl43LjM0LjFcIixcclxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rc1wiOiBcIl40LjYuMlwiLFxyXG4gICAgXCJmcy1leHRyYVwiOiBcIl4xMS4yLjBcIixcclxuICAgIFwibm9kZW1vblwiOiBcIl4zLjEuMFwiLFxyXG4gICAgXCJwb3N0Y3NzXCI6IFwiXjguNC4zOFwiLFxyXG4gICAgXCJ0YWlsd2luZGNzc1wiOiBcIl4zLjQuM1wiLFxyXG4gICAgXCJ0cy1ub2RlXCI6IFwiXjEwLjkuMlwiLFxyXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuNC41XCIsXHJcbiAgICBcInZpdGVcIjogXCJeNS4yLjExXCJcclxuICB9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxVSxPQUFPLFdBQVc7QUFDdlYsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sUUFBUTtBQUNmLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsV0FBNkI7OztBQ0p0QztBQUFBLEVBQ0Usa0JBQW9CO0FBQUEsRUFDcEIsTUFBUTtBQUFBLEVBQ1IsYUFBZTtBQUFBLEVBQ2YsWUFBYztBQUFBLElBQ1osTUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLGNBQWdCO0FBQUEsRUFDaEIsWUFBYztBQUFBLElBQ1osZ0JBQWtCO0FBQUEsSUFDbEIsTUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFFBQVU7QUFBQSxJQUNSLGNBQWdCO0FBQUEsTUFDZCxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxhQUFlLENBQUMsYUFBYSxTQUFTO0FBQUEsRUFDdEMsaUJBQW1CO0FBQUEsSUFDakI7QUFBQSxNQUNFLFNBQVcsQ0FBQyxZQUFZO0FBQUEsTUFDeEIsSUFBTSxDQUFDLDZCQUE2QjtBQUFBLE1BQ3BDLEtBQU8sQ0FBQyxrQkFBa0I7QUFBQSxJQUM1QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGVBQWlCO0FBQUEsRUFDakIsMEJBQTRCO0FBQUEsSUFDMUI7QUFBQSxNQUNFLFdBQWEsQ0FBQyxvQkFBb0IsWUFBWTtBQUFBLE1BQzlDLFNBQVcsQ0FBQztBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQ0Y7OztBQ25DQTtBQUFBLEVBQ0UsUUFBVTtBQUFBLElBQ1IsY0FBZ0I7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsWUFBYztBQUFBLElBQ1osZ0JBQWtCO0FBQUEsSUFDbEIsTUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLGlCQUFtQjtBQUFBLElBQ2pCO0FBQUEsTUFDRSxTQUFXLENBQUMsWUFBWTtBQUFBLE1BQ3hCLElBQU0sQ0FBQyw2QkFBNkI7QUFBQSxNQUNwQyxLQUFPLENBQUMsa0JBQWtCO0FBQUEsSUFDNUI7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsMEJBQTRCO0FBQUEsSUFDMUI7QUFBQSxNQUNFLFdBQWEsQ0FBQyxvQkFBb0IsWUFBWTtBQUFBLE1BQzlDLFNBQVcsQ0FBQztBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBQ0Y7OztBQ3hCQTtBQUFBLEVBQ0UsTUFBUTtBQUFBLEVBQ1IsU0FBVztBQUFBLEVBQ1gsYUFBZTtBQUFBLEVBQ2YsU0FBVztBQUFBLEVBQ1gsWUFBYztBQUFBLElBQ1osTUFBUTtBQUFBLElBQ1IsS0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUNBLFNBQVc7QUFBQSxJQUNULE9BQVM7QUFBQSxJQUNULEtBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxNQUFRO0FBQUEsRUFDUixjQUFnQjtBQUFBLElBQ2QsTUFBUTtBQUFBLElBQ1IsT0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IseUJBQXlCO0FBQUEsRUFDM0I7QUFBQSxFQUNBLGlCQUFtQjtBQUFBLElBQ2pCLHNCQUFzQjtBQUFBLElBQ3RCLGlCQUFpQjtBQUFBLElBQ2pCLGVBQWU7QUFBQSxJQUNmLGdCQUFnQjtBQUFBLElBQ2hCLG9CQUFvQjtBQUFBLElBQ3BCLGdDQUFnQztBQUFBLElBQ2hDLG9DQUFvQztBQUFBLElBQ3BDLDZCQUE2QjtBQUFBLElBQzdCLHdCQUF3QjtBQUFBLElBQ3hCLGNBQWdCO0FBQUEsSUFDaEIsUUFBVTtBQUFBLElBQ1YsMEJBQTBCO0FBQUEsSUFDMUIsd0JBQXdCO0FBQUEsSUFDeEIsMEJBQTBCO0FBQUEsSUFDMUIsdUJBQXVCO0FBQUEsSUFDdkIsNkJBQTZCO0FBQUEsSUFDN0IsWUFBWTtBQUFBLElBQ1osU0FBVztBQUFBLElBQ1gsU0FBVztBQUFBLElBQ1gsYUFBZTtBQUFBLElBQ2YsV0FBVztBQUFBLElBQ1gsWUFBYztBQUFBLElBQ2QsTUFBUTtBQUFBLEVBQ1Y7QUFDRjs7O0FIN0NBLElBQU0sbUNBQW1DO0FBVXpDLElBQU0sT0FBTyxRQUFRLGtDQUFXLEtBQUs7QUFDckMsSUFBTSxXQUFXLFFBQVEsTUFBTSxPQUFPO0FBQ3RDLElBQU0sWUFBWSxRQUFRLE1BQU0sUUFBUTtBQUN4QyxJQUFNLFNBQVMsUUFBUSxrQ0FBVyxNQUFNO0FBQ3hDLElBQU0sWUFBWSxRQUFRLGtDQUFXLFFBQVE7QUFFN0MsSUFBTSxRQUFRLFFBQVEsSUFBSSxZQUFZO0FBRXRDLElBQU0sb0JBQW9CO0FBQUEsRUFDeEIsR0FBRztBQUFBLEVBQ0gsR0FBSSxRQUFRLHVCQUFlLENBQUM7QUFBQSxFQUM1QixNQUFNLFFBQVEsR0FBRyxpQkFBUyxJQUFJLEtBQUssaUJBQVM7QUFBQSxFQUM1QyxTQUFTLGdCQUFJO0FBQ2Y7QUFHQSxTQUFTLGNBQWMsT0FBZ0I7QUFDckMsTUFBSTtBQUFPLFdBQU87QUFFbEIsU0FBTztBQUFBLElBQ0wsTUFBTTtBQUFBLElBQ04sVUFBVSxRQUFnQjtBQUN4QixhQUFPLFdBQVcsbUJBQW1CLFNBQVM7QUFBQSxJQUNoRDtBQUFBLElBQ0EsWUFBWSxlQUFvQixjQUFtQjtBQUNqRCxZQUFNQSxVQUFTLGNBQWM7QUFDN0IsU0FBRztBQUFBLFFBQUcsUUFBUUEsU0FBUSxZQUFZO0FBQUEsUUFBRyxNQUNuQyxRQUFRLElBQUksbUNBQW1DO0FBQUEsTUFDakQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixVQUFVO0FBQUEsTUFDVixnQkFBZ0I7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjLEtBQUs7QUFBQSxFQUNyQjtBQUFBLEVBQ0E7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWCxhQUFhLENBQUM7QUFBQSxFQUNoQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbIm91dERpciJdCn0K
