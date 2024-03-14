import React, { useState, useEffect } from 'react';

const App = () => {
  // Sample list structure for States, Cities, and Landmarks
  const states = [
    { name: 'Madhya Pradesh', description: 'Heart of India' },
    { name: 'Maharashtra', description: 'Land of Marathas' },
    // Add more states as needed
  ];

  const cities = [
    { name: 'Bhopal', state: 'Madhya Pradesh', description: 'City of Lakes' },
    { name: 'Indore', state: 'Madhya Pradesh', description: 'Cleanest City' },
    { name: 'Mumbai', state: 'Maharashtra', description: 'Financial Capital' },
    { name: 'Pune', state: 'Maharashtra', description: 'Oxford of the East' },
    // Add more cities as needed
  ];

  const landmarks = [
    { name: 'Taj Mahal', city: 'Agra', description: 'Symbol of Love' },
    { name: 'Gateway of India', city: 'Mumbai', description: 'Mumbai\'s Icon' },
    { name: 'Shaniwar Wada', city: 'Pune', description: 'Peshwa Fort' },
    // Add more landmarks as needed
  ];

  // State management for selected State, City, and Landmark
  const [selectedState, setSelectedState] = useState(states[0]);
  const [selectedCity, setSelectedCity] = useState(
    cities.find(city => city.state === states[0]?.name) || cities[0]
  );
  const [selectedLandmark, setSelectedLandmark] = useState(
    landmarks.find(landmark => landmark.city === selectedCity?.name) || landmarks[0]
  );

  // Function to handle State selection
  const handleStateChange = (event) => {
    const selectedStateIndex = event.target.value;
    const newState = states[selectedStateIndex];
    setSelectedState(newState);

    // Auto-select the first City and Landmark for the new State
    const firstCity = cities.find(city => city.state === newState?.name) || cities[0];
    setSelectedCity(firstCity);
    const firstLandmark = landmarks.find(landmark => landmark.city === firstCity?.name) || landmarks[0];
    setSelectedLandmark(firstLandmark);
  };

  // Function to handle City selection
  // Function to handle City selection
const handleCityChange = (event) => {
    const selectedCityIndex = event.target.value;
    const newCity = cities[selectedCityIndex];
    setSelectedCity(newCity);
  
    // Auto-select the first Landmark for the new City
    const cityLandmarks = landmarks.filter(landmark => landmark.city === newCity?.name);
    const firstLandmark = cityLandmarks.length > 0 ? cityLandmarks[0] : null;
    setSelectedLandmark(firstLandmark);
  };
  

  // Function to handle Landmark selection
  const handleLandmarkChange = (event) => {
    const selectedLandmarkIndex = event.target.value;
    const newLandmark = landmarks[selectedLandmarkIndex];
    setSelectedLandmark(newLandmark);
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Location Explorer</h1>

      {/* State Dropdown */}
      <div className="mb-4">
        <label htmlFor="state" className="block text-sm font-medium text-gray-600">Select State:</label>
        <select
          id="state"
          value={states.indexOf(selectedState)}
          onChange={handleStateChange}
          className="mt-1 p-2 border rounded-md w-full"
        >
          {states.map((state, index) => (
            <option key={index} value={index}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      {/* City Dropdown */}
      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-600">Select City:</label>
        <select
          id="city"
          value={cities.indexOf(selectedCity)}
          onChange={handleCityChange}
          className="mt-1 p-2 border rounded-md w-full"
        >
          {cities
            .filter(city => city.state === selectedState?.name)
            .map((city, index) => (
              <option key={index} value={index}>
                {city.name}
              </option>
            ))}
        </select>
      </div>

      {/* Landmark Dropdown */}
      <div className="mb-4">
        <label htmlFor="landmark" className="block text-sm font-medium text-gray-600">Select Landmark:</label>
        <select
          id="landmark"
          value={landmarks.indexOf(selectedLandmark)}
          onChange={handleLandmarkChange}
          className="mt-1 p-2 border rounded-md w-full"
        >
          {landmarks
            .filter(landmark => landmark.city === selectedCity?.name)
            .map((landmark, index) => (
              <option key={index} value={index}>
                {landmark.name}
              </option>
            ))}
        </select>
      </div>

      {/* Display Selected Details */}
      <div id="state-name" className="font-semibold">{selectedState?.name}</div>
      <div id="state-description" className="text-gray-600">{selectedState?.description}</div>
      <div id="city-name" className="font-semibold">{selectedCity?.name}</div>
      <div id="city-description" className="text-gray-600">{selectedCity?.description}</div>
      <div id="landmark-name" className="font-semibold">{selectedLandmark?.name}</div>
      <div id="landmark-description" className="text-gray-600">{selectedLandmark?.description}</div>
    </div>
  );
};

export default App;
