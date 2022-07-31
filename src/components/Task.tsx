import React, { useState } from "react";
import styles from "./task.module.css";
import { CheckCircle, Circle, ClipboardText, Trash } from "phosphor-react";
import { ITaskArray } from "../App";

interface ITask {
  tasks: Array<ITaskArray>;
  handleTaskDone: (id: string) => void;
  deleteTaskById: (id: string) => void;
}

export function Task({ tasks, handleTaskDone, deleteTaskById }: ITask) {
  console.log(tasks);
  return (
    <div>
      {tasks.length === 0 ? (
        <div className={styles.content_empty}>
          <ClipboardText size={56} />
          <div>
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        <div className={styles.content}>
          {tasks.map((task) => (
            <div className={styles.container}>
              <button onClick={() => handleTaskDone(task.id)}>
                {!task.isDone ? (
                  <Circle className={styles.circle} size={34} />
                ) : (
                  <CheckCircle className={styles.circle_filled} size={34} />
                )}
              </button>
              <span
                className={!task.isDone ? styles.task : styles.task_finished}
              >
                {task.title}
              </span>
              <button onClick={() => deleteTaskById(task.id)}>
                <Trash className={styles.trash} size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
