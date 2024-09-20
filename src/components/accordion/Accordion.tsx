import React from "react";

type ItemType = {
    title: string,
    value: any
}

type AccordionProps = {
    titleValue: string
    value: boolean
    onChange: (value: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionProps) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
                            value={props.value}/>

            {!props.value && <AccordionBody items={props.items}
                                            onClick={props.onClick}
            />}
        </div>
    )
}

type AccordionTitleProps = {
    title: string
    onChange: (value: boolean) => void
    value: boolean
}

function AccordionTitle(props: AccordionTitleProps) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => props.onChange(!props.value)}>{props.title}</h3>
}


type AccordionBodyProps = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody({items, onClick}: AccordionBodyProps) {
    console.log("AccordionBody rendering")
    return <ul>
        {items.map((it, index) => {
            return (
                <li key={index} onClick={() => {
                    onClick(it.value)
                }}>
                    {it.title}
                </li>
            )
        })}
    </ul>
}