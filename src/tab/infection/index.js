import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useAppState } from '../../state';
import { AlertTriangle, CapslockFill } from 'react-bootstrap-icons';
import './index.css';
import { games } from '../../config';

const explodeDeck = (deck, cities) => {
    const seen = {};
    const explodedDeck = {};
    explodedDeck.epidemics = deck.epidemics.slice(0).reverse().map(section => explodeSection(cities, seen, section));
    explodedDeck.discard = explodeSection(cities, seen, deck.discard);
    explodedDeck.removed = explodeSection(cities, seen, deck.removed);
    const missingSection = createMissingCardSection(cities, seen);
    explodedDeck.unseen = explodeSection(cities, null, missingSection);
    return { explodedDeck, missingSection };
};

const createMissingCardSection = (cities, seen) => {
    const section = {};
    cities.forEach((city, id) => {
        const count = countInSection(id, seen);
        if(city.count > count) {
            addToSection(id, section, city.count - count);
        }
    });

    return section;
};

const explodeSection = (cities, seen, deckSection) => {
    const section = [];
    Object.entries(deckSection).forEach(([id, count]) => {
        const first = seen ? countInSection(id, seen) === 0 : false;
        section.push(explodeCard(id, count, first, cities[id]));
        if(seen) {
            addToSection(id, seen);
        }
    });

    section.sort((a, b) => a.city.name.localeCompare(b.city.name));

    return section;
};

const explodeCard = (id, count, first, city) => ({
    city,
    id,
    count,
    first
});

const countInSection = (id, section) => {
    return section[id] || 0;
};

const removeFromSection = (id, section) => {
    const count = countInSection(id, section);
    if(count > 0) {
        if(count > 1) {
            section[id]--;
        } else {
            delete section[id];
        }

        return true
    }
    return false
};

const addToSection = (id, section, count = 1) => {
    if(countInSection(id, section) <= 0) {
        section[id] = 0;
    }

    section[id] = section[id] + count;
};

const removeFromDeck = (id, ...sections) => {
    sections.find(section => removeFromSection(id, section));
};

const removeFromTopOfDeck = (id, unseen, epidemics) => removeFromDeck(id, ...([unseen, ...epidemics].reverse()));
const removeFromBottomOfDeck = (id, unseen, epidemics) => removeFromDeck(id, unseen, ...epidemics);
const addCard = (id, section) => {
    if(!section[id]) {
        section[id] = 0;
    }

    section[id]++
};

export const Infections = () => {
    const [game] = useAppState('game');
    const cities = games[game].cities;
    const [deck, setDeck] = useAppState('infectionDeck', () => ({
        epidemics: [],
        discard: {},
        removed: {},
    }));

    const { explodedDeck: actualDeck, missingSection } = explodeDeck(deck, cities);

    const infect = (id) => {
        removeFromTopOfDeck(id, missingSection, deck.epidemics);
        addCard(id, deck.discard);
        setDeck(deck);
    };

    const epidemic = (id) => {
        removeFromBottomOfDeck(id, missingSection, deck.epidemics);
        addCard(id, deck.discard);
        deck.epidemics.push(deck.discard);
        deck.discard = {};
        setDeck(deck);
    };

    const remove = (id, section) => {
        removeFromDeck(id, section);
        addCard(id, deck.removed);
        setDeck(deck);
    };

    return (
        <Container fluid className='infection-content'>
            {
                actualDeck.epidemics.map((cards, i) => (
                    <DeckSection
                        key={i}
                        name={`Epidemic #${actualDeck.epidemics.length - i}`}
                        cards={cards}
                        infect={infect}
                        epidemic={epidemic}
                        remove={remove}
                        showEpidemic={false}
                        showDraw={actualDeck.epidemics.slice(0, i).flatMap(e => e).length === 0}
                    />
                ))
            }
            <DeckSection
                name='Main Deck'
                cities={cities}
                cards={actualDeck.unseen}
                infect={infect}
                epidemic={epidemic}
                showEpidemic={true}
                showDraw={actualDeck.epidemics.flatMap(e => e).length === 0}
            />
            <DeckSection
                name='Discard'
                cities={cities}
                cards={actualDeck.discard}
            />
            <DeckSection
                name='Removed from Play'
                cities={cities}
                cards={actualDeck.removed}
            />
        </Container>
    );
};

const DeckSection = ({ name, cards, infect, epidemic, remove, showEpidemic, showDraw }) => {
    if(!cards || cards.length <= 0) {
        return (<></>);
    }

    return (
        <div className='infection-deck-section'>
            <h3 className='infection-deck-section-title'>{name}</h3>
            {cards.map((card, i) => (
                <Card
                    key={i}
                    card={card}
                    infect={infect}
                    epidemic={epidemic}
                    remove={remove}
                    showEpidemic={showEpidemic}
                    showDraw={showDraw}
                />
            ))}
        </div>
    )
};

const Card = ({ card, infect, epidemic, showEpidemic, showDraw }) => {
    const { city, id, count } = card;
    const { color, name, count: total } = city;

    return (
        <div className={`d-flex infection-deck-card infection-group-${color}`}>
            <span className='mr-auto p-2'>{name}</span>
            <span className='p-2'><span>{count}</span><span className='text-muted'> / </span><span className='text-muted'>{total}</span></span>
            { showEpidemic && epidemic && <span className='p-2'><Button variant='success' size='xs' onClick={() => epidemic(id)}><AlertTriangle size={18} /></Button></span> }
            { showDraw && infect && <span className='p-2'><Button size='xs' onClick={() => infect(id)}><CapslockFill size={18} /></Button></span> }
        </div>
    );
};

