import { defineConfig } from 'vite-plugin-windicss'
import LineClampPlugin from 'windicss/plugin/line-clamp'

export default defineConfig({
  darkMode: 'class',
  attributify: true,
  theme: {},
  plugins: [LineClampPlugin]
})
