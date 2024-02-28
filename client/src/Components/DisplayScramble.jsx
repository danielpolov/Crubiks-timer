import React from "react";

const DisplayScramble = (props) => {

    const possibleMoves = ["U", "D", "R", "L", "F", "B", "U'", "D'", "R'", "L'", "F'", "B'", "U2", "D2", "R2", "L2"];

    let scramble = "";

    let lastMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] + " ";
    let currentMove = "";

    let numberOfPosibleMoves = 21 - Math.floor(Math.random() * 4);

    for(let i = 0; i <= numberOfPosibleMoves; i++){
        scramble += lastMove;
        currentMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] + " ";
        while(lastMove.charAt(0) === currentMove.charAt(0)){
            currentMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] + " ";
        }
        lastMove = currentMove;
    }

    return (
        <div onClick={props.newScramble} className="scramble_container">
            <h3 className="scramble_text">{scramble}</h3>
        </div>
    );

}

export default DisplayScramble;