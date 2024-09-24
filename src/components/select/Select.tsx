import React from "react";

type ItemType = {
    title: string,
    value: any
}

type SelectProps = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
};

export function Select(props: SelectProps) {
    const filteredItems = props.items.filter(item => item.value === props.value);

    return (
        <div>
            <div>
                {filteredItems.map(item => <div key={item.value}>{item.title}</div>)}
            </div>
            {props.items.map(item => <div key={item.value}>{item.title}</div>)}
        </div>
    )
}