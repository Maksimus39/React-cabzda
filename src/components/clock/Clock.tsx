import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./digitalClock/DigitalClockView";
import {AnalogClockView} from "./analogClock/AnalogClockView";

type PropsType = {
    mode: 'analog' | 'digital'
}
export const Clock: React.FC<PropsType> = (props: PropsType) => {
    const [date, setDate] = useState(new Date());


    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000)
    }, []);

    const get2DigitsString = (number: number) => number < 10 ? number + 1 : number

    const secondsString = date.getSeconds() < 10
        ? '0' + date.getSeconds()
        : date.getSeconds()

    const minutesString = date.getMinutes() < 10
        ? '0' + date.getMinutes()
        : date.getMinutes()

    const hoursString = date.getHours() < 10
        ? '0' + date.getHours()
        : date.getHours()


    let view;
    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClockView hoursString={hoursString} minutesString={minutesString} secondsString={secondsString} />
    }
    return <div>
        {view}
    </div>
}

