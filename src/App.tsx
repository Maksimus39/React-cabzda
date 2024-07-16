import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
    console.log("App rendering")
    return (
        <div className="App">
            <img
                src="https://avatars.mds.yandex.net/i?id=6e8284d3dde092337a2517837633122df2e8665a-11485721-images-thumbs&n=13"
                alt=""/>
            <AppTitle title={" This is App component"}/>
            <AppTitle title={" This is my friends"}/>

            <Accordion title={"Title-11"}/>
            <Accordion title={"Title-2"}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function AppTitle(props: any) {
    //debugger
    console.log("AppTitle rendering")
    return (
        <div>
            {props.title}
        </div>
    )
}

export default App;
