import { FC } from "react";
import styles from "./Block.module.scss";
import { BlockType } from "@/app/types/BlockType";

const Block: FC<BlockType> = ({ className }) => {
  return (
    <div className={`${styles.block} ${className ? className : ""}`}></div>
  );
};

export default Block;
