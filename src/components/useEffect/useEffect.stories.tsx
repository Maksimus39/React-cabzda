import {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const ExampleUseEffect = () => {
    const [counter, setCounter] = useState(1);
    const [fake, setFAke] = useState(1);

    console.log('ExampleUseEffect')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect  first render and every counter changed')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello: {counter}
        <button onClick={() => setFAke(fake + 1)}>Add face: {fake}</button>
        <button onClick={() => setCounter(counter + 1)}>Add counter: {counter}</button>
    </>
}