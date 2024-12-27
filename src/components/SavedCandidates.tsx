import { useState, useEffect } from 'react';
import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from './CandidateCard';

const SavedCandidates = () => {
  const [SavedCandidates, setSavedCandidates] = useState<Candidate[]>(() => {
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
    <div className="potential-candidates-container">
      <h1>Potential Candidates</h1>
      {SavedCandidates.length > 0 ? (
        SavedCandidates.map((candidate, index) => (
          <CandidateCard
            key={index}
            currentCandidate={candidate}
          />
        ))
      ) : (
        <p>No candidates have been accepted</p>
      )}
    </div>
  );
};

export default SavedCandidates;