import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'
import 'antd/dist/antd'
import { ConfigProvider } from 'antd';
import ptBr from 'antd/lib/locale/pt_BR'
import AppPr from './AppPr.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={ptBr}>
    <AppPr />
    </ConfigProvider>
  </React.StrictMode>,
)

//importar Login dps de App
