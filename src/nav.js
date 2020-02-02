import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export const Navigation = () => (
    <Nav variant="tabs" defaultActiveKey="/infection">
        <Nav.Item>
            <LinkContainer to={'/infection'}>
                <Nav.Link>Infection</Nav.Link>
            </LinkContainer>
        </Nav.Item>
        <Nav.Item>
            <LinkContainer to={'/player-cards'}>
                <Nav.Link>Player Cards</Nav.Link>
            </LinkContainer>
        </Nav.Item>
    </Nav>
);
