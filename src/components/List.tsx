import React from "react";

//FUNCTION COMPONENT (não tem nada obrigatório, só o retorno do JSX mesmo)

function List() {

    const tasks = [{
        activity: "React",
        time: "02:00:00"
    }, {
        activity: "Javascript",
        time: "01:00:00"
    }, {
        activity: 'Typescript',
        time: "03:00:00"
    }]

    return (
        <aside>
            <h2>Studies of the day:</h2>
            <ul>{tasks.map((item, index) => (
                        <li key={index}>
                            <h3>{item.activity}</h3>
                            <span>{item.time}</span>
                        </li>
                    ))}
                    </ul>
        </aside>
    );
}


export default List