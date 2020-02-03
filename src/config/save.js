import React from 'react';
import { useAppState } from '../state';
import { Button, Form } from 'react-bootstrap';
import { CheckCircle } from 'react-bootstrap-icons';

export const SaveConfig = ({id, config}) => {
    const [, setState] = useAppState();
    const save = () => setState({
        game: id,
        config: config,
    });

    return (
        <Form.Group controlId='init.save-config'>
            <Button variant="success" type="submit" onClick={save}>
                <CheckCircle size={24} /> Start
            </Button>
        </Form.Group>
    );
};
