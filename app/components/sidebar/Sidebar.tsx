"use client";

import { FC } from "react";
import styles from "./Sidebar.module.scss";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import { MENU, MENU_APP } from "./Sidebar.data";

const Sidebar: FC = () => {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <Navigation menu={MENU} />
      <Navigation menu={MENU_APP} />
    </aside>
  );
};

export default Sidebar;
