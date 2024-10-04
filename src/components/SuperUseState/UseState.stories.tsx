import {useState} from "react";

export default {
    title: 'useState demo'
}

const generateData = () => {
    // difficult counting
    console.log('generateData')
    return 1
}


export const ExampleOne = () => {
    console.log('ExampleOne')

    //const initValue = useMemo(generateData, [])

    const [couter, setCouter] = useState(generateData)

    const changer = (state: number) => state + 1

    return (
        <div>
            <button onClick={() => setCouter(changer)}>Add counter :</button>
            <h1>{couter}</h1>
            <button onClick={() => setCouter(0)}>Reset count :</button>
        </div>
    )
}