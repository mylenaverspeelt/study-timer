import React from "react";
import style from "./listStyles.module.scss"
import Item from './Item/Item'
//FUNCTION COMPONENT (não tem nada obrigatório, só o retorno do JSX mesmo)

function List() {

    const tasks = [{
        activity: "React",
        time: "02:00:00"
    }, {
        activity: "Javascript",
        time: "01:00:00"
    }, {
        activity: 'Typescript',
        time: "03:00:00"
    }]

    return (
        <aside className={style.listaTarefas}>
            <h2>Studies of the day:</h2>
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