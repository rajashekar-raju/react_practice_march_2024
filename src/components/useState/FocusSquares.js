import React, { useState } from 'react';

const Practice = () => {

    const [hoveredSquare, setHoveredSquare] = useState(null);

    const colors = {
        base: '#E6E6FA', // Lavender
        hover: '#6F4E37', // Coffee
      };

  return (
    <div className="grid grid-cols-3 gap-4 w-max mx-auto mt-10">
        {[1, 2, 3].map((squareId) => (
            <div
            key={squareId}
            onMouseEnter={() => setHoveredSquare(squareId)}
            onMouseLeave={() => setHoveredSquare(null)}
            className={`
                w-20 h-20 rounded-full cursor-pointer bg-yellow-500  ${hoveredSquare !== squareId ? colors.base : colors.hover}
            `}
            >    
            {squareId && console.log(squareId)}
            </div>
        ))}
      </div>
  )
}

export default Practice