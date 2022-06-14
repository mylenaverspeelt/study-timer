import style from "./listStyles.module.scss"
import Item from './Item/Item'
import {ITask} from "../../types/ITasks"
//FUNCTION COMPONENT (só o retorno do JSX mesmo)


function List({tasks} : {tasks: ITask[]}) {


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