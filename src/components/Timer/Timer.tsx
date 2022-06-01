import Button from "../Button/Button";
import Clock from "./Clock/Clock";
import style from './timerStyles.module.scss';

export default function Timer() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choice a card and start the timer</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button text="Start" />
    </div>
  );
}
