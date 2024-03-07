import React, { useState, useRef, useEffect } from 'react';

let defaultTimerValues = {
    started: false,
    minutes: 0,
    seconds: 0,
    miliseconds: 0
}

const DisplayTimer = (props) =>{
    const [timerValues, setValues] = useState(defaultTimerValues);
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);
    const containerRef = useRef(null);

    const toggleStopStartTimer = () =>{
        if(!timerValues.started){
            setValues({...timerValues, started: true});
            setStartTime(Date.now());
            setNow(Date.now());

            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
              setNow(Date.now());
            }, 10);
        }else{
            setValues({...timerValues, started: false});
            clearInterval(intervalRef.current);
            props.newScramble();
        }
    }
    
    useEffect(() => {
        /*const keyDownHandler = event => {
            console.log('User pressed: ', event.key);

            if (event.keyCode === 32) {
                event.preventDefault();

                toggleStopStartTimer();
            }
        };*/
        containerRef.current.focus();

        const keyUpHandler = event => {
            if(event.keyCode === 32){
                event.preventDefault();

                toggleStopStartTimer();
            }
        }

        //document.addEventListener('keydown', keyDownHandler);
        document.addEventListener('keyup', keyUpHandler);

        return () => {
            document.removeEventListener('keyup', keyUpHandler);
        };
    }, [timerValues, toggleStopStartTimer, containerRef]);

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed =  (now - startTime) / 1000;
    }
    
    return (
        <div className='display-timer' tabIndex={-1} ref={containerRef}>
            <h1 className='timer_text'>{secondsPassed.toFixed(2)}</h1>
        </div>
    );
}

export default DisplayTimer;