import { FC } from "react";
import styles from "./Weather.module.scss";
import { CloudFog } from "lucide-react";

const Weather: FC = () => {
  return (
    <div className={styles.weather}>
      <CloudFog className={styles.icon} />
      Пятница, 16 Декабря 2023
    </div>
  );
};

export default Weather;
