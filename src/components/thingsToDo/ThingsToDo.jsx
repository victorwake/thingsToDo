import React, { useState } from 'react'
import Form from '../form/Form'
import Task from '../task/Task';
import './ThingsToDo.css'

export default function ThingsToDo() {
    const [tasks, setTasks] = useState([]);

    const addTask = (tarea) => {
        if (tarea.text.trim()) {
            tarea.test = tarea.text.trim();
            const newTasks = [tarea, ...tasks];
            setTasks(newTasks);
        }
    };



    return (
    <div>
        <Form onSubmit={addTask} />
        <div className="thingsTodo-conteiner">
            <ul>
            {
                tasks.map((task, index) => (
                    <li>
                    <Task
                    key={task.id}
                    id={task.id}
                    text={task.text}
                    completed={task.completed}
                    />
                    </li>
                ))
            }
            </ul>

        </div>
    </div>
    )
}
