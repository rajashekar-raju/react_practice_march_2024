import { useState } from "react"

const Selection = ({colorSetter}) => {

    const [style, setStyle] = useState({ backgroundColor: colorSetter });

    const handleDivClick = () => {
        const newColor = style.backgroundColor === colorSetter ? '' : colorSetter;
        setStyle({ backgroundColor: newColor });
    }

    const handleDivClick2 = () => {
        const newColor = style.backgroundColor === colorSetter ? '' : colorSetter;
        setStyle({ backgroundColor: newColor });
    }

    const handleDivClick3 = () => {
        const newColor = style.backgroundColor === colorSetter ? '' : colorSetter;
        setStyle({ backgroundColor: newColor });
    }

    return (
        <div className="flex gap-5">
            <div 
                className="h-52 w-52 border border-black m-10" 
                onClick={handleDivClick}
                style={{backgroundColor:style.backgroundColor}}
            >
                {colorSetter}
            </div>

            <div 
                className="h-52 w-52 border border-black m-10" 
                onClick={handleDivClick2}
                style={{backgroundColor:style.backgroundColor}}
            >
                {colorSetter}
            </div>

            <div 
                className="h-52 w-52 border border-black m-10" 
                onClick={handleDivClick3}
                style={{backgroundColor:style.backgroundColor}}
            >
                {colorSetter}
            </div>
            
        </div>
    )
}
export default Selection