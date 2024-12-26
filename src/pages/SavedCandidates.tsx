import { useState, useEffect } from 'react';
import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(() => {
    const saved = localStorage.getItem('savedCandidates');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const saved = localStorage.getItem('savedCandidates');
    if (saved) {
      setSavedCandidates(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="saved-candidates-container">
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        savedCandidates.map((candidate, index) => (
          <div key={index} className="candidate-container">
            <img src={candidate.Avatar || ''} alt={candidate.Name || 'Candidate Avatar'} className="candidate-avatar" />
            <h2>{candidate.Name}</h2>
            <p>Username: {candidate.UserName}</p>
            <p>Location: {candidate.Location}</p>
            <p>Email: {candidate.Email}</p>
            <p>Company: {candidate.Company}</p>
            <a href={candidate.Html_url || '#'} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </div>
        ))
      ) : (
        <p>No candidates have been accepted</p>
      )}
    </div>
  );
};

export default SavedCandidates;