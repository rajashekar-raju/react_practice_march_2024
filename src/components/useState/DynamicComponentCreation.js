import React, { useState } from 'react';

const DynamicComponentCreation = () => {
  const [components, setComponents] = useState([]);

  const addComponent = () => {
    setComponents(prevComponents => [
      ...prevComponents,
      { id: prevComponents.length + 1, content: `Component ${prevComponents.length + 1}` }
    ]);
  };

  const removeComponent = (id) => {
    const updatedComponents = components.filter(component => component.id !== id);
    setComponents(updatedComponents);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl mb-4">Dynamic Component Creation</h1>
      <div>
        {components.map(component => (
          <div key={component.id} className="bg-gray-200 p-4 rounded mb-4 flex items-center justify-between">
            <span>{component.content}</span>
            <button
              onClick={() => removeComponent(component.id)}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={addComponent}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Add Component
      </button>
    </div>
  );
};

export default DynamicComponentCreation;
