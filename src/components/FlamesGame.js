import React, { useState } from 'react';

const FlamesGame = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const handleName1Change = (e) => {
    setName1(e.target.value);
  };

  const handleName2Change = (e) => {
    setName2(e.target.value);
  };

  const playFlamesGame = () => {
    const cleanedName1 = cleanString(name1);
    const cleanedName2 = cleanString(name2);

    const totalLength = cleanedName1.length + cleanedName2.length;
    const flamesIndex = totalLength % 6;

    const flamesResults = ['Siblings', 'Friends', 'Love', 'Affection', 'Marriage', 'Enemy'];

    setResult(flamesResults[flamesIndex]);
  };

  const cleanString = (str) => {
    const occurrences = {};
    for (const char of str) {
      occurrences[char] = (occurrences[char] || 0) + 1;
    }

    let cleanedStr = '';
    for (const char of str) {
      if (occurrences[char] === 1) {
        cleanedStr += char;
      } else {
        occurrences[char] -= 1;
      }
    }

    return cleanedStr;
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">FLAMES Game</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Name 1:</label>
        <input
          type="text"
          value={name1}
          onChange={handleName1Change}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Name 2:</label>
        <input
          type="text"
          value={name2}
          onChange={handleName2Change}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <button
        onClick={playFlamesGame}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Play Flames
      </button>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Result: {result}</h2>
      </div>
    </div>
  );
};

export default FlamesGame;
