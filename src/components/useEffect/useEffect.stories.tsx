import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const ExampleUseEffect = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    console.log('ExampleUseEffect');

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString();
    }, []);

    useEffect(() => {
        console.log('useEffect first render and every counter changed');
        document.title = counter.toString();
    }, [counter]);

    return (
        <>
            Hello: {counter}
            <button onClick={() => setFake(fake + 1)}>Add fake: {fake}</button>
            <button onClick={() => setCounter(counter + 1)}>Add counter: {counter}</button>
        </>
    );
}

export const SetTimeOutExample = () => {
    const [counter, setCounter] = useState(1);
    const [hours, setHours] = useState(new Date().getHours());
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [seconds, setSeconds] = useState(new Date().getSeconds());

    console.log('SetTimeOutExample');

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((state) => state + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            setHours(currentDate.getHours());
            setMinutes(currentDate.getMinutes());
            setSeconds(currentDate.getSeconds());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div>
                Date: {counter}
            </div>
            <div>
                Time: {hours}:{minutes}:{seconds}
            </div>
        </>
    );
}