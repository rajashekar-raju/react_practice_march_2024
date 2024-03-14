import React, { useEffect, useRef } from 'react'

const UseRefPractice = () => {

    const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current.focus();
  }, []);


  return (
    <div>
    <label htmlFor="exampleInput">Example Input:</label>
    <input id="exampleInput" ref={inputRef} />
  </div>
  )
}

export default UseRefPractice