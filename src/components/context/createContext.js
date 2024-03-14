import { createContext, useState } from "react";

const userContext = createContext();

export const CountNumber = ({children,user}) => {
    const [value,setValue] = useState(0);

    const num = 10;

    const IncreaseFunction = () => {
        setValue(value+1);
    }

    return (
        <userContext.Provider value={{IncreaseFunction,value,num,user}}>
            {children}
        </userContext.Provider>
    )
}
export default userContext