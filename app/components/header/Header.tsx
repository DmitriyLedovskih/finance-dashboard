import { FC } from "react";
import Weather from "../weather/Weather";
import Search from "../search/Search";
import styles from "./Header.module.scss";
import Profile from "../profile/Profile";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <Weather />
        <Search className={styles.search} />
      </div>
      <Profile />
    </header>
  );
};

export default Header;
