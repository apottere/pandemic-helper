import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useAppState } from '../../state';
import { AlertTriangle, CapslockFill } from 'react-bootstrap-icons';
import './index.css';
import { games } from '../../config';

const createStartingDeck = (cities) => {
    const startingDeck = {
        discard: {},
        unseen: {},
        epidemics: [],
        removed: {},
    };

    cities.forEach((city, id) => {
        for(let i = 0; i < city.count; i++) {
            startingDeck.unseen[id] = city.count;
        }
    });

    return startingDeck;
};

const removeFromDeck = (id, ...sections) => {
    const section = sections.find(section => Object.keys(section).includes(id));
    section[id]--;
    if(section[id] <= 0) {
        delete section[id];
    }
};

const removeFromTopOfDeck = (id, deck) => removeFromDeck(id, ...deck.epidemics, deck.unseen);
const removeFromBottomOfDeck = (id, deck) => removeFromDeck(id, ...([...deck.epidemics, deck.unseen].reverse()));
const addCard = (id, section) => {
    if(!section[id]) {
        section[id] = 0;
    }

    section[id]++
};

export const Infections = () => {
    const [game] = useAppState('game');
    const cities = games[game].cities;
    const [deck, setDeck] = useAppState('infectionDeck', () => createStartingDeck(cities));

    if(!deck) {
        setDeck(createStartingDeck(cities));
        return (<></>);
    }

    const infect = (id) => {
        removeFromTopOfDeck(id, deck);
        addCard(id, deck.discard);
        setDeck(deck);
    };

    const epidemic = (id) => {
        removeFromBottomOfDeck(id, deck);
        addCard(id, deck.discard);
        deck.epidemics.push(deck.discard);
        deck.discard = [];
        setDeck(deck);
    };

    const remove = (id, section) => {
        removeFromDeck(id, section);
        addCard(id, deck.removed);
        setDeck(deck);
    };

    return (
        <Container fluid className='main-content'>
            {
                deck.epidemics.map((cards, i) => (
                    <DeckSection key={i} name={`Epidemic #${i + 1}`} cities={cities} cards={cards} infect={infect} epidemic={epidemic} />
                ))
            }
            <DeckSection name='Deck' cities={cities} cards={deck.unseen} infect={infect} epidemic={epidemic} />
            <DeckSection name='Discard' cities={cities} cards={deck.discard} />
            <DeckSection name='Removed from Play' cities={cities} cards={deck.removed} />
        </Container>
    );
};

const DeckSection = ({ name, cities, cards, infect, epidemic }) => {
    if(!cards || Object.entries(cards).length <= 0) {
        return (<></>);
    }

    return (
        <div className='infection-deck-section'>
            <h4>{name}</h4>
            <hr />
            {Object.entries(cards).map(([id, count]) => (
                <Card
                    key={id}
                    id={id}
                    city={cities[id]}
                    count={count}
                    infect={infect}
                    epidemic={epidemic}
                />
            ))}
        </div>
    )
};

const Card = ({ id, city, count, infect, epidemic }) => {
    const { color, name, count: total } = city;

    return (
        <div className={`d-flex infection-deck-card infection-group-${color}`}>
            <span className='mr-auto p-2'>{name}</span>
            <span className='p-2'>[{count}/{total}]</span>
            { epidemic && <span className='p-2'><Button variant='success' size='xs' onClick={() => epidemic(id)}><AlertTriangle size={18} /></Button></span> }
            { infect && <span className='p-2'><Button size='xs' onClick={() => infect(id)}><CapslockFill size={18} /></Button></span> }
        </div>
    );
};

