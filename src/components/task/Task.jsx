import React from 'react'
import './Task.css'
import {  AiOutlineCloseCircle } from 'react-icons/ai';
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export default function Task({id, text, completed, taskCompleted, taskDeleted}) {
    const clase= useSelector(store => store.theme);// accede al estado de redux useSelector 
    // const dispatch = useDispatch();

    return (
        <div className={completed ? `task-conteiner-completed` : `task-conteiner-${clase}` }>
            <div className='task-text'
                onClick={() => taskCompleted(id)} >
                {text}
            </div>
            
            <div className='task-container-icon'
            onClick={()=> taskDeleted(id)} >
                <AiOutlineCloseCircle className={`task-icon-${clase}`} />
            </div>
        </div>
    );
}
