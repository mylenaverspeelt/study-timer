import React, { useState } from "react";
import style from "./listStyles.module.scss"
import Item from './Item/Item'

//FUNCTION COMPONENT (só o retorno do JSX mesmo)

function List() {


    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {setTasks([...tasks, { activity: "Estudar estado", time: "05:00:00"}])}}>Studies of the day:</h2>
            <ul>{tasks.map((item, index) => (
                       <Item 
                       key={index}
                       task={item.activity} time={item.time}/>
                    ))}
                    </ul>
        </aside>
    );
}


export default List