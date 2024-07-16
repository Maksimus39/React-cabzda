import React from "react";

type AccordionProps = { titleValue: string }

export function Accordion(props: AccordionProps) {
    //debugger
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody value={1 | 2 | 3 | 4 | 5}/>
        </div>
    )
}

type AccordionTitleProps = { title: string }

function AccordionTitle(props: AccordionTitleProps) {
    debugger
    console.log("AccordionTitle rendering")
    return <h3>{props.title}</h3>
}

type AccordionBodyProps = { value: number }
function AccordionBody(props:AccordionBodyProps) {

    console.log("AccordionBody rendering")
    return <ul>
        <li>{props.value}</li>
        <li>{props.value}</li>
        <li>{props.value}</li>
        <li>{props.value}</li>
        <li>{props.value}</li>
    </ul>
}