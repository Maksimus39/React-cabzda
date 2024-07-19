import React from "react";

type AccordionProps = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionProps) {
    //debugger
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleProps = { title: string }

function AccordionTitle(props: AccordionTitleProps) {
    //debugger
    console.log("AccordionTitle rendering")
    return <h3>{props.title}</h3>
}


function AccordionBody() {

    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}