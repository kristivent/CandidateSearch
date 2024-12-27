import { useState, FormEvent } from 'react';
import { searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    Name: '',
    UserName: '',
    Location: '',
    Avatar: '',
    Email: '',
    Html_url: '',
    Company: '',
  });

  const [searchInput, setSearchInput] = useState<string>('');

  const addToPotentialCandidates = () => {
    let parsedPotentialCandidates: Candidate[] = [];
    const storedPotentialCandidates = localStorage.getItem('potentialCandidates');
    if (typeof storedPotentialCandidates === 'string') {
      parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
    }
    parsedPotentialCandidates.push(currentCandidate);
    localStorage.setItem('savedCandidates', JSON.stringify(parsedPotentialCandidates));
  };

  const searchForCandidateByUsername = async (event: FormEvent, username: string) => {
    event.preventDefault();
    const data: Candidate = await searchGithubUser(username);
    setCurrentCandidate(data);
  };

  return (
    <>
      <section id='searchSection'>
        <form
          onSubmit={(event: FormEvent) =>
            searchForCandidateByUsername(event, searchInput)
          }
        >
          <input
            type='text'
            placeholder='Enter a GitHub Username'
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit' id='searchBtn'>
            Search
          </button>
        </form>
      </section>
      {currentCandidate && (
        <div className="candidate-container">
          <img src={currentCandidate.Avatar || ''} alt={currentCandidate.Name || 'Candidate Avatar'} className="candidate-avatar" />
          <h2>{currentCandidate.Name}</h2>
          <p>Username: {currentCandidate.UserName}</p>
          <p>Location: {currentCandidate.Location}</p>
          <p>Email: {currentCandidate.Email}</p>
          <p>Company: {currentCandidate.Company}</p>
          <a href={currentCandidate.Html_url || '#'} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          <div className="button-container">
            <button className="save-button" onClick={addToPotentialCandidates}>Save</button>
          </div>
        </div>
      )}
    </>
  );
};

export default CandidateSearch;