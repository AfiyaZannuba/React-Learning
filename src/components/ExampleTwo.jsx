import React, { useState } from 'react';

const ExampleTwo = () => {
    const [randomNumber, setRandomNumber] = useState(() => {
        return Math.round(Math.random() * 100);
    });

    console.log(randomNumber);
  
    return (
        <div>
            <h1>{randomNumber}</h1>
        </div>
    );
};

export default ExampleTwo;
