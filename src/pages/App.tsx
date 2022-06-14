import React from 'react';
import Form from '../components/Form/Form';
import List from '../components/List/List';
import style from './appStyles.module.scss'
import Timer from '../components/Timer/Timer';
import { useState } from 'react';
import { ITask } from "../types/ITasks"

function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);
//tipando o valor inicial que pode ser ou um array vazio ou o array do ITasks


  return (
    <div className={style.AppStyle}>
     <Form setTasks={setTasks} />
     <Timer />
     <List tasks={tasks}/>
    </div>
  );
}

export default App;
