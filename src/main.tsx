import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header.tsx'
import DashboardPage from './dashboardPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <DashboardPage />
  </StrictMode>,
)
