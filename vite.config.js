
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), "index.html"),
        login: resolve(process.cwd(), "login.html"),
        dashboard: resolve(process.cwd(), "dashboard.html"),
        registration: resolve(
          process.cwd(),
          "pages/school-registration.html"
        )
      }
    }
  }
});
