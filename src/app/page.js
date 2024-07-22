import Filter from "@/components/Filter";
import Characters from "@/components/Characters";
import { FiltersProvider } from "@/hooks/useFilters";
import React from 'react';

export default function Home() {
  return (
    <div>
      <FiltersProvider>
        <Filter />
        <Characters />
      </FiltersProvider>
    </div>
  );
}
