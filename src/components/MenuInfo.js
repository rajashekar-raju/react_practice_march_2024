import React, { useState } from 'react';

const dishesData = [
    {
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 15.99,
        img: './images/item-1.jpeg',
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 2,
        title: 'diner double',
        category: 'lunch',
        price: 13.99,
        img: './images/item-2.jpeg',
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
      },
      {
        id: 3,
        title: 'godzilla milkshake',
        category: 'shakes',
        price: 6.99,
        img: './images/item-3.jpeg',
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
      },
      {
        id: 4,
        title: 'country delight',
        category: 'breakfast',
        price: 20.99,
        img: './images/item-4.jpeg',
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
      },
      {
        id: 5,
        title: 'egg attack',
        category: 'lunch',
        price: 22.99,
        img: './images/item-5.jpeg',
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
      },
      {
        id: 6,
        title: 'oreo dream',
        category: 'shakes',
        price: 18.99,
        img: './images/item-6.jpeg',
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
      },
      {
        id: 7,
        title: 'bacon overflow',
        category: 'breakfast',
        price: 8.99,
        img: './images/item-7.jpeg',
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
      },
      {
        id: 8,
        title: 'american classic',
        category: 'lunch',
        price: 12.99,
        img: './images/item-8.jpeg',
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
      },
      {
        id: 9,
        title: 'quarantine buddy',
        category: 'shakes',
        price: 16.99,
        img: './images/item-9.jpeg',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
];

const MenuInfo = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'breakfast', 'lunch', 'shakes'];

  const filterDishes = () => {
    if (selectedCategory === 'All') {
      return dishesData;
    } else {
      return dishesData.filter((dish) => dish.category === selectedCategory);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Dishes Menu</h1>

      {/* Categories */}
      <div className="flex space-x-4 mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none ${
              selectedCategory === category ? 'bg-blue-700' : ''
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Dishes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filterDishes().map((dish) => (
          <div key={dish.id} className="bg-white p-4 rounded-md shadow-md">
            <img src={dish.img} alt={dish.title} className="mb-4 rounded-md" />
            <h2 className="text-xl font-bold mb-2">{dish.title}</h2>
            <p className="text-gray-600 mb-2">${dish.price.toFixed(2)}</p>
            <p className="text-gray-700">{dish.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuInfo;

