import style from "./listStyles.module.scss"
import Item from './Item/Item'
import {ITask} from "../../types/ITasks"
//FUNCTION COMPONENT (só o retorno do JSX mesmo)

interface Props{
    task: ITask[],
    selectedTask: (selectedTask: ITask) => void
}
//recebe um parametro tipado e retorna nada

//props que é recebido do app e atribuindo a tipagem que ta la no modulo ITasks
function List({task, selectedTask}: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Studies of the day:</h2>
            <ul>{task.map((item) => (
                       <Item 
                       selectedTask={selectedTask}
                       id={item.id}
                       completed={item.completed} selected={item.selected}
                       task={item.task} time={item.time}/>
                    ))}
                    </ul> 
        </aside>
    );
}


export default List