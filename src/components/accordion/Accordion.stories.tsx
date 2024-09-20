import {action} from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import React, {useState} from "react";

export default {
    component: Accordion,
};

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={"Collapsed Accordion"}
                      value={true}
                      onChange={onChangeHandler}
                      items={[]}
                      onClick={() => {
                      }}
    />
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={"Opened Accordion"}
                      value={false}
                      onChange={() => {
                      }}
                      items={[
                          {title: 'Max', value: 1},
                          {title: 'Larisa', value: 2},
                          {title: 'Andrey', value: 3},
                          {title: 'Bogdan', value: 4},
                      ]}
                      onClick={action('item clicked')}
    />
}

export const AccordionDemo = () => {
    const [collapsed, setCollapsed] = useState(false);
    return <Accordion titleValue={"Accordion"}
                      items={[
                          {title: 'Max', value: 1},
                          {title: 'Larisa', value: 2},
                          {title: 'Andrey', value: 3},
                          {title: 'Bogdan', value: 4},
                      ]}
                      value={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed);
                      }}
                      onClick={(value) => {
                          alert(`User with ID ${value} should be happy`)
                      }}/>
}