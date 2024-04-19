import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const HomePage = () =>{
    return(
        <Container>
            <Row>
                <Col>
                    <h1>Play and learn in the newest platform for cubers</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button>
                        <Row><Col><h3>Play a Friend</h3></Col></Row>
                        <Row><Col><span>Add friends and challenge them</span></Col></Row>
                    </Button>{' '}
                    <Button variant="secondary" as={Link} to="/playsolo">
                        <Row><Col><h3>Play solo</h3></Col></Row>
                        <Row><Col><span>Classic mode to record your times</span></Col></Row>
                    </Button>{' '}
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;