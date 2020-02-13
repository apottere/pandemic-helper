import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

export const useEpidemicCountFormField = (min, max, starting) => {
    const [epidemics, increment, decrement, canIncrement, canDecrement] = useIncrementingCount(min, max, starting);

    return [epidemics, () => (
        <Form.Group as={Row} controlId='init.game-config.epidemics'>
            <Form.Label column xs='8'>Epidemic Count</Form.Label>
            <Col xs='4'>
                <InputGroup size='md'>
                    <InputGroup.Prepend>
                        <Button variant='outline-secondary' onClick={decrement} disabled={!canDecrement}>-</Button>
                    </InputGroup.Prepend>
                    <Form.Control type='text' disabled={true} value={epidemics} />
                    <InputGroup.Append>
                        <Button variant='outline-secondary' onClick={increment} disabled={!canIncrement}>+</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Form.Group>
    )]
};

export const usePlayerCountFormField = () => {
    const [players, increment, decrement, canIncrement, canDecrement] = useIncrementingCount(2, 4, 4);

    return [players, () => (
        <Form.Group as={Row} controlId='init.game-config.players'>
            <Form.Label column xs='8'>Player Count</Form.Label>
            <Col xs='4'>
                <InputGroup size='md'>
                    <InputGroup.Prepend>
                        <Button variant='outline-secondary' onClick={decrement} disabled={!canDecrement}>-</Button>
                    </InputGroup.Prepend>
                    <Form.Control type='text' disabled={true} value={players} />
                    <InputGroup.Append>
                        <Button variant='outline-secondary' onClick={increment} disabled={!canIncrement}>+</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Form.Group>
    )]
};

const useIncrementingCount = (min, max, starting) => {
    const [count, setCount] = useState(starting);
    const canIncrement = count < max;
    const canDecrement = count > min;

    const increment = () => {
        if(canIncrement) {
            setCount(count + 1);
        }
    };
    const decrement = () => {
        if(canDecrement) {
            setCount(count - 1);
        }
    };

    return [count, increment, decrement, canIncrement, canDecrement];
};
