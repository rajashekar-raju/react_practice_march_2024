import React, { useContext } from 'react'
import userContext from './createContext'

const Inside = () => {
    const data = useContext(userContext)
    console.log(data);

  return (
    <div>
        <button onClick={data.IncreaseFunction}>increase</button>
        <p>{data.value}</p>
        <p>{data.user.name}</p>
        <p>{data.user.age}</p>
        <p>{data.user.email}</p>
    </div>
  )
}

export default Inside