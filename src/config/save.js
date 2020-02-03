import React from 'react';
import { useAppState } from '../state';
import { Button, Form } from 'react-bootstrap';

export const SaveConfig = ({id, config}) => {
    const [, setState] = useAppState();
    const save = () => setState({
        game: id,
        config: config,
        navigation: '/infection'
    });

    return (
        <Form.Group controlId='init.save-config'>
            <Button variant="success" type="submit" onClick={save}>
                Start!
            </Button>
        </Form.Group>
    );
};
