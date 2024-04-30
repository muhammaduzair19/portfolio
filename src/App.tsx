import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"

const App = () => {
  return (
    <div className="w-full h-screen bg-bgdark-0">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" index element={<About />} />
          <Route path="/projects" index element={<Projects />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App