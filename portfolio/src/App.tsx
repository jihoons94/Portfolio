import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TechDetailPage from './pages/TechDetailPage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tech/:techId" element={<TechDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
