
import { defineConfig } from "vite";
import { resolve } from "node:path";
import { existsSync } from "node:fs";

const root = process.cwd();

const pages = {
  home: resolve(root, "index.html"),
  login: resolve(root, "login.html"),
  registration: resolve(root, "pages/school-registration.html"),
};

if (existsSync(resolve(root, "dashboard.html"))) {
  pages.dashboard = resolve(root, "dashboard.html");
}

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: pages,
    },
  },
});
