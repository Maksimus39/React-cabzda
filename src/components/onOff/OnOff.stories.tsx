import {OnOff} from "./OnOff";
import {useState} from "react";
import {action} from '@storybook/addon-actions';

export default {
    title: 'OnOff stories',
    component: OnOff,
}

const callback = action('onOff')

export const onMode = () => <OnOff value={true} onClick={callback}/>;
export const offMode = () => <OnOff value={false} onClick={callback}/>;
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);

    return <OnOff value={value} onClick={setValue}/>;
}