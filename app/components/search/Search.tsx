import { SearchIcon } from "lucide-react";
import { FC } from "react";
import styles from "./Search.module.scss";
import { searchType } from "@/app/types/searchType";

const Search: FC<searchType> = ({ className }) => {
  return (
    <form className={`${styles.form} ${className ? className : ""}`}>
      <SearchIcon className={styles.icon} size={20} color="#aeb6bb" />
      <input type="text" placeholder="Поиск" className={styles.input} />
    </form>
  );
};

export default Search;
