import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

let defaultTimerValues = {
    started: false,
    minutes: 0,
    seconds: 0,
    miliseconds: 0
}

const DisplayTimer = () =>{
    const [timerValues, setValues] = useState(defaultTimerValues);

    const toggleStopStartTimer = () =>{
        timerValues.started ? setValues({...timerValues, started: false}) : 
        setValues({...timerValues, started: true});
        console.log(timerValues);
    }
    
    useEffect(() => {
        const keyDownHandler = event => {
            console.log('User pressed: ', event.key);

            if (event.keyCode === 32) {
                event.preventDefault();

                toggleStopStartTimer();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [timerValues, toggleStopStartTimer]);

    return <div className='display-timer'>
        {timerValues.seconds},{timerValues.miliseconds}
        <br />
        <Button variant='dark' onClick={toggleStopStartTimer}>Dark</Button>{' '}
    </div>
}

export default DisplayTimer;