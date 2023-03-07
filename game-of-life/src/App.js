import './App.css';
import Header from './Components/Header'
import Cell from './Components/Cell'
import React, { useState, useEffect, useRef } from 'react'
import updateGridStatus from './updateGridStatus'


function App() {
  const [isGameOn, setGameOn] = useState(false)
  const [isBoardCleared, setIsBoardCleared] = useState(false)
  const [board, setBoard] = useState([])
  const [gridSize, setGridSize] = useState({rowValue: "20", columnValue: "30"})
  const [gridStatus, setGridStatus] = useState(Array(20).fill(false).map(()=> Array(30).fill(false)))

  //handles the grid size through the input fields in header
  const handleGridSize = (form) => {
    if(isGameOn){
      setGameOn(false)
      setGridSize(form)
    } 
    else {setGridSize(form)}
  }
  // sets column and row values from the input
  const col = gridSize.columnValue
  const row = gridSize.rowValue

  //returns random boolean value
  function ranBool(){return Math.random() < 0.3}

  //returns an array of boolean the size of the grid, runs when size changes or the board is cleared
  useEffect(
  function newGridStatus(){
    const cellStatusArr = []
        for(let r = 0; r < row; r++){
            cellStatusArr[r] = []
            for(let c = 0; c < col; c++){
                cellStatusArr[r][c] = ranBool()
            }
        }
        setGridStatus(prevGridStatus => prevGridStatus = cellStatusArr)
        setIsBoardCleared(false) 
    }, [col, row, isBoardCleared])

  //use the boolean array to render the table depending on the boolean value
useEffect(
  function renderBoard(){
    const tr = []
    for(let r = 0; r < row; r++){
        const td = []
        for(let c = 0; c < col; c++){
            td.push(<Cell key={`${r},${c}`} id={`${r},${c}`} handleCellClick={handleCellClick} gridStatus={gridStatus[r][c]}/>)
        } 
      tr.push(<tr key={r}>{td}</tr>)
    }
    setBoard(tr)
  }, [gridStatus])

  // Change the value of the grid status for the clicked cell
  function handleCellClick(e){
    if(!isGameOn){
      setGridStatus(prevGridStatus => prevGridStatus.map((row, r) => 
        {return row.map((cell, c) => {
          if(e.target.id === `${r},${c}`){
            return cell = !cell}
          else return cell
        })}
      ))
    }
  }

  //Button actions

  function gameStart(){
    setGameOn(true)
  }

  function gameStop(){
    setGameOn(false)
  }

  function gameClear(){
    setGameOn(false)
    setIsBoardCleared(true)
  }

  //runs the logic in interval if game is on or stops it if not
  const intervalId = useRef()
  useEffect(function(){
    //fetch the logic of the game
    function run() {setGridStatus(prevGridStatus => updateGridStatus(prevGridStatus))}

      if(isGameOn){
        console.log("interval")
        intervalId.current = setInterval(run, 700)}
      return () =>{
        console.log("clear")
        clearInterval(intervalId.current)}
    },
    [isGameOn])

  //return JSX

  return (
    <div className="App">
      <Header 
      isGameOn = {isGameOn}
      gridSize= {gridSize}
      handleGridSize = {handleGridSize}
      gameStart = {gameStart}
      gameStop = {gameStop}
      gameClear = {gameClear}
      />
      <main> 
        <table className="field"><tbody>{board}</tbody></table>
      </main>
    </div>
  );
}

export default App;
