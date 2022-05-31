import React from "react";
import Button from "../Button/Button"
import './formStyles.scss'

class Form extends React.Component {
    render() {
        return (
            <form action="" className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="task">Add a subject: </label>
                    <input type="text" name="task" placeholder="What do you want to study?" required />
                </div>

                <div className="inputContainer">
                    <label htmlFor="time">Set a time: </label>
                    <input type="time" step="1" name="time" min="00:00:00" max="01:30:00" required/>
                </div>

                <Button />
            </form>

        );
    }
}

export default Form