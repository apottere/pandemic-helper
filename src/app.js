import React from 'react';
import { Infection } from './view/infection';
import { Button, Container, Form, Nav } from 'react-bootstrap';
import { useAppState } from './state';
import './app.css';


export const App = () => {
    const [navigation, setNavigation] = useAppState('navigation');
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
                    <Button variant="danger">D</Button>
                </Form>
            </Nav>
            <Container fluid className='main-content'>
                {navigation === '/infection' && <Infection />}
                {navigation === '/player-cards' && <div>todo</div>}
            </Container>
        </>
    );
};
