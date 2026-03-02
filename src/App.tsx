import { BrowserRouter } from 'react-router'
import './App.css'
import AppRoutes from './routes'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
    return (
        <LanguageProvider>
            <BrowserRouter basename="/portfolio">
                <AppRoutes />
            </BrowserRouter>
        </LanguageProvider>
    )
}

export default App
