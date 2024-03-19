import React from 'react';

const MyComponent = ({ data }) => {
  return (
    <div className="bg-gray-200 p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">My Component</h2>
      <p>{data}</p>
    </div>
  );
};

export default MyComponent;
