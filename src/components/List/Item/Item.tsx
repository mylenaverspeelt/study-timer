//por ser um function component não precisa importar o react
import { ITask } from "../../../types/ITasks";
import style from "./ItemStyles.module.scss";

interface Props extends ITask {
  selectedTask: (selectedTask: ITask) => void;
}
//desestruturação de props, pode ser assim, que ai tambem ja declara o tipo
export default function Item({
  task,
  time,
  selected,
  completed,
  id,
  selectedTask,
}: Props) {
  return (
    <>
      <li
        className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`}
        onClick={() => !completed &&
          selectedTask({
            task,
            time,
            selected,
            completed,
            id,
          })
        }
      >
        <h3>{task}</h3>
        <span>{time}</span>
        {completed && <span className={style.concluido} arial-label="completed taks"> </span>}
      </li>
    </>
  );
}
