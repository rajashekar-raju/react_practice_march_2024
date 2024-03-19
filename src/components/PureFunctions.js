import React from 'react'

const PureFunctions = () => {
  return (
    <div>

        {/* Pure functions are functions that, given the same inputs, always return the same outputs.
        They don't rely on external state, global variables, or perform side effects (e.g., modifying DOM elements directly, making network requests).
        Their behavior is solely determined by their arguments. */}

            {/* function add(a, b) {
                return a + b;
         }

            const result = add(2, 3); // result will always be 5  */}


        {/* function formatName(firstName, lastName) {
        return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
        }

        const fullName = formatName('john', 'doe'); // fullName will always be 'JOHN DOE' */}

        {/* function filterEvenNumbers(numbers) {
        return numbers.filter(number => number % 2 === 0);
        }

        const originalNumbers = [1, 2, 3, 4];
        const evenNumbers = filterEvenNumbers(originalNumbers); // evenNumbers will be [2, 4] (original array remains unchanged) */}



    </div>
  )
}

export default PureFunctions