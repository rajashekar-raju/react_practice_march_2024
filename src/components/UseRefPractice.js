//  Accessing DOM Elements:

// import React, { useRef } from 'react'

// const UseRefPractice = () => {
  
//   const data = useRef(null);
  
//   const handleClick = () => {
//     data.current.focus();
//     data.current.value = "hello everyone";
    
//   }
//   return (
//     <div>
//         <input type="text" ref={data}/>
//         <button onClick={handleClick}>clickme</button>
//     </div>
//   )
// }

// export default UseRefPractice

// ---------------------------------------------------------------------------------------------------

// You can use useRef to store mutable values that persist across renders without causing re-renders:

// import React, { useEffect, useRef, useState } from 'react';
// const UseRefPractice = () => {
//     const [count, setCount] = useState(0);
//     const countRef = useRef(count);
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setCount(prevCount => prevCount + 1);
//         countRef.current = countRef.current + 1;
//         console.log('Current count:', countRef.current);
//       }, 1000);
//       return () => clearInterval(interval);
//     }, []);
//     return <div>Count: {count}</div>;
//   };
//   export default UseRefPractice;
// ------------------------------------------------------------------------------------------------

// useRef can be used for imperative DOM manipulation without triggering re-renders:

// import React, { useRef } from 'react';

// const UseRefPractice = () => {
//   const paragraphRef = useRef(null);

//   const updateText = () => {
//     paragraphRef.current.textContent = 'New text';
//   };

//   return (
//     <div>
//       <p ref={paragraphRef}>Initial text</p>
//       <button onClick={updateText}>Update Text</button>
//     </div>
//   );
// };
// export default UseRefPractice


// --------------------------------------------------------------------------------------------------

// You can use useRef to store the previous value of a state or a prop:

import React, { useRef, useState, useEffect } from 'react';

const UseRefPractice = () => {
  
    const [value, setValue] = useState('');

    const [previousValue, setPreviousValue] = useState('');
    
    // const inputRef = useRef();
 
//     useEffect(() => {
//     setPreviousValue(value);
//   }, []);

    const handleInputChange = (e) => {
        setValue(e.target.value);
        setPreviousValue(value); 
    };

    return (
        <div>
        <input
            type="text"
            // ref={inputRef}
            onChange={handleInputChange}
            value={value}
            className='px-4 py-2 rounded-lg border border-black'
        />
        <p>Current value of input: {value}</p>
        <p>Previous value of input: {previousValue}</p>
        </div>
    );
    };
    export default UseRefPractice;

// ------------------------------------------------------------------------------------------------

// import React, { useRef } from 'react';

// function UseRefPractice() {
//   const count = useRef(0); // Create a ref to store the count

//   const handleClick = () => {
//     count.current = count.current + 1; // Update the value stored in the ref
//     console.log('Count:', count.current); // Access the current value
//   };

//   return (
//     <div>
//       <p ref={count}>You clicked {count.current} times</p>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

// export default UseRefPractice;
