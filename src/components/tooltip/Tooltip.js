// Tooltip.js
import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="tooltip relative">
      <div
        className="tooltiptext bg-gray-800 text-white p-2 rounded-md absolute hidden"
        style={{ opacity: isTooltipVisible ? 1 : 0 }}
      >
        {text}
      </div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
