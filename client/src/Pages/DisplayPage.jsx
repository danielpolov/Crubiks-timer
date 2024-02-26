import React, { useState } from "react";
import DisplayTimer from "../Components/DisplayTimer";
import DisplayScramble from "../Components/DisplayScramble";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DisplayPage = () => {

    const [nextScramble, setNextScramble] = useState(false);

    const newScramble = () =>{
        nextScramble ? setNextScramble(false) : setNextScramble(true);
    }

    return (
        <Container>
            <Row>
                <DisplayScramble nextScramble={nextScramble} newScramble={newScramble} />
            </Row>
            <Row>
                <DisplayTimer newScramble={newScramble}/>
            </Row>
        </Container>
    );

}

export default DisplayPage;