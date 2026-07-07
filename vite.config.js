import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Agar local test kar rahe hain toh abhi base path ko hata kar check karein
})