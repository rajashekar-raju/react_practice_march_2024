import React, { useState } from 'react';

const ToggleComponents = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setIsToggle(!isToggle)}>Toggle</button>
      {isToggle ? <ComponentA /> : <ComponentB />}
    </div>
  );
};

const ComponentA = () => <div>Component A</div>;
const ComponentB = () => <div>Component B</div>;

export default ToggleComponents;
