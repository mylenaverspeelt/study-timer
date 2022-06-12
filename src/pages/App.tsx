import React from 'react';
import Form from '../components/Form/Form';
import List from '../components/List/List';
import style from './appStyles.module.scss'
import Timer from '../components/Timer/Timer';
import { useState } from 'react';



function App() {

  const [tasks, setTasks] = useState([{
    activity: "React",
    time: "02:00:00"
}, {
    activity: "Javascript",
    time: "01:00:00"
}, {
    activity: 'Typescript',
    time: "03:00:00"
}]);



  return (
    <div className={style.AppStyle}>
     <Form />
     <Timer />
     <List />
    </div>
  );
}

export default App;
