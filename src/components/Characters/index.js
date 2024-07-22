'use client'
import React from "react";
import { useFilters } from "@/hooks/useFilters";
import styles from "./characters.module.css";

import { useQuery } from '@tanstack/react-query';
import { fetchData, fetchMultipleData } from "@/utils/fetchUtils";
import CharacterItem from "../CharacterItem";
import Loader from "../Loader";

const Characters = () => {
    
    const { filter } = useFilters();

    // const [allPagination, setAllPagination] = useState(1);

    const { isPending, isError, data, error, refetch } = useQuery({
        queryKey: ['characters', filter.filter],
        queryFn: () => filter.filter == 'all' ? fetchData('https://swapi.dev/api/people/') : fetchMultipleData(filter.urls),
        cacheTime: 1000 * 60 * 5,
        staleTime: 1000 * 60 * 1,
        refetchOnWindowFocus: false,
    });

    return (
        <div className={styles.characters__container}>
            <h2 className={styles.characters__title} tabIndex="0">All Characters</h2>

            <ul className={styles.characters__list} role="list">
                {
                    !isPending && data ?
                    data.results.map((item) => (
                        <CharacterItem key={data.name} data={item} />
                    ))
                    :
                    <Loader />
                }
                {isError && <p>Error loading characters: {error.message}</p>}
            </ul>
        </div>
    )
}

export default Characters;