import React from 'react';

type OnOffProps = {
    value: boolean
    onClick: (value: boolean) => void;
}

export function OnOff(props: OnOffProps): React.ReactElement {

    console.log('onOff rendering')


    function onClickHeader() {
        props.onClick(!props.value);
    }

    function offClickHeader() {
        props.onClick(!props.value);
    }

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline",
        padding: "2px",
        backgroundColor: props.value ? "green" : "white",
    };
    const offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.value ? "white" : "red",
    };
    const indicatorStyle = {
        width: "10",
        height: "10",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline",
        marginLeft: "5px",
        backgroundColor: props.value ? "green" : "red",
    };

    return (
        <div>
            <div style={onStyle} onClick={onClickHeader}>ON</div>
            <div style={offStyle} onClick={offClickHeader}>OFF</div>
            <div style={indicatorStyle}>CIRCLE</div>
        </div>
    );
};

