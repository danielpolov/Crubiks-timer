import React, { useState } from "react";
import DisplayTimer from "../Components/DisplayTimer";
import DisplayScramble from "../Components/DisplayScramble";

const DisplayPage = () => {

    const [nextScramble, setNextScramble] = useState(false);

    const newScramble = () =>{
        nextScramble ? setNextScramble(false) : setNextScramble(true);
    }

    return (
        <>
            <DisplayScramble nextScramble={nextScramble} />
            <DisplayTimer newScramble={newScramble}/>
        </>
    );

}

export default DisplayPage;