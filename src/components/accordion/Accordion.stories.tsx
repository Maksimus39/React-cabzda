import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion,
};

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={"Collapsed Accordion"} value={true} onClick={onChangeHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={"Opened Accordion"} value={false} onClick={() => {
    }}/>
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false);
    return <Accordion titleValue={"Accordion"} value={collapsed} onClick={() => {
        setCollapsed(!collapsed);
    }}/>
}


