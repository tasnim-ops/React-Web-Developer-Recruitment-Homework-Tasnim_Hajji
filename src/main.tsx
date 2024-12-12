import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

//TanStack React Query: instance a QueryClient for requests managing
const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <StrictMode>

{/* wrapping the app */}
    <QueryClientProvider client={queryClient}><App /></QueryClientProvider>
    
  </StrictMode>,
)
