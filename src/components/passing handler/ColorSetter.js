import React from 'react'

const ColorSetter = ({colors,colorSetterFunction}) => {

    const handleButtonClick = (color) => {
        colorSetterFunction(color)
    }

  return (
    <div>
        {
            colors.map((color,index)=>(
                <button style={{backgroundColor:color,paddingInline:"10px",paddingBlock:"5px",marginInline:"5px"}}
                key={index}
                onClick={()=>handleButtonClick(color)}
                >
                {color}
                </button>
            ))
        }
    </div>
  )
}

export default ColorSetter