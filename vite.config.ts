import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/iphone-case-makeup/', // Replace with your GitHub repo name
  plugins: [react()],
})