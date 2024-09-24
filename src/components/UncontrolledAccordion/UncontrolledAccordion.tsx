import React, {useReducer} from "react";

type AccordionProps = {
    titleValue: string
}
// ----------------------------------------------------------------------------------------------------------------
const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"

type ActionType = {
    type: string,
}


const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            return !state
    }


    // if (action.type === TOGGLE_CONSTANT) {
    //     return !state
    // }
    return state
}


// --------------------------------------------------------------------------------------------------------------
export function UncontrolledAccordion(props: AccordionProps) {
    //debugger
    console.log("Accordion rendering")
    // const [collapsed, setCollapsed] = React.useState(false)
    const [collapsed, dispatch] = useReducer(reducer, false)

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={() => {
                                dispatch({type: TOGGLE_CONSTANT})
                            }}
            />
            {collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleProps = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleProps) {
    //debugger
    console.log("AccordionTitle rendering");

    function accordionCollapsedHandler() {
        props.onClick()
    }

    return <h3 onClick={accordionCollapsedHandler}>dispatch: -- {props.title} -- </h3>
}


function AccordionBody() {

    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}