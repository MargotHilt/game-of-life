import './Header.css';
import React from "react"

export default function Header(props){

    function handleChange(e){
        props.handleGridSize(prevForm => {return{...prevForm, [e.target.name]: e.target.value}})
    }

    
    return (
        <div>
            <header className="app-header">
                <h1>Game of Life</h1>
                <div className="header-control">
                    <div>
                        <label htmlFor="rows">Row</label>
                        <input id="rows" type="number" name="rowValue" onChange={handleChange} value = {props.gridSize.rowValue} ></input>
                    </div>
                    <div>
                        <label htmlFor="col">Column</label>
                        <input id="col" type="number" name="columnValue" onChange={handleChange} value = {props.gridSize.columnValue}></input>
                    </div>
                    <button disabled={props.isGameOn} onClick={props.gameStart}>Start</button> 
                    <button disabled={!props.isGameOn} onClick={props.gameStop}>Stop</button>
                    <button onClick={props.gameClear}>Reset Grid</button>
                </div>
            </header>
        </div>
    )
}