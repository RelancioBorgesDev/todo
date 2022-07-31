import React from "react";
import styles from "./header.module.css";
import logo from "../assets/rocket.png";
import { PlusCircle } from "phosphor-react";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt='logo do todo' />
        <p>
          to<span>do</span>
        </p>
      </div>
    </header>
  );
}
