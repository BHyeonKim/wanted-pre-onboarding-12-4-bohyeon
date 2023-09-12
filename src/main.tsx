import 'styles/index.scss'

import { worker } from 'mocks/browser'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
