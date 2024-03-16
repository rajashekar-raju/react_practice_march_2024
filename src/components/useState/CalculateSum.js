import React, { useState } from 'react'

const CalculateSum = () => {

    const [numArray,setNumArray] = useState([]);
    const [sum,setSum]=useState(0);

    const handleNumChange = (e) => {
        const newNumber = e.target.value;
        setNumArray((previousNum)=> [...previousNum,newNumber]) // this line iam not understood
        calculateArraySum();
    }

    const calculateArraySum = () => {
        setTimeout(()=>{
            let totalSum = numArray.reduce((pre,curr)=>pre+Number(curr),0);
            setSum(totalSum);
        },500)
    }
    

  return (
    <div>
        <h1>calculate the sum</h1>
        <input type="number" className='border border-black' onChange={handleNumChange}/>
        {sum};
    </div>
  )
}

export default CalculateSum