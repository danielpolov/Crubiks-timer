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
                <Col>
                    <DisplayScramble nextScramble={nextScramble} newScramble={newScramble} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <DisplayTimer newScramble={newScramble}/>
                </Col>
            </Row>
        </Container>
    );

}

export default DisplayPage;