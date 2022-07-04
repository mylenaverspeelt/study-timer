import Button from "../Button/Button";
import Clock from "./Clock/Clock";
import style from "./timerStyles.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/ITasks";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
  finishTask: () => void
}

export default function Timer({ selected, finishTask}: Props) {
  const [time, setTime] = useState<number>();
  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function countdown(count: number = 0) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return countdown(count - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choice a card and start the timer</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => countdown(time)} text="Start" />
    </div>
  );
}
