import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-ai-studio/', // 這裡填入您的 GitHub 儲存庫名稱，前後都要斜線
})
