import React from 'react';
import style from './buttonStyles.module.scss'

//CLASS COMPONENT (tem que extender um react component e tem uma função render obrigatoria que retorna o JSX)
//? pois é um props opcional, que só aceita determinados valores pré-estabelecidos.
class Button extends React.Component<{type?: "button" | "submit" | "reset" | undefined, text: string, onClick?: () => void }>{
    
    render(){

        const{ type = "button", onClick }= this.props
        
        return(
            <button onClick={onClick} className={style.botao} type={type}>
                {this.props.text}
            </button>
        )
    }
}

export default Button

//<{nome do props: tipo de dado}> pra poder tipar e conseguir acessar as props
//como é um class component dai ele acessa o objeto this.props.oQueVoceQuerAcessar (melhor usar o function component!!)
