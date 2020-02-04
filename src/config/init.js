import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { games } from './index';

export const Initialize = () => {
    const [selectedGame, setSelectedGame] = useState(0);
    const GameConfig = games[selectedGame].Config;

    return (
        <Container fluid className='main-content'>
            <h3>Start a New Game</h3>
            <Form>
                <Form.Group controlId='init.game-name'>
                    <Form.Label>Game Version</Form.Label>
                    <Form.Control as='select' value={selectedGame} onChange={(e) => setSelectedGame(e.target.value)}>
                        {
                            games.map((game, i) => (<option key={i} value={i}>{game.name}</option>))
                        }
                    </Form.Control>
                </Form.Group>
                <GameConfig id={selectedGame} />
            </Form>
        </Container>
    );
};
