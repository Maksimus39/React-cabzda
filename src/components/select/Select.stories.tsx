import {ChangeEvent, useState} from "react";



export default {
    select:'select'
}

export const ControlledSelect = ()=> {
    const [parentValue, setParentValue] = useState<string | undefined>('1')


    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        return setParentValue(event.currentTarget.value)
    }

    return <select value={parentValue}
                   onChange={onChange}
    >

        <option>none</option>
        <option value={'1'}>Max</option>
        <option value={'2'}>Larisa</option>
        <option value={'3'}>Andrey</option>
        <option value={'4'}>Bogdan</option>
    </select>
}