import React from "react";

type AccordionProps = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionProps) {
    //debugger
    console.log("Accordion rendering")
    const [collapsed, setCollapsed] = React.useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
            {collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleProps = {
    title: string
    setCollapsed: (value: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitleProps) {
    //debugger
    console.log("AccordionTitle rendering");

    function accordionCollapsedHandler() {
        props.setCollapsed(!props.collapsed)
    }

    return <h3 onClick={accordionCollapsedHandler}>{props.title}</h3>
}


function AccordionBody() {

    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}