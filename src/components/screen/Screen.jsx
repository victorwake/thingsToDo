import React from "react";
import "./Screen.css";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import * as actions from '../../redux/action'

import ThingsToDo from "../thingsToDo/ThingsToDo";

export default function Screen() {
    const clase= useSelector(store => store.theme);// accede al estado de redux useSelector 
    // const dispatch = useDispatch();



    return (
        <div className={"App-container-" + clase}>
            <div className={"App-card-" + clase}>
                <div className={"enter"}>
                    <ThingsToDo />
                </div>
            </div>
            
        </div>
    );
}
