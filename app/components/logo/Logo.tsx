import Link from "next/link";
import { FC } from "react";
import styles from "./Logo.module.scss";
import { Circle } from "lucide-react";

const Logo: FC = () => {
  return (
    <Link href="/" className={styles.logo}>
      <Circle size={30} color="#fe5e34" />
    </Link>
  );
};

export default Logo;
