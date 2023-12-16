import { FC } from "react";
import styles from "./Profile.module.scss";
import { Bell, ChevronDown, Mic, MoonIcon } from "lucide-react";
import Image from "next/image";

const Profile: FC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.row}>
        <button className={styles.button} type="button">
          <MoonIcon size={20} className={styles.icon} color="#fffefe" />
        </button>
        <button className={styles.button} type="button">
          <Mic size={20} className={styles.icon} color="#fffefe" />
        </button>
        <button className={styles.button} type="button">
          <Bell size={20} className={styles.icon} color="#fffefe" />
        </button>
      </div>
      <button className={styles.button} type="button">
        <Image
          src="/avatar.png"
          alt="Аватарка"
          width={30}
          height={30}
          className={styles.avatar}
        />
        <div>
          <span className={styles.name}>
            Имя Фамилия Отчество
            <ChevronDown size={15} />
          </span>
          <span className={styles.email}>email@email.ru</span>
        </div>
      </button>
    </div>
  );
};

export default Profile;
