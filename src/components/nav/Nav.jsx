import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Nav.css'
import * as actions from '../../redux/action'
import { useDispatch } from "react-redux";

export function Nav(){
    const dispatch = useDispatch();
    const [clase, setClase] = useState("light");
    
    const light = "light";
    const dark = "dark";

    const handleLight = () => {
        setClase(light);
    }

    const handleDark = () => {
        setClase(dark);
    }

    useEffect(() => {
        dispatch(actions.themeChange(clase));
    }, [clase])

    return (
        <form className={'Nav-' + clase}>
            <Link to='/light'>
                <button onClick={()=> 
                    handleLight()
                    } 
                    type="submit"
                    className={'nav__button-' + clase}>Light</button>
            </Link>
            <Link to='/dark'>
                <button onClick={()=>
                    handleDark()
                }   
                type="submit"
                className={'nav__button-' + clase}>Dark</button>
            </Link>
        </form>
    )
}

