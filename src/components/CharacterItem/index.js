'use client'
import styles from "./characterItem.module.css";
import { fetchData } from "@/utils/fetchUtils";
import { useQuery } from '@tanstack/react-query';

const CharacterItem = ({ data }) => {
    
    const { isPending, isError, data: homeworld, error, refetch } = useQuery({
        queryKey: ['planet', data.homeworld],
        queryFn: () => fetchData(data.homeworld),
        cacheTime: 1000 * 60 * 5,
        staleTime: 1000 * 60 * 1,
        refetchOnWindowFocus: false,
        enabled: !!data,
    });
    
    return (
        <li key={data.name} className={styles.character__container} role="listitem">
            
            <img className={styles.character__img} src="https://picsum.photos/432/230" alt={`${data.name} portrait`} />
            <p className={styles.character__name} aria-live="polite">{data.name}</p>
            <p className={styles.character__homeworld} aria-live="polite">{homeworld?.name}</p>
            <p className={styles.character__details} aria-live="polite">HEIGHT • {data.height}</p>
            <p className={styles.character__details} aria-live="polite">MASS • {data.mass}</p>
            <p className={styles.character__details} aria-live="polite">GENDER • {data.gender}</p>
        </li>
    )
}

export default CharacterItem;