import "./styles/global.css";
import styles from './app.module.css'
import {Header} from "./components/Header";
import { Task } from "./components/Task";

export default function App() {
  return (
    <>
      <Header/>
      <Task/>
    </>
  );
}
