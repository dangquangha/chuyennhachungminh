import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Bản build production đã prerender HTML (scripts/prerender.mjs) → chỉ cần hydrate
if (root.firstElementChild) hydrateRoot(root, app)
else createRoot(root).render(app)
