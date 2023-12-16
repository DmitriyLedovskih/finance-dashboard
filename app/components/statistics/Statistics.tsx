import { FC } from "react";
import Block from "../block/Block";
import styles from "./Statistics.module.scss";

const Statistics: FC = () => {
  return (
    <div className={styles.blocks}>
      <Block className={styles.block} />
      <Block className={styles.block} />
      <Block className={styles.block} />
    </div>
  );
};

export default Statistics;
