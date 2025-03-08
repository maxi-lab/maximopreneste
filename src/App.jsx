import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  

  return (
    <>
    <body>
    <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path='/proyectos' element={<h1>Proyectos</h1>} />
          <Route path="/proyectos/:nombre" element={<h1>pers</h1>} />
        </Routes>
    </Router>
    {/*Footer*/}
    <Footer/>
    </body>
    </>
  )
}

export default App
