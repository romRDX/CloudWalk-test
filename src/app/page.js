import styles from "./page.module.css";
import Filter from "@/components/Filter";
import Characters from "@/components/Characters";
import { FiltersProvider } from "@/hooks/useFilters";

export default function Home() {
  return (
    <div className={styles.main}>
      <FiltersProvider>
        <Filter />
        <Characters />
      </FiltersProvider>
    </div>
  );
}
