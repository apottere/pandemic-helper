import React from 'react';
import { Infection } from './tab/infection';
import { Button, Container, Form, Nav } from 'react-bootstrap';
import { useAppState } from './state';
import './app.css';
import { Initialize } from './config/init';


export const App = () => {
    const [navigation, setNavigation] = useAppState('navigation');
    const [game] = useAppState('game');
    const [, setState] = useAppState();

    if(!game && game !== 0) {
        return (<Initialize />)
    }

    if(!navigation) {
        setNavigation('/infection');
        return (<></>);
    }

    return (
        <>
            <Nav variant="tabs" activeKey={navigation} onSelect={k => setNavigation(k)}>
                <Nav.Item>
                    <Nav.Link eventKey='/infection'>Infection</Nav.Link>
                </Nav.Item>
                <Nav.Item className='mr-auto'>
                    <Nav.Link eventKey='/player-cards'>Player Cards</Nav.Link>
                </Nav.Item>
                <Form inline className='nav-buttons'>
                    <Button variant="danger" onClick={() => setState({})}>D</Button>
                </Form>
            </Nav>
            <Container fluid className='main-content'>
                {navigation === '/infection' && <Infection />}
                {navigation === '/player-cards' && <div>todo</div>}
            </Container>
        </>
    );
};
