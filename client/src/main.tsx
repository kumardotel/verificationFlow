import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerificationSuccess from './components/VerificationSuccess';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/success" element={<VerificationSuccess />} />
        </Routes>
    </Router>
  </React.StrictMode>,
)
