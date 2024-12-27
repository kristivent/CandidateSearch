import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

type CandidateCardProps = {
    currentCandidate: Candidate;
    saveCandidate?: (() => void) | null;
    onSavedCandidates?: boolean | null;
    onPotentialCandidates?: boolean | null;
    addtoPotentialCandidates?: (() => void) | null;
    removeFromStorage?:
        | ((
            e: React.MouseEvent<SVGSVGElement, MouseEvent>,
            currentlyOnSavedCandidates: boolean | null | undefined,
            title: string | null
        ) => void)
        | null;
    };

    const candidateCard = ({
        currentCandidate,
        addtoPotentialCandidates,
        onPotentialCandidates,
        removeFromStorage,
    }: CandidateCardProps) => {
        return (
            <>
                {currentCandidate?.Name ? (
                    <section className='candidateCard'>
                        <figure>
                            <img src={`${currentCandidate.Avatar}`} alt={`${currentCandidate.Name}`} />
                        </figure>
                        <article className='details'>
                            <h2>{currentCandidate.UserName}</h2>
                            <p>
                                <strong>Location:</strong> {currentCandidate.Location}
                            </p>
                            <p>
                                <strong>Email:</strong> {currentCandidate.Email}
                            </p>
                            <p>
                                <strong>HTML:</strong> {currentCandidate.Html_url}
                            </p>
                            <p>
                                <strong>Company:</strong> {currentCandidate.Company}
                            </p>
                        </article>
                        {onPotentialCandidates ? (
                            <aside className='icons'>
                                <ImCross
                                    style={{ fontSize: '40px', cursor: 'pointer' }}
                                    onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
                                      removeFromStorage?.(
                                        e,
                                        onPotentialCandidates, 
                                        currentCandidate.Name)
                                    }
                                />
                            </aside>
                        ) : (
                            <aside className='icons'>
                                <CgPlayListAdd
                                    onClick={() => addtoPotentialCandidates?.()}
                                />
                            </aside>
                        )}
                    </section>
                ) : null}
            </>
                );
            };
        
        export default candidateCard;