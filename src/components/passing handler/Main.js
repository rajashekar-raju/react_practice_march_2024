import React, { useState } from "react"
import ColorSetter from "./ColorSetter";
import Selection from "./Selection";

const Main = () => {

    const [colorSetter,setColorSetter] = useState("");

    const colors = ["red","green","blue"];

    console.log(colorSetter)

    const colorGettingFunction = (color) => {
        setColorSetter(color);
    }

    return (
        <div>
            <ColorSetter colors = {colors} colorSetterFunction = {colorGettingFunction}/>
            <Selection colorSetter = {colorSetter}/>
        </div>
    )
}
export default Main