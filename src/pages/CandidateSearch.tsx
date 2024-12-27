import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import { GitHubUser } from '../interfaces/GitHubUser';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState(0);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(() => {
    const saved = localStorage.getItem('savedCandidates');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const users = await searchGithub();
        const candidateData: Candidate[] = await Promise.all(
          users.map(async (user: { login: string }) => {
            const data: GitHubUser = await searchGithubUser(user.login);
            return {
              Name: data.name || '',
              UserName: data.login || '',
              Location: data.location || '',
              Avatar: data.avatar_url || '',
              Email: data.email || '',
              Html_url: data.html_url || '',
              Company: data.company || '',
            } as Candidate;
          })
        );
        setCandidates(candidateData);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    fetchCandidates();
  }, []);

  const handleSaveCandidate = () => {
    if (currentCandidateIndex < candidates.length) {
      const newSavedCandidates = [...savedCandidates, candidates[currentCandidateIndex]];
      setSavedCandidates(newSavedCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(newSavedCandidates));
      setCurrentCandidateIndex(currentCandidateIndex + 1);
    }
  };

  const handleSkipCandidate = () => {
    if (currentCandidateIndex < candidates.length) {
      setCurrentCandidateIndex(currentCandidateIndex + 1);
    }
  };

  const currentCandidate = candidates[currentCandidateIndex];

  return (
    <div className="candidate-search-container">
      <h1>Candidate Search</h1>
      {currentCandidate ? (
        <div className="candidate-container">
          <img src={currentCandidate.Avatar || ''} alt={currentCandidate.Name || 'Candidate Avatar'} className="candidate-avatar" />
          <h2>{currentCandidate.Name}</h2>
          <p>Username: {currentCandidate.UserName}</p>
          <p>Location: {currentCandidate.Location}</p>
          <p>Email: {currentCandidate.Email}</p>
          <p>Company: {currentCandidate.Company}</p>
          <a href={currentCandidate.Html_url || '#'} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          <div className="button-container">
            <button className="save-button" onClick={handleSaveCandidate}>+</button>
            <button className="skip-button" onClick={handleSkipCandidate}>-</button>
          </div>
        </div>
      ) : (
        <p>No more candidates available</p>
      )}
    </div>
  );
};

export default CandidateSearch;