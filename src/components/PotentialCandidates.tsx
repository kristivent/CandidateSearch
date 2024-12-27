import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import CandidateCard from './CandidateCard';

interface PotentialCandidatesProps {
    potentialCandidates: Candidate[];
    removeFromStorage:
        | ((
            e: React.MouseEvent<SVGSVGElement, MouseEvent>,
            currentlyOnSavedCandidates: boolean | null | undefined,
            title: string | null
        ) => void)
        | null;
    };

    const PotentialCandidates = ({
        potentialCandidates,
        removeFromStorage,
    }: PotentialCandidatesProps) => {
        console.log(potentialCandidates);
    
        return (
            <>
                <ul>
                    {potentialCandidates.map((candidate) => (
                        <CandidateCard
                            currentCandidate={candidate}
                            key={candidate.Name}
                            onPotentialCandidates={true}
                            removeFromStorage={removeFromStorage}
                        />
                    ))}
                </ul>
            </>
        );
    };

    export default PotentialCandidates;