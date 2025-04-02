import './App.css'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { LanguageContextProvider } from './Context/Language'
import { IntlProvider } from 'react-intl'



function App() {
  return (
    <>
    <LanguageContextProvider>
    <Header/>
    <Home/>
    <Footer/>
    </LanguageContextProvider>
    </>
  )
}

export default App
