import React, { useState } from 'react';

const GlobalState = () => {
  const [globalState, setGlobalState] = useState({});

  const updateGlobalState = (key, value) => {
    setGlobalState(prevState => ({ ...prevState, [key]: value })); // this line of code not understood
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl mb-4">Global State Management</h1>
      <div className="grid grid-cols-2 gap-4">
        <ComponentA globalState={globalState} updateGlobalState={updateGlobalState} />
        <ComponentB globalState={globalState} updateGlobalState={updateGlobalState} />
      </div>
    </div>
  );
};

const ComponentA = ({ globalState, updateGlobalState }) => {
  return (
    <div className="bg-gray-200 p-4 rounded">
      <h2 className="text-lg mb-2">Component A</h2>
      <input
        type="text"
        value={globalState.valueA || ''}
        onChange={e => updateGlobalState('valueA', e.target.value)}
        className="border border-gray-300 px-2 py-1 rounded"
      />
    </div>
  );
};

const ComponentB = ({ globalState, updateGlobalState }) => {
  return (
    <div className="bg-gray-200 p-4 rounded">
      <h2 className="text-lg mb-2">Component B</h2>
      <input
        type="text"
        value={globalState.valueB || ''}
        onChange={e => updateGlobalState('valueB', e.target.value)}
        className="border border-gray-300 px-2 py-1 rounded"
      />
    </div>
  );
};

export default GlobalState;
