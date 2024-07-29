import PlanetsFilter from "@/components/PlanetsFilter";
import Characters from "@/modules/characters/Characters";
import { FiltersProvider } from "@/hooks/useFilters";
import React from 'react';
import ModalContainer from "@/components/ModalContainer";

export default function Home() {
  return (
    <div>
      {/* mudar o nome do provider e jogar pra characters? */}
      <FiltersProvider>
        <PlanetsFilter />
        <Characters />
        <ModalContainer />
      </FiltersProvider>
    </div>
  );
}
