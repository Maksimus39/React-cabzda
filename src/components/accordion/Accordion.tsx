import React from "react";

type AccordionProps = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionProps) {
    //debugger
    console.log("Accordion rendering")
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody valueString={"Minakow Max"}/>
            </div>
        )
    }
}

type AccordionTitleProps = { title: string }

function AccordionTitle(props: AccordionTitleProps) {
    //debugger
    console.log("AccordionTitle rendering")
    return <h3>{props.title}</h3>
}

type AccordionBodyProps = { valueString: string }

function AccordionBody(props: AccordionBodyProps) {

    console.log("AccordionBody rendering")
    return <ul>
        <li>{props.valueString}</li>
        <li>{props.valueString}</li>
        <li>{props.valueString}</li>
        <li>{props.valueString}</li>
        <li>{props.valueString}</li>
    </ul>
}