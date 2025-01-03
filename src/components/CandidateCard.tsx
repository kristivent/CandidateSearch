import React from 'react';
import Candidate from '../interfaces/Candidate.interface';

interface CandidateCardProps {
  currentCandidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ currentCandidate }) => {
  return (
    <div className="candidate-card">
      <img src={currentCandidate.Avatar || ''} alt={currentCandidate.Name || 'Candidate Avatar'} className="candidate-avatar" />
      <h2>{currentCandidate.Name}</h2>
      <p>Username: {currentCandidate.UserName}</p>
      <p>Location: {currentCandidate.Location}</p>
      <p>Email: {currentCandidate.Email}</p>
      <p>Company: {currentCandidate.Company}</p>
      <a href={currentCandidate.Html_url || '#'} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
    </div>
  );
};

export default CandidateCard;