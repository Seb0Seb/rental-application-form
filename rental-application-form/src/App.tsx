import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Application from './pages/Application';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </Router>
  );
}

export default App; 