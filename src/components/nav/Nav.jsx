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
            
                <button onClick={()=> 
                    handleLight()
                    } 
                    type="submit"
                    className={'nav__button-' + clase}><Link to='/light'>Light</Link></button>
            
            
                <button onClick={()=>
                    handleDark()
                }   
                type="submit"
                className={'nav__button-' + clase}><Link to='/dark'>Dark</Link></button>
            
        </form>
    )
}

