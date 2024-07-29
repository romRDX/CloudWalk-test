import React, { useEffect, useMemo, useState } from 'react';
import styles from './manageSquadsModal.module.css';
import { useSquads } from '@/hooks/useSquads';
import MemberItem from '../MemberItem';

const ManageSquadsModal = ({ selectedChar }) => {

    const { squads, handleAddToSquad } = useSquads();

    const [selectedSquad, setSelectedSquad] = useState();

    const handleSelectSquad = (squadId) => {
        const squad = squads.find((item) => item.id == squadId);

        if(squad){
            setSelectedSquad(squad);
        }
    }

    useEffect(() => {
        if(selectedSquad){
            handleSelectSquad(selectedSquad.id);
        }
    }, [squads])

    const isInSquad = useMemo(() => {
        if(!selectedSquad) return false;

        return selectedSquad.members.some(item => item.name == selectedChar.name)
    }, [selectedSquad, selectedChar])
    
    return (
        <div className={styles['manage-squads-modal__container']}>
            <p className={styles['manage-squads-modal__title']}>Escolher squad para {selectedChar.name}</p>
            <div className={styles['manage-squads-modal__select-container']}>
                <p className={styles['manage-squads-modal__text']}>Selecionar squad:</p>

                <select
                    className={styles['manage-squads-modal__select']}
                    onChange={(e) => handleSelectSquad(e.target.value)} id="selectInput"
                    aria-label="Filter by planet"
                    aria-required="true"
                >
                    <option disabled selected hidden className={styles['manage-squads-modal__select-option']} value="all">Selecionar</option>
                    {
                        squads && (
                            squads.map((squad) => (
                                <option
                                    key={squad.name}
                                    className={styles['manage-squads-modal__select-option']}
                                    value={squad.id}
                                >
                                    {squad.name}
                                </option>
                            ))
                        )
                    }
                </select>
            </div>

            <div className={styles['manage-squads-modal__squad-details__container']}>
                <p className={styles['manage-squads-modal__squad-details__name']}>{selectedSquad?.name}</p>
                
                <div className={styles['manage-squads-modal__squad-details__squad-header']}>
                    <h3 className={styles['manage-squads-modal__squad-details__text']}>Squad Members</h3>

                    <button
                        className={styles['manage-squads-modal__squad-details__button']}
                        disabled={isInSquad || !selectedSquad}
                        onClick={() => handleAddToSquad(selectedSquad.id, selectedChar)}
                    >
                        {
                            isInSquad ? 'Já é membro' : 'Participar'
                        }
                    </button>
                </div>

                <ul className={styles['manage-squads-modal__squad-details__list']}>
                    {
                        (selectedSquad && selectedSquad.members.length > 0) ? selectedSquad.members.map((member) => (
                            <MemberItem key={member.id} data={member} isUser={selectedChar.name === member.name} />
                        ))
                        :
                        <span>Não há membros nessa squad</span>
                    }
                </ul>
            </div>
        </div>
    );
};

export default ManageSquadsModal;
