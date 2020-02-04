import React, { useState } from 'react';
import { Infections } from './tab/infection';
import { Button, Form, Nav } from 'react-bootstrap';
import { useAppState } from './state';
import './app.css';
import { Initialize } from './config/init';
import { Trash, SkipBackward } from 'react-bootstrap-icons';


export const App = () => {
    const [navigation, setNavigation] = useState('/infection');
    const [game] = useAppState('game');
    const [, setState] = useAppState();

    if(!game && game !== 0) {
        return (<Initialize />)
    }

    return (
        <>
            <Nav variant="tabs" activeKey={navigation} onSelect={k => setNavigation(k)}>
                <Nav.Item className='mr-auto'>
                    <Nav.Link eventKey='/infection'>Infection Deck</Nav.Link>
                </Nav.Item>
                {/*<Nav.Item className='mr-auto'>*/}
                {/*    <Nav.Link eventKey='/player-cards'>Player Cards</Nav.Link>*/}
                {/*</Nav.Item>*/}
                <Form inline className='nav-buttons'>
                    <Button variant="outline-primary" onClick={() => window.history.back()}><SkipBackward size={24} /></Button>
                    <Button variant="outline-danger" onClick={() => setState({})}><Trash size={24} /></Button>
                </Form>
            </Nav>
            {navigation === '/infection' && <Infections />}
            {navigation === '/player-cards' && <div>todo</div>}
        </>
    );
};
