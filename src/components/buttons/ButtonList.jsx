import React from "react";
import GradientButton from "./GradientButton";
import IconButton from "./IconButton";
import {data} from "../../data";

const ButtonList = () =>{
    return data.map(app=>{
        if(app.colors)
            return <GradientButton app={app} key={app.name} />;
        return (
            <IconButton app={app} key={app.name}/>
        )
    })
};

export default ButtonList;