import React, { useState } from 'react'

const SearchArrayItems = () => {

    const [fruits,setfruits] = useState(["apple","banana","citricFruit","papamaya","kaju","papaya","jackfruit","chikki","strawberry"]);
    const [duplicateFruits,setDuplicateFruits] = useState(fruits);

    const handleSearchFruits = (e) => {
        let word = e.target.value;
        console.log(word)
        setTimeout(()=>{
            searchFunction(word);
        },300)
        // searchFunction(word);
    }

    const searchFunction = (word) => {
        const filteredArray = fruits.filter((fruit)=> fruit.toLowerCase().includes(word.toLowerCase()));
        setDuplicateFruits(filteredArray);
    }
  
  return (
    <div className='ml-3'>
        <input type="text" 
            className='px-4 py-2 rounded-lg border border-black m-3'
            onChange={handleSearchFruits}
        />
        {
            duplicateFruits.map((fruit,index)=>(
                <ul key={index}>
                    <li>{fruit}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default SearchArrayItems