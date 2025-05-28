import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://github.com/SBIHI-Elhabib/iphone-case-makeup', // Replace with your GitHub repo name
  plugins: [react()],
})