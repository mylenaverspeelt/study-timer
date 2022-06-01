import style from "../listStyles.module.scss";


//desestruturação de props, pode ser assim, que ai tambem ja declara o tipo
//por ser um function component não precisa importar o react

export default function Item({ task, time }: { task: string; time: string }) {
  return (
    <li key={"key"} className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
