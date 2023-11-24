import { useState } from "react";


export default function LudoBoard () {
    let [moves, setMoves] = useState({blue: 0, red: 0, yellow: 0, green: 0});// instead of 4 each variable, 4 obj keys are created under moves

    let updateBlue = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue + 1};
        });
    }

    let updateYellow = () => {
        setMoves((prevMoves) => {//previous depends on new,, if its not increasing then it will remain 0
            return {...prevMoves, yellow: prevMoves.yellow + 1};
        });
    }
    
    return (
        <div>
            <p> Game Begins! </p>
            <div className="board">
                    <p>Blue moves = {moves.blue}  </p>
                    <button style = {{backgroundColor: "blue"}} onClick = {updateBlue}>+1</button>
                    <p>Green moves = {moves.green} </p>
                    <button style = {{backgroundColor: "green"}}>+1</button>
                    <p>Yellow moves = {moves.yellow} </p>
                    <button style = {{backgroundColor: "yellow"}} onClick = {updateYellow}>+1</button>
                    <p>Red moves = {moves.red} </p>
                    <button style = {{backgroundColor: "red"}}>+1</button>
            </div>
        </div>
    );
 } 