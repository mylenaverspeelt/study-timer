import React from "react";
import Button from "../Button/Button";
import style from "./formStyles.module.scss";

//no class component pra acessar as props é diferente, como ele é stateful, o state/setState já vem com ele, é só criar um objeto state com o valor inicial e depois chamar a função de setSatate


class Form extends React.Component {
  state = {
    task: "",
    time: "00:00",
  };


  //forma de tipar evento de formulario 
  addTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
  }

  render() {
    return (
      //ao submetet o formulario chama a função addTask(acima) que é onde vai ter a tipagem do evento de formulario e o prevent default de recarregar a pagina, além dessa sintaxe com bind e this.
      <form action="" className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Add a subject: </label>
          <input
            type="text"
            name="task"
            value={this.state.task}
            //atribuir o value do input de acordo com o que o usuário colocar pois o state vai mudar consequentemente
            onChange={(e) =>
              this.setState({ ...this.state, task: e.target.value })
            }
            //onchange pra pegar modificações do input, pega o evento e seta o state com o valor anterior do state e adiciona a tarefa/input do usuario que é o task, e ele é o target value do evento.
            placeholder="What do you want to study?"
            required
          />
        </div>

        {/* do mesmo jeito que fez pro task faz pro time*/}
        
        <div className={style.inputContainer}>
          <label htmlFor="time">Set a time: </label>
          <input
            type="time"
            step="1"
            name="time"
            min="00:00:00"
            max="01:30:00"
            value={this.state.time}
            onChange={(e) =>
              this.setState({ ...this.state, time: e.target.value })
            }
            required
          />
        </div>
        <Button type="submit" text="Add"/>        
      </form>
    );
  }
}

export default Form;
