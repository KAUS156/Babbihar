
import { defineConfig } from "vite";
import { resolve } from "node:path";
import { existsSync } from "node:fs";

const root = process.cwd();

const pages = {
  home: "index.html",
  login: "login.html",
  dashboard: "dashboard.html",
  registration: "pages/school-registration.html"
};

const input = Object.fromEntries(
  Object.entries(pages)
    .filter(([, file]) => existsSync(resolve(root, file)))
    .map(([name, file]) => [name, resolve(root, file)])
);

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input
    }
  }
});
