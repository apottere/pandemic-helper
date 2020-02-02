import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export const Infection = () => {
    const [count, setCount] = useState(0);

    return (
        <div>infections<Button onClick={() => setCount(count + 1)}>Count: {count}</Button></div>
    );
};
