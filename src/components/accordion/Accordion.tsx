import React from "react";

type AccordionProps = {
    titleValue: string
    value: boolean
    onClick: (value: boolean) => void
}

export function Accordion(props: AccordionProps) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} value={props.value}/>
            {!props.value && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleProps = {
    title: string
    onClick: (value: boolean) => void
    value: boolean
}

function AccordionTitle(props: AccordionTitleProps) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={(event) => props.onClick(!props.value)}>{props.title}</h3>
}


function AccordionBody() {

    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}