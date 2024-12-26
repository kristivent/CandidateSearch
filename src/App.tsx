import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import CandidateSearch from './pages/CandidateSearch';
import SavedCandidates from './pages/SavedCandidates';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<CandidateSearch />} />
        <Route path="/saved-candidates" element={<SavedCandidates />} />
        <Route path="*" element={<ErrorPage />} /> {/* Catch-all route for undefined routes */}
      </Routes>
    </Router>
  );
}

export default App;