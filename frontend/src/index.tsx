import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './app/App'
import '@/app/styles/index.css'
import { GlobalContextProvider } from './shared/context/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalContextProvider>
                <App />
            </GlobalContextProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
