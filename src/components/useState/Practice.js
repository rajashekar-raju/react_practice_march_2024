import React, { useState } from 'react';

const Practice = () => {
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [items, setItems] = useState([]);

  const categoriesByGender = {
    men: ['Shirts', 'Pants', 'Shoes'],
    women: ['Dresses', 'Tops', 'Skirts', 'Shoes'],
  };

  console.log(categoriesByGender['men']);

  const handleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setSelectedGender(selectedGender);
    setSelectedCategory(''); // Reset category when gender changes
    setItems([]); // Reset items when gender changes
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    const fetchedItems = fetchItems(selectedGender, selectedCategory);
    // console.log(fetchedItems);
    setItems(fetchedItems);
  };

  const fetchItems = (gender, category) => {
    const staticData = {
      men: {
        Shirts: ['Shirt1', 'Shirt2', 'Shirt3'],
        Pants: ['Pants1', 'Pants2', 'Pants3'],
        Shoes: ['Shoes1', 'Shoes2', 'Shoes3'],
      },
      women: {
        Dresses: ['Dress1', 'Dress2', 'Dress3'],
        Tops: ['Top1', 'Top2', 'Top3'],
        Skirts: ['Skirt1', 'Skirt2', 'Skirt3'],
        Shoes: ['Shoes1', 'Shoes2', 'Shoes3'],
      },
    };

    return staticData[gender][category] || [];
  };

  return (
    <div>
      <h2>Product List</h2>
      <label>
        Select Gender:
        <select value={selectedGender} onChange={handleGenderChange}>
          <option value="">Select Gender</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
      </label>

      {selectedGender && (
        <label>
          Select Category:
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            {categoriesByGender[selectedGender].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      )}

      {selectedCategory && (
        <div>
          <h3>Items in {selectedCategory}</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Practice;
