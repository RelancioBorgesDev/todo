import React from 'react'
import styles from './task.module.css'
import {ClipboardText} from 'phosphor-react'

export function Task() {
  return (
    <div className={styles.task_container}>
        <header className={styles.header}>
              <p className={styles.criada}>Tarefas criadas <span>0</span></p>
              <p className={styles.concluida}>Concluidas <span>0</span></p>
        </header>
        <div className={styles.content}>
          <ClipboardText size={56} />
          <div>
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
    </div>
  )
}
