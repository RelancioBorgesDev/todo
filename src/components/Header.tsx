import React from "react";
import styles from "./header.module.css";
import logo from '../assets/rocket.png'
import {PlusCircle} from 'phosphor-react'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
            <img src={logo} alt="logo do todo" />
            <p>to<span>do</span></p>
      </div>
      <div className={styles.add_tarefa}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>Criar <PlusCircle size={26} /></button>
      </div>
    </header>
  );
}
