import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import Landing from './Pages/Landing'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </>
  )
}

export default App