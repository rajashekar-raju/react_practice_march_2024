import React, { useState } from 'react';

const Practice = () => {
    const [inputFields, setInputFields] = useState([]);

    const handleAddInputField = () => {
        setInputFields([...inputFields, Date.now()]);
    };

    const handleRemoveInputField = (input) => {
       const updatedFields = inputFields.filter((field)=>field !== input);
       setInputFields(updatedFields);
    };

    return (
        <div>
            <div>
                {inputFields.length > 0 ? (
                    inputFields.map((input, index) => (
                        <div key={input} className="flex items-center">
                            <input
                                type="text"
                                className="px-4 py-2 border border-black rounded-lg m-5"
                                // value={input}
                            />
                            <button
                                onClick={() => handleRemoveInputField(input)}
                                className="px-4 py-2 rounded-lg outline-none bg-red-700 text-black"
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <span className="m-5 text-2xl">Please Add the Input Fields</span>
                )}
            </div>
            <button
                className="px-4 py-2 rounded-lg outline-none bg-green-800 text-black"
                onClick={handleAddInputField}
            >
                Add Field
            </button>
        </div>
    );
};

export default Practice;
