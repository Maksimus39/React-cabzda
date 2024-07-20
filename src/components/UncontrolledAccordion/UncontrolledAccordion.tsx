import React from "react";

type AccordionProps = {
    titleValue: string

}

export function UncontrolledAccordion(props: AccordionProps) {
    //debugger
    console.log("Accordion rendering")

    const [collapsed, setCollapsed] = React.useState(true)

    function toggleHeader() {
        setCollapsed(!collapsed)
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={toggleHeader}>TOGGLE</button>
            {collapsed && <AccordionBody/>}
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