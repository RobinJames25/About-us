import About from "./pages/about";
import Header from "./components/header";
import Footer from "./components/footer";
import Services from "./pages/services";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>  
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
