import React from 'react'
import styles from './newTask.module.css'
import {Circle, CheckCircle, Trash } from 'phosphor-react'

export function NewTask() {
  return (
    <div className={styles.container}>
        <Circle className={styles.circle} size={34}/>
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quasi perspiciatis culpa quam molestiae dignissimos suscipit</span>
        <Trash className={styles.trash} size={24}/>
    </div>
  )
}
