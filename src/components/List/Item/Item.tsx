//por ser um function component não precisa importar o react
import { ITask } from "../../../types/ITasks";
import style from "../listStyles.module.scss";

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
    <li
      key={"key"}
      className={`${style.item} ${selected ? style.itemSelecionado : ""}`}
      onClick={() =>
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
    </li>
  );
}
