import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Footer from "./components/Footer"



const App = () => {
  return (
    <div className="w-full relative min-h-screen bg-bgdark-0">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/uses" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default App


