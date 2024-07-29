'use client'
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useFilters } from '@/hooks/useFilters';
import { fetchMultipleData } from '@/utils/fetchUtils';
import { useMemo } from 'react';
import styles from "./planetsFilter.module.css";
import Loader from '../../layout/Loader';

const planetUrls = [
    'https://swapi.dev/api/planets/?page=1',
    'https://swapi.dev/api/planets/?page=2',
    'https://swapi.dev/api/planets/?page=3',
    'https://swapi.dev/api/planets/?page=4',
    'https://swapi.dev/api/planets/?page=5',
    'https://swapi.dev/api/planets/?page=6',
];

const Filter = () => {

    const { setFilter } = useFilters();

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['planets', planetUrls],
        queryFn: () => fetchMultipleData(planetUrls),
        cacheTime: 1000 * 60 * 5,
        staleTime: 1000 * 60 * 2,
        refetchOnWindowFocus: false,
    });
    
    const handleSetFilter = (filterData) => {
        
        const planetName = filterData.target.value;

        if(planetName === 'all'){
            setFilter({ filter: 'all', urls: 'all'});
        } else {
            const planetResidents = planetsData.find((item) => item.name == planetName).residents;
            setFilter({ filter: planetName, urls: planetResidents });
        }
    }

    const planetsData = useMemo(() => {
        if(!data) return [];

        return data.results.flatMap(data => data.results)
    }, [data])

    return (
        <div className={styles.filter__container}  aria-live="polite">
            <p className={styles.filter__text}>Filter By:</p>

            <select
                className={styles.filter__select}
                onChange={handleSetFilter} id="selectInput"
                aria-label="Filter by planet"
                aria-required="true"
                disabled={isPending && !data}
            >
                <option className={styles['filter__select-option']} value="all">All</option>
                {
                    !isPending && data && (
                        planetsData.map((planet) => (
                            <option
                                key={planet.name}
                                className={styles['filter__select-option']}
                                value={planet.name}
                            >
                                {planet.name}
                            </option>
                        ))
                    )
                }
                {isError && <p>Error loading planets: {error.message}</p>}
            </select>
            {
                isPending && !data &&
                <div className={styles.filter__loader}>
                    <Loader size='xs' />
                </div>
            }
            
        </div>
    )
}

export default Filter;