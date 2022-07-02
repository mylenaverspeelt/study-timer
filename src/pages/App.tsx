import React from "react";
import Form from "../components/Form/Form";
import List from "../components/List/List";
import style from "./appStyles.module.scss";
import Timer from "../components/Timer/Timer";
import { useState } from "react";
import { ITask } from "../types/ITasks";

function App() {
  //tipando o valor inicial que pode ser ou um array vazio ou o array do modulo ITasks

  const [task, setTask] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectedTask(selectedTask: ITask) {
    setSelected(selectedTask)
    setTask(prevValue => prevValue.map(task => ({...task, selected: task.id === selectedTask.id ? true : false})))
  }

  return (
    <div className={style.AppStyle}>
      <Form setTask={setTask} />
      <Timer selected={selected} />
      <List task={task} selectedTask={selectedTask} />
    </div>
  );
}

export default App;
