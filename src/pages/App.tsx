import React from 'react';
import Form from '../components/Form/Form';
import List from '../components/List/List';
import style from './appStyles.module.scss'
import Timer from '../components/Timer/Timer';

function App() {
  return (
    <div className={style.AppStyle}>
     <Form />
     <Timer />
     <List />
    </div>
  );
}

export default App;
