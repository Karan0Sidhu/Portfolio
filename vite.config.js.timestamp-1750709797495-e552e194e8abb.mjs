// vite.config.js
import { defineConfig } from "file:///C:/Users/karan/OneDrive%20-%20ualberta.ca/Documents/portfoli%20mock/karan_s_application_2/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/karan/OneDrive%20-%20ualberta.ca/Documents/portfoli%20mock/karan_s_application_2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import tagger from "file:///C:/Users/karan/OneDrive%20-%20ualberta.ca/Documents/portfoli%20mock/karan_s_application_2/node_modules/@dhiwise/component-tagger/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), tagger()],
  build: {
    outDir: "build"
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@components": path.resolve("./src/components"),
      "@pages": path.resolve("./src/pages"),
      "@assets": path.resolve("./src/assets"),
      "@constants": path.resolve("./src/constants"),
      "@styles": path.resolve("./src/styles")
    }
  },
  server: {
    port: "4028",
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: [".amazonaws.com", ".builtwithrocket.new"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxrYXJhblxcXFxPbmVEcml2ZSAtIHVhbGJlcnRhLmNhXFxcXERvY3VtZW50c1xcXFxwb3J0Zm9saSBtb2NrXFxcXGthcmFuX3NfYXBwbGljYXRpb25fMlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxca2FyYW5cXFxcT25lRHJpdmUgLSB1YWxiZXJ0YS5jYVxcXFxEb2N1bWVudHNcXFxccG9ydGZvbGkgbW9ja1xcXFxrYXJhbl9zX2FwcGxpY2F0aW9uXzJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2thcmFuL09uZURyaXZlJTIwLSUyMHVhbGJlcnRhLmNhL0RvY3VtZW50cy9wb3J0Zm9saSUyMG1vY2sva2FyYW5fc19hcHBsaWNhdGlvbl8yL3ZpdGUuY29uZmlnLmpzXCI7Ly8gdml0ZS5jb25maWcuanNcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHRhZ2dlciBmcm9tIFwiQGRoaXdpc2UvY29tcG9uZW50LXRhZ2dlclwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksdGFnZ2VyKCldLFxuICBidWlsZDoge1xuICAgIG91dERpcjogXCJidWlsZFwiLFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKCcuL3NyYycpLFxuICAgICAgJ0Bjb21wb25lbnRzJzogcGF0aC5yZXNvbHZlKCcuL3NyYy9jb21wb25lbnRzJyksXG4gICAgICAnQHBhZ2VzJzogcGF0aC5yZXNvbHZlKCcuL3NyYy9wYWdlcycpLFxuICAgICAgJ0Bhc3NldHMnOiBwYXRoLnJlc29sdmUoJy4vc3JjL2Fzc2V0cycpLFxuICAgICAgJ0Bjb25zdGFudHMnOiBwYXRoLnJlc29sdmUoJy4vc3JjL2NvbnN0YW50cycpLFxuICAgICAgJ0BzdHlsZXMnOiBwYXRoLnJlc29sdmUoJy4vc3JjL3N0eWxlcycpLFxuICAgIH0sXG4gIH0sXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IFwiNDAyOFwiLFxuICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxuICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gICAgYWxsb3dlZEhvc3RzOiBbJy5hbWF6b25hd3MuY29tJywgJy5idWlsdHdpdGhyb2NrZXQubmV3J11cbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFlBQVk7QUFHbkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRSxPQUFPLENBQUM7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsT0FBTztBQUFBLE1BQ3pCLGVBQWUsS0FBSyxRQUFRLGtCQUFrQjtBQUFBLE1BQzlDLFVBQVUsS0FBSyxRQUFRLGFBQWE7QUFBQSxNQUNwQyxXQUFXLEtBQUssUUFBUSxjQUFjO0FBQUEsTUFDdEMsY0FBYyxLQUFLLFFBQVEsaUJBQWlCO0FBQUEsTUFDNUMsV0FBVyxLQUFLLFFBQVEsY0FBYztBQUFBLElBQ3hDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLElBQ1osY0FBYyxDQUFDLGtCQUFrQixzQkFBc0I7QUFBQSxFQUN6RDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
