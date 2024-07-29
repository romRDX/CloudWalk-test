'use client'
import generateUniqueId from '@/utils/generateUniqueId';
import React, { createContext, useState, useContext, useMemo } from 'react';

const SquadsContext = createContext();

const fakeSquads = [
  {
    id: 123,
    name: 'teste1',
    members: [
      {
        id: 111,
        name: 'C-3PO',
        height: 111,
        mass: 111
      },
      {
        id: 222,
        name: 'R2D2',
        height: 222,
        mass: 222
      },
    ]
  },
  {
    id: 456,
    name: 'teste2',
    members: [
      {
        id: 333,
        name: 'Princess Leia',
        height: 333,
        mass: 333
      },
      {
        id: 444,
        name: 'R2D2',
        height: 444,
        mass: 444
      },
    ]
  },
]

export const SquadsProvider = ({ children }) => {
  const [squads, setSquads] = useState(fakeSquads);

  const handleCreateNewSquad = ({ squadName, data }) => {
    const newSquad = {
      id: generateUniqueId(),
      name: squadName,
      members: [data]
    };

    setSquads((prev) => [...prev, newSquad]);
  }

  const handleAddToSquad = (squadId, newMember) => {

    const selectedSquad = squads.find((squad) => squad.id == squadId);
    const memberExists = selectedSquad?.members.some(item => item.name === newMember.name);

    if(memberExists) return;

    const newSquads = squads.map((squad) => {
      if(squad.id == squadId){
        return {
          ...squad,
          members: [...squad.members, { ...newMember, id: generateUniqueId('number') }]
        }
      } else {
        return squad;
      }
    });

    setSquads(newSquads);
  }

  const value = useMemo(
    () => ({
      squads, setSquads, handleAddToSquad,
    }),
    [
      squads, setSquads, handleAddToSquad,
    ]
  )

  return (
    <SquadsContext.Provider
      value={value}
    >
      {children}
    </SquadsContext.Provider>
  );
};

export function useSquads() {
  return useContext(SquadsContext);
}