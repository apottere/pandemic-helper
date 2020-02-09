import React from 'react';
import { Container } from 'react-bootstrap';
import { useAppState } from '../../state';
import './index.css';
import { games } from '../../config';
import { Card } from './card';
import { addCard, explodeDeck, removeFromBottomOfDeck, removeFromSection, removeFromTopOfDeck } from './deck-utils';

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

