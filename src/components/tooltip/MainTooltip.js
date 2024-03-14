// App.js
import React, { useRef } from 'react';
import Tooltip from './Tooltip';

const MainTooltip = () => {

  const {current} = useRef("rajashekar");
  console.log(current);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Tooltip Example</h1>

      <Tooltip text="This is a tooltip for the first text">
        <p className="tooltip">Hover over me for a tooltip</p>
      </Tooltip>

      <Tooltip text="Tooltip for the second text">
        <span className="tooltip">Another tooltip here</span>
      </Tooltip>

      <Tooltip text="Here's a tooltip for the button">
        <button className="tooltip">Click me for a tooltip</button>
      </Tooltip>


    </div>
  );
};

export default MainTooltip;
