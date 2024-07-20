import React from 'react';


export function UncontrolledOnOff(): React.ReactElement {

    console.log('onOff rendering')

    const [on, setOn] = React.useState(true);
    console.log('on: ' + on)

    function onClickHeader() {
        setOn(true)
    }

    function offClickHeader() {
        setOn(false)
    }

    const onStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline",
        padding: "2px",
        backgroundColor: on ? "green" : "white",
    };
    const offStyle = {
        width: "30px",
        height: "30px",
        border: "1px solid black",
        display: "inline",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red",
    };
    const indicatorStyle = {
        width: "10",
        height: "10",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
    };

    return (
        <div>
            <div style={onStyle} onClick={onClickHeader}>ON</div>
            <div style={offStyle} onClick={offClickHeader}>OFF</div>
            <div style={indicatorStyle}>CIRCLE</div>
        </div>
    );
};

