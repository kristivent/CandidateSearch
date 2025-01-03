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

  const handleRejectCandidate = (index: number) => {
    const updatedCandidates = savedCandidates.filter((_, i) => i !== index);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  return (
    <div className="saved-candidates-container">
      <h1>Potential Candidates</h1>
      {savedCandidates.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Username</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Profile</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate, index) => (
              <tr key={index}>
                <td><img src={candidate.Avatar || ''} alt={candidate.Name || 'Candidate Avatar'} className="candidate-avatar" /></td>
                <td>{candidate.Name}</td>
                <td>{candidate.UserName}</td>
                <td>{candidate.Location}</td>
                <td>{candidate.Email}</td>
                <td>{candidate.Company}</td>
                <td><a href={candidate.Html_url || '#'} target="_blank" rel="noopener noreferrer">GitHub Profile</a></td>
                <td><button onClick={() => handleRejectCandidate(index)}>Reject</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No candidates have been accepted</p>
      )}
    </div>
  );
};

export default SavedCandidates;