import React from "react";


export type Props = {
    date:Date
}
export const AnalogClockView = ({date}:Props) => {


          return (
              <div>
                 <span>{date.getHours()}</span>
                  :
                  <span>{date.getMinutes()}</span>
                  :
                  <span>{date.getSeconds()}</span>
              </div>
          );
}