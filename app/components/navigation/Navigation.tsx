import { FC, useState } from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { NavigationType } from "@/app/types/navigationType";
import { usePathname } from "next/navigation";

const Navigation: FC<NavigationType[]> = ({ menu }) => {
  const path = usePathname();
  const [num, setNum] = useState<number>(0);
  console.log();

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {menu.map((item: NavigationType, index: number) => (
          <li key={item.id}>
            <Link
              href={item.link}
              className={`${styles.link} ${
                path === item.link ? styles.link_active : ""
              }`}
              style={{
                backgroundColor:
                  num === item.id && item.color
                    ? `rgba(${item.color}, 0.2)`
                    : item.color && "#111",
              }}
              onMouseOver={() => setNum(index + 1)}
              onMouseLeave={() => setNum(0)}
            >
              <item.icon
                className={styles.icon}
                size={item.size ? 20 : 25}
                color={
                  path === item.link
                    ? "#fff"
                    : item.color
                    ? `rgb(${item.color})`
                    : "#3f3f3f"
                }
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
