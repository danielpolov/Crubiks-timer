import React from "react";

const DisplayScramble = () => {

    const possibleMoves = ["U", "D", "R", "L", "F", "B", "U'", "D'", "R'", "L'", "F'", "B'", "U2", "D2", "R2", "L2"];

    let scramble = "";

    let lastMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] + " ";
    let currentMove = "";

    for(let i = 0; i <= 22; i++){
        scramble += lastMove;
        currentMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] + " ";
        while(lastMove.charAt(0) === currentMove.charAt(0)){
            currentMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)] + " ";
        }
        lastMove = currentMove;
    }

    return (
        <div>
            {scramble}
        </div>
    );

}

export default DisplayScramble;