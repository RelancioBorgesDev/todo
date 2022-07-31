import "./styles/global.css";
import styles from "./app.module.css";
import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface ITaskArray {
  id: string;
  title: string;
  isDone: boolean;
}
export default function App() {
  const [tasks, setTasks] = useState<Array<ITaskArray>>([]);
  const [newTask, setNewTask] = useState<string>("");

  const qntTasks = tasks.length;
  const completedTasks = tasks.filter((tasks) => tasks.isDone).length;

  function handleCreateTask(event: any) {
    event.preventDefault();
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: newTask,
        isDone: false,
      },
    ]);
    setNewTask("");
  }

  function createNewTask(event: any) {
    setNewTask(event.target.value);
  }

  function handleTaskDone(id: string) {
    let taskPerId = tasks.filter((task) => {
      if (task.id === id) {
        return (task.isDone = !task.isDone);
      }
    });
    setTasks([...tasks]);
  }

  function deleteTaskById(id: string) {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
  }

  return (
    <>
      <div className={styles.app_container}>
        <Header />
        <form onSubmit={handleCreateTask} className={styles.add_tarefa}>
          <input
            type='text'
            placeholder='Adicione uma nova tarefa'
            value={newTask}
            onChange={createNewTask}
          />
          <button type='submit'>
            Criar <PlusCircle size={26} />
          </button>
        </form>
      </div>

      <div className={styles.task_container}>
        <header className={styles.header}>
          <p className={styles.criada}>
            Tarefas criadas<span>{tasks.length}</span>
          </p>
          <p className={styles.concluida}>
            Concluidas
            <span>
              {tasks.length == 0 ? 0 : `${completedTasks} de ${qntTasks}`}
            </span>
          </p>
        </header>

        <Task
          tasks={tasks}
          handleTaskDone={handleTaskDone}
          deleteTaskById={deleteTaskById}
        />
      </div>
    </>
  );
}
