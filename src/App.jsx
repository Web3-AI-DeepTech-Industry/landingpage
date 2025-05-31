import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SalesPage from './Pages/SalesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sales" element={<SalesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
