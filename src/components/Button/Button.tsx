import React from 'react';
import './buttonStyles.scss'
//CLASS COMPONENT (tem que extender um react component e tem uma função render obrigatoria que retorna o JSX)

class Button extends React.Component{
    render(){
        return(
            <button className='botao'>Botão</button>
        )
    }
}

export default Button