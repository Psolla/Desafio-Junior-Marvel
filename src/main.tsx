import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'antd/dist/reset.css'
import { ConfigProvider } from 'antd';
import ptBr from 'antd/lib/locale/pt_BR'





ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={ptBr}>
   <App />
    </ConfigProvider>
  </React.StrictMode>,
)

//importar Login dps de App
