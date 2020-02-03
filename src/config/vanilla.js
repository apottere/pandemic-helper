import React from 'react';
import { SaveConfig } from './save';
import { Form } from 'react-bootstrap';

export const VanillaConfig = ({id}) => (
    <>
        <Form.Group controlId='init.game-config'>
            <span className='text-muted'>No configuration options.</span>
        </Form.Group>
        <SaveConfig id={id} config={{}} />
    </>
);
