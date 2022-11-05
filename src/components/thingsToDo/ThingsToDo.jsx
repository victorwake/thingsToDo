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

    const taskDeleted = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    };


    const taskCompleted = (id) => {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(newTasks);
    };

    const taskEdited = (id, text) => {
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                task.text = text;
            }
            return task;
        });
        setTasks(newTasks);
    };


    return (
    <div className="thingsTodo-conteiner-global">
        <Form onSubmit={addTask}  />
        <div className="thingsTodo-conteiner">
            <ul>
            {
                tasks.map((task, index) => (
                    <li>
                    <Task
                    key = {task.id}
                    id = {task.id}
                    text = {task.text}
                    completed = {task.completed}
                    taskDeleted = {taskDeleted}
                    taskCompleted = {taskCompleted}
                    // taskEdited = {taskEdited}
                    />
                    </li>
                ))
            }
            </ul>
        </div>
    </div>
    )
}
