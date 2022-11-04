import React from 'react'
import './Form.css'
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

export default function Form(props) {
    const clase= useSelector(store => store.theme);// accede al estado de redux useSelector 
    // const dispatch = useDispatch();
    const [input, setInput] = React.useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
        e.preventDefault();
    };


    const sendTask = (e) => {
        e.preventDefault();    

        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        }
        props.onSubmit(newTask);
        e.target.reset();
    };


    return (
    <form className={`task-form-${clase}`} 
        onSubmit={sendTask} >
        <input 
        type="text" 
        className={`task-input-${clase}`}
        placeholder='Agrega una tarea'
        name='text'
        onChange={handleChange}
        />

        <button className={`task-button-${clase}`} >
            Agregar tarea
        </button>
        
    </form>
    )
}
