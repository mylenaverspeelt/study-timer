import React from 'react';
import style from './buttonStyles.module.scss'

//CLASS COMPONENT (tem que extender um react component e tem uma função render obrigatoria que retorna o JSX)

class Button extends React.Component<{ text: string }>{
    render(){
        return(
            <button className={style.botao}>
                {this.props.text}
            </button>
        )
    }
}

export default Button

//<{nome do props: tipo de dado}> pra poder conseguir acessar as props
//como é um class component dai ele acessa o objeto this.props.oQueVoceQuerAcessar
