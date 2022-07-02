import Button from "../Button/Button";
import Clock from "./Clock/Clock";
import style from "./timerStyles.module.scss";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/ITasks";
import { useEffect, useState } from "react";

interface Props {
  selected: ITask | undefined;
}

export default function Timer({ selected }: Props) {
  const [time, setTime] = useState<number>();
 useEffect(() =>{
  if(selected?.time){
    setTime(timeToSeconds(selected.time))
  }
 }, [selected])

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Choice a card and start the timer</p>
      <div className={style.relogioWrapper}>
        <Clock time={time}/>
      </div>
      <Button text="Start" />
    </div>
  );
}
