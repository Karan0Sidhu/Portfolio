// vite.config.js
import { defineConfig } from "file:///C:/Users/karan/OneDrive%20-%20ualberta.ca/Documents/portfoli%20mock/karan_s_application_2/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/karan/OneDrive%20-%20ualberta.ca/Documents/portfoli%20mock/karan_s_application_2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import tagger from "file:///C:/Users/karan/OneDrive%20-%20ualberta.ca/Documents/portfoli%20mock/karan_s_application_2/node_modules/@dhiwise/component-tagger/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), tagger()],
  build: {
    outDir: "dist"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxrYXJhblxcXFxPbmVEcml2ZSAtIHVhbGJlcnRhLmNhXFxcXERvY3VtZW50c1xcXFxwb3J0Zm9saSBtb2NrXFxcXGthcmFuX3NfYXBwbGljYXRpb25fMlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxca2FyYW5cXFxcT25lRHJpdmUgLSB1YWxiZXJ0YS5jYVxcXFxEb2N1bWVudHNcXFxccG9ydGZvbGkgbW9ja1xcXFxrYXJhbl9zX2FwcGxpY2F0aW9uXzJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2thcmFuL09uZURyaXZlJTIwLSUyMHVhbGJlcnRhLmNhL0RvY3VtZW50cy9wb3J0Zm9saSUyMG1vY2sva2FyYW5fc19hcHBsaWNhdGlvbl8yL3ZpdGUuY29uZmlnLmpzXCI7Ly8gdml0ZS5jb25maWcuanNcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHRhZ2dlciBmcm9tIFwiQGRoaXdpc2UvY29tcG9uZW50LXRhZ2dlclwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCksdGFnZ2VyKCldLFxuICBidWlsZDoge1xuICAgIG91dERpcjogXCJkaXN0XCIsXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoJy4vc3JjJyksXG4gICAgICAnQGNvbXBvbmVudHMnOiBwYXRoLnJlc29sdmUoJy4vc3JjL2NvbXBvbmVudHMnKSxcbiAgICAgICdAcGFnZXMnOiBwYXRoLnJlc29sdmUoJy4vc3JjL3BhZ2VzJyksXG4gICAgICAnQGFzc2V0cyc6IHBhdGgucmVzb2x2ZSgnLi9zcmMvYXNzZXRzJyksXG4gICAgICAnQGNvbnN0YW50cyc6IHBhdGgucmVzb2x2ZSgnLi9zcmMvY29uc3RhbnRzJyksXG4gICAgICAnQHN0eWxlcyc6IHBhdGgucmVzb2x2ZSgnLi9zcmMvc3R5bGVzJyksXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogXCI0MDI4XCIsXG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgICBhbGxvd2VkSG9zdHM6IFsnLmFtYXpvbmF3cy5jb20nLCAnLmJ1aWx0d2l0aHJvY2tldC5uZXcnXVxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sWUFBWTtBQUduQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFFLE9BQU8sQ0FBQztBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxPQUFPO0FBQUEsTUFDekIsZUFBZSxLQUFLLFFBQVEsa0JBQWtCO0FBQUEsTUFDOUMsVUFBVSxLQUFLLFFBQVEsYUFBYTtBQUFBLE1BQ3BDLFdBQVcsS0FBSyxRQUFRLGNBQWM7QUFBQSxNQUN0QyxjQUFjLEtBQUssUUFBUSxpQkFBaUI7QUFBQSxNQUM1QyxXQUFXLEtBQUssUUFBUSxjQUFjO0FBQUEsSUFDeEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixjQUFjLENBQUMsa0JBQWtCLHNCQUFzQjtBQUFBLEVBQ3pEO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
