import React from "react";
import styles_header from "./styles_header.module.css";

const infoBlockHeader = [
  {
    title: "О нас",
    link: "#",
  },
  {
    title: "Услуги",
    link: "#",
  },
  {
    title: "Результаты",
    link: "#",
  },
  {
    title: "Отзывы",
    link: "#",
  },
  {
    title: "Контакты",
    link: "#",
  },
];
export default function Header() {
  return (
    <header>
      <container className={styles_header.container_header}>
        <div className={styles_header.logo}>
          <img src={"../src/images/logo_hands.png"} alt="logo" />
        </div>
        <nav className={styles_header.block_nav}>
          {infoBlockHeader.map((item, index) => (
            <a target="_self" key={index} href={item.link}>
              {item.title}
            </a>
          ))}
          <a href="tel:84951234567">+7 (495) 123-45-67</a>
        </nav>
      </container>
    </header>
  );
}
