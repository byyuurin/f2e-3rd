import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import WindiCSS from 'vite-plugin-windicss';
import Vue from '@vitejs/plugin-vue';
import VueComponents from 'unplugin-vue-components/vite';
import VuePages from 'vite-plugin-pages';
import VueLayouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head']
    }),

    // https://github.com/antfu/unplugin-icons
    Icons(),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS(),

    Vue(),

    // https://github.com/antfu/unplugin-vue-components
    VueComponents({
      dts: true,
      directoryAsNamespace: true,
      dirs: ['src/components', 'src/containers'],
      resolvers: [
        IconsResolver({
          componentPrefix: 'svg'
        })
      ]
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    VuePages(),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    VueLayouts()
  ],
  server: {
    port: 80
  }
});
