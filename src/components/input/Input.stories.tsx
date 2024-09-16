import {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'input',
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <>
        <input
            value={value}
            onChange={onChange}/> - {value}
    </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save
        </button>
        -actual value: ------ {value}
    </>
}

export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        return setParentValue(event.currentTarget.value)
    }

    return <input value={parentValue}
                  onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        return setParentValue(event.currentTarget.checked)
    }

    return <input type="checkbox"
                  onChange={onChange}
                  checked={parentValue}
    />
}

export const ControlledSelect = () => {

    const [parentValue, setParentValue] = useState<string | undefined>('1')

    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        return setParentValue(event.currentTarget.value)
    }

    return <select value={parentValue}
                   onChange={onChange}
    >

        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moskow</option>
        <option value={'3'}>Kiev</option>
    </select>
}


export const ControlledInputFixedValue = () => <input value={'IT-incubator'}/>