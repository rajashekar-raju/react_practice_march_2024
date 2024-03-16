import React, { useEffect, useState } from 'react'

const ToggleTheme = () => {
    
    const [isDarkMode,setIsDarkMode] = useState(false)

    const handleToggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode)
    }

    useEffect(()=>{
        applytheme()
    },[isDarkMode])

    const applytheme = () => {
        const root = document.documentElement
        if(isDarkMode){
            root.classList.add("dark");
        }else{
            root.classList.remove("dark")
        }
    }

  return (
    <div>
        <button 
            className='px-4 py-2 rounded-lg outline-none text-white bg-blue-500'
            onClick={handleToggleTheme}
        >
            {isDarkMode ? "LightMode" : "DarkMode"}
        </button>

        <div>
            <p>
                hello this is component it converts from white theme to black theme and vice versa
            </p>
        </div>
    </div>
  )
}

export default ToggleTheme