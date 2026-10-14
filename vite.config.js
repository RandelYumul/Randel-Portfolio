import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT for GitHub Pages:
// - Repo named "my-portfolio"            -> base: '/my-portfolio/'
// - Repo named "yourusername.github.io"  -> base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/Randel-Portfolio/', 
})
