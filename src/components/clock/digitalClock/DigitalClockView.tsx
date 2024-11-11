import React from "react";


export type Props = {
    hoursString:any
    minutesString:any
    secondsString:any
}
export const DigitalClockView = ({hoursString,minutesString,secondsString}: Props) => {
    return (
        <div>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>
        </div>
    )
}