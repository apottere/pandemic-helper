import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

export const useEpidemicCountFormField = (min, max, starting) => {
    const [epidemics, setEpidemics] = useState(starting);
    const increment = () => {
        if(epidemics < max) {
            setEpidemics(epidemics + 1);
        }
    };
    const decrement = () => {
        if(epidemics > min) {
            setEpidemics(epidemics - 1);
        }
    };

    return [epidemics, () => (
        <Form.Group as={Row} controlId='init.game-config.epidemics'>
            <Form.Label column xs="8">Epidemic Count</Form.Label>
            <Col xs="4">
                <InputGroup size="md" className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary" onClick={decrement} disabled={epidemics === min}>-</Button>
                    </InputGroup.Prepend>
                    <Form.Control type='text' disabled={true} value={epidemics} />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={increment} disabled={epidemics === max}>+</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Form.Group>
    )]
};
