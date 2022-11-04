import { useSelector } from "react-redux";
import  './Footer.css'

export function Footer() {
    const clase= useSelector(store => store.theme);// accede al estado de redux useSelector 
    console.log(clase);
    return (
        <div className={`container-${clase}`}>
            <div className={`footer-${clase}`}>
                <p>Hecho por @Victor Pinto</p>
            </div>
        </div>
    )
}
