'use client'
import React from "react";
import styles from "./characterItem.module.css";
import { fetchData } from "@/utils/fetchUtils";
import { useQuery } from '@tanstack/react-query';
import { useSquads } from "@/hooks/useSquads";
import { useModal } from "@/hooks/useModal";
import ManageSquadsModal from "@/modules/squads/ManageSquadsModal";
import ImgSkeleton from "../../../layout/ImgSkeleton";

const CharacterItem = ({ data }) => {

    const { } = useSquads();

    const { openModal } = useModal();
    
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

            <ImgSkeleton src={"https://picsum.photos/432/230"} width={432} height={230} alt={`${data.name} portrait`} />

            <p className={styles.character__name} aria-live="polite">{data.name}</p>
            <p className={styles.character__homeworld} aria-live="polite">{homeworld?.name}</p>
            <p className={styles.character__details} aria-live="polite">HEIGHT • {data.height}</p>
            <p className={styles.character__details} aria-live="polite">MASS • {data.mass}</p>
            <p className={styles.character__details} aria-live="polite">GENDER • {data.gender}</p>

            <button
                className={styles.character__button}
                onClick={() => openModal(<ManageSquadsModal selectedChar={data} />)}
            >
                Add to squads
            </button>
        </li>
    )
}

export default CharacterItem;