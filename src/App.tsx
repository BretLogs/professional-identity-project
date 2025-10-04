import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import FormPage from '@/pages/FormPage'
import Portfolio from '@/pages/Portfolio'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default App
