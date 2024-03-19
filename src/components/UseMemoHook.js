// import React, { useMemo, useState } from 'react'

// const UseMemoHook = () => {

//   const [count,setCount] = useState(0)
//   const [words,setWords] = useState([]);

//   // const calc = expensiveCalculation(count);

//   const calc = useMemo(()=>expensiveCalculation(count),[count]);

//   const handleTodoClick = () => {
//     setWords([...words,"Todo"]);
//   }

//   return (
//     <div>
//       <p>count is {count}</p>
//         <button onClick={()=>setCount(count+1)}>ClickMe</button>
//         <div>
//           <button onClick={handleTodoClick}>AddTodo</button>
//           <ul>
//             {
//               words.map((word,index)=>(
//                 <li key={index}>{word}</li>
//               ))
//             }
//           </ul>
//         </div>
//         <div>
//           expensiveCalculation is {calc}
//         </div>
//     </div>
//   )
// }

// const expensiveCalculation = (count) => {
//   console.log("iam from expensivecalculations")
//   for(let i=0;i<1000000000;i++){

//   }
//   return count**2
// }

// export default UseMemoHook



// -----------------------------------------------------------------------------------------------


// import React, { memo, useState } from 'react'

// const AddTodo = () => {
//   console.log("iam from AddTodo");
// }

// const Memo = memo(AddTodo);

// const UseMemoHook = () => {

//   const [count,setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count+1);
//   }
  
//   return (
//     <div>
//       <p>{count}</p>
//       {/* <AddTodo/> */}
//       <Memo/>
//       <button onClick={handleClick}>ClickMe</button>
//     </div>
//   )
// }

// export default UseMemoHook