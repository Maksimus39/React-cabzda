import React from "react";
import {ValueTypeRating} from "../rating/Rating";

type ItemType = {
    title: string,
    value: any
}

type SelectProps = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
};

export function Rating(props: SelectProps) {

    return (
        <div>
            <div>
                {props.items.filter(it=>it.)}


            </div>
            {props.items.map(i=><div>{i.title}</div>)}
        </div>
    )
}