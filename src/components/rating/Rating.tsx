import React from "react";

type ValueTypeRating = 0 | 1 | 2 | 3 | 4 | 5
type RatingProps = { value: ValueTypeRating };

export function Rating(props: RatingProps) {
    console.log("Rating rendering")
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

type StarProps = {
    selected: boolean
}

function Star(props: StarProps) {
    console.log("Star rendering")
    if (props.selected) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }
}