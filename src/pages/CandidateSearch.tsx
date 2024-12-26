import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [username, setUsername] = useState(''); // State to hold the username input

  useEffect(() => {
    const fetchCandidateData = async () => {
      if (username) {
        try {
          const data = await searchGithubUser(username);
          if (data) {
            const candidateData: Candidate = {
              Name: data.name,
              UserName: data.login,
              Location: data.location,
              Avatar: data.avatar,
              Email: data.email,
              Html_url: data.html_url,
              Company: data.company,
            };
            setCandidate(candidateData);
          }
        } catch (error) {
          console.error('Error fetching candidate data:', error);
        }
      }
    };

    fetchCandidateData();
  }, [username]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // The useEffect hook will automatically fetch the data when the username state changes
  };


  return (
    <div className="candidate-search-container">
      <h1>Candidate Search</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      {candidate && (
        <div className="candidate-container">
          <img src={candidate.Avatar || ''} alt={candidate.Name || 'Candidate Avatar'} className="candidate-avatar" />
          <h2>{candidate.Name}</h2>
          <p>Username: {candidate.UserName}</p>
          <p>Location: {candidate.Location}</p>
          <p>Email: {candidate.Email}</p>
          <p>Company: {candidate.Company}</p>
          <a href={candidate.Html_url || ''} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </div>
      )}
    </div>
  );
};


export default CandidateSearch;
