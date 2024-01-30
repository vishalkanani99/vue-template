import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://github.com/unplugin/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'
// https://github.com/unplugin/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
// https://github.com/posva/unplugin-vue-router
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://github.com/JohnCampionJr/vite-plugin-vue-layouts
import Layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-template/',
  plugins: [
    VueRouter({
      routesFolder: ['src/pages'],
      dts: 'src/typed-router.d.ts',
    }),
    vue(),
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        'pinia'
      ],
      dirs: [
        'src/composables/**',
        'src/utils/**',
      ],
      dts: 'src/auto-imports.d.ts',
      vueTemplate: true,
    }),
    Components({
      dirs: [
        'src/components',
        'src/layouts',
      ],
      dts: 'src/components.d.ts',
      deep: true,
    }),
    Layouts(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
