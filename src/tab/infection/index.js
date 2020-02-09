import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { useAppState } from '../../state';
import { AlertTriangle, CapslockFill, ThreeDotsVertical, TrashFill, ArrowClockwise } from 'react-bootstrap-icons';
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

    const { explodedDeck, missingSection } = explodeDeck(deck, cities);

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

    const remove = (section) => (id) => {
        removeFromSection(id, section);
        addCard(id, deck.removed);
        setDeck(deck);
    };

    const unremove = (id) => {
        removeFromSection(id, deck.removed);
        setDeck(deck);
    };

    return (
        <Container fluid className='infection-content'>
            {
                explodedDeck.epidemics.map((cards, i) => (
                    <DeckSection
                        key={i}
                        name={`Epidemic #${explodedDeck.epidemics.length - i}`}
                        cards={cards}
                        infect={infect}
                        epidemic={epidemic}
                        remove={remove(deck.epidemics[(deck.epidemics.length - 1) - i])}
                        showEpidemic={false}
                        showDraw={explodedDeck.epidemics.slice(0, i).flatMap(e => e).length === 0}
                    />
                ))
            }
            <DeckSection
                name='Main Deck'
                cities={cities}
                cards={explodedDeck.unseen}
                infect={infect}
                epidemic={epidemic}
                remove={remove(missingSection)}
                showEpidemic={true}
                showDraw={explodedDeck.epidemics.flatMap(e => e).length === 0}
            />
            <DeckSection
                name='Discard'
                cities={cities}
                cards={explodedDeck.discard}
                remove={remove(deck.discard)}
            />
            <DeckSection
                name='Removed from Play'
                cities={cities}
                cards={explodedDeck.removed}
                unremove={unremove}
            />
        </Container>
    );
};

const DeckSection = ({ name, cards, infect, epidemic, remove, unremove, showEpidemic, showDraw }) => {
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
                    unremove={unremove}
                    showEpidemic={showEpidemic}
                    showDraw={showDraw}
                />
            ))}
        </div>
    )
};

const Card = ({ card, infect, epidemic, remove, unremove, showEpidemic, showDraw }) => {
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const { city, id, count } = card;
    const { color, name, count: total } = city;

    const closeWithAction = (fn) => () => {
        handleCloseModal();
        fn(id);
    };

    const modalButtons = [];
    if(epidemic && !showEpidemic) {
        modalButtons.push((<Button className='infection-extra-button' size='lg' variant='success' onClick={closeWithAction(epidemic)}><AlertTriangle size={26} /> Force Epidemic</Button>))
    }
    if(infect && !showDraw) {
        modalButtons.push((<Button className='infection-extra-button' size='lg' variant='primary' onClick={closeWithAction(infect)}><CapslockFill size={26} /> Force Draw</Button>))
    }
    if(remove) {
        modalButtons.push((<Button className='infection-extra-button' size='lg' variant='danger' onClick={closeWithAction(remove)}><TrashFill size={26} /> Remove from Play</Button>))
    }
    if(unremove) {
        modalButtons.push((<Button className='infection-extra-button' size='lg' variant='primary' onClick={closeWithAction(unremove)}><ArrowClockwise size={26} /> Return to Play</Button>))
    }

    const hasModalButtons = modalButtons.length !== 0;
    const nameSection = (<span className='mr-auto p-2'>{name}</span>);
    const countSection = (<span className='p-2'><span>{count}</span><span className='text-muted'> / </span><span className='text-muted'>{total}</span></span>);

    return (
        <div className={`d-flex infection-deck-card infection-group-${color}`}>
            {nameSection}
            {countSection}
            { showEpidemic && epidemic && <span className='p-2'><Button variant='success' size='xs' onClick={() => epidemic(id)}><AlertTriangle size={18} /></Button></span> }
            { showDraw && infect && <span className='p-2'><Button size='xs' onClick={() => infect(id)}><CapslockFill size={18} /></Button></span> }
            { hasModalButtons && <span className='p-2 infection-deck-card-extra'><Button variant='secondary-outline' size='xs' onClick={handleShowModal}><ThreeDotsVertical size={18} /></Button></span> }
            { hasModalButtons && <Modal show={hasModalButtons && showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Additional Actions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={`d-flex infection-deck-card infection-group-${color}`}>
                        {nameSection}
                        {countSection}
                    </div>
                    { modalButtons.map((button, i) => (<div key={i}>{button}</div>)) }
                </Modal.Body>
            </Modal> }
        </div>
    );
};

