import React from "react";


export function UncontrolledRating() {

    console.log("UncontrolledRating rendering")
    const [value, setValue] = React.useState(0)

    return (
        <div>
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
            <Star selected={value > 4} setValue={() => setValue(5)}/>
        </div>
    )
}

type StarProps = {
    selected: boolean
    setValue: () => void
}

function Star({selected, setValue}: StarProps) {
    console.log("Star rendering")

    function starValue() {
        setValue()
    }

    return <span onClick={() => starValue()}>{selected ? <b>star </b> : "star "}</span>
}