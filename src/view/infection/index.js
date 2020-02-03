import React from 'react';
import { Button} from 'react-bootstrap';
import { useAppState } from '../../state';

export const Infection = () => {
    const [count, setCount] = useAppState('count', 0);

    return (
        <div>infections<Button onClick={() => setCount(count + 1)}>Count: {count}</Button></div>
    );
};
