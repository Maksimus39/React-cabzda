import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating, ValueTypeRating} from "./components/rating/Rating";
import {UncontrolledOnOff} from "./components/uncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/uncontrollingRating/UncontrolledRating";
import {OnOff} from "./components/onOff/OnOff";

function App() {

    console.log("App rendering")
    const [ratingValue, setRatingValue] = React.useState<ValueTypeRating>(1)
    const [accordionCollapsed, setAccordionCollapsed] = React.useState<boolean>(false)
    const [onOff, setOnOff] = React.useState<boolean>(false)

    return (
        <div className="App">
            <img
                src="https://avatars.mds.yandex.net/i?id=6e8284d3dde092337a2517837633122df2e8665a-11485721-images-thumbs&n=13"
                alt=""/>
            <AppTitle title={" This is App component"}/>
            <AppTitle title={" This is my friends"}/>

            <Accordion titleValue={"---Menu---"}
                       value={accordionCollapsed}
                       onChange={setAccordionCollapsed}
                       items={[]}
                       onClick={()=>{}}

            />
            <Accordion titleValue={"--Users--"}
                       value={accordionCollapsed}
                       onChange={setAccordionCollapsed}
                       items={[]}
                      onClick={()=>{}}
            />


            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledOnOff/>
            <OnOff value={onOff} onClick={setOnOff}/>


            <UncontrolledAccordion titleValue={"UncontrolledMenu"}/>
            <UncontrolledAccordion titleValue={"UncontrolledUsers"}/>

            <UncontrolledRating/>
        </div>
    );
}

type AppTitleProps = { title: string };

function AppTitle(props: AppTitleProps) {
    console.log("AppTitle rendering")
    return (
        <div>
            {props.title}
        </div>
    )
}

export default App;
