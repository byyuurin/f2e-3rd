import { defineConfig } from 'vite-plugin-windicss';
import LineClampPlugin from 'windicss/plugin/line-clamp';

export default defineConfig({
  darkMode: 'class',
  theme: {},
  plugins: [LineClampPlugin]
});
