import React, { useState } from 'react'

const ProductsSelection = () => {
    const [gender,setGender] = useState();
    const [genderData,setGenderData] = useState([]);

    const handleGenderChange = (e) => {
        const selectedGender = e.target.value;
        const fetchedItems = fetchData(selectedGender);
        setGenderData(fetchedItems);
    }
    const fetchData = (gender) => {
        const maleItems = ["shirts","pants","shoes","watch","caps"]
        const femaleItems = ["tops","jeans","skirts","chapples"]
        return gender === 'male' ? maleItems : femaleItems 
    }
  return (
    <div>
        <select value={gender} onChange={handleGenderChange}>
            <option value=""></option>
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        {
            genderData.length > 0 && (
                <ul>
                    {
                        genderData.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            )
        }
    </div>
  )
}

export default ProductsSelection