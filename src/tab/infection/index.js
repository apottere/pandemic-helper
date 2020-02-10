import React from 'react';
import { Container } from 'react-bootstrap';
import { useAppState } from '../../state';
import { games } from '../../config';
import { Card } from './card';
import { addCard, explodeDeck, removeFromBottomOfDeck, removeFromSection, removeFromTopOfDeck } from './deck-utils';
import { createUseStyles } from 'react-jss';
import { AlertTriangle, CapslockFill } from 'react-bootstrap-icons';

const toastHeight = '60px';
const useStyles = createUseStyles({
    content: {
        padding: `calc(56px) 0 ${toastHeight} 0`
    },
    sectionTitle: {
        padding: '25px 15px',
        margin: 0,
        borderBottom: '1px solid #5f5f5f'
    },
    toast: {
        backgroundColor: '#f3f3f3',
        height: toastHeight,
        lineHeight: toastHeight,
        textAlign: 'center',
        fontSize: '20px',
        boxSizing: 'border-box',
        borderTop: '1px solid #5f5f5f',
        position: 'fixed',
        bottom: 0,
        width: '100%',

        '& > span': {
            padding: '0 20px',
            '& > svg': {
                marginBottom: '1px'
            }
        }
    }
});

export const Infections = () => {
    const styles = useStyles();
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
        <>
            <Container fluid className={styles.content}>
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
            <div className={styles.toast}>
                <span className='text-muted'><CapslockFill size={20} /> Infect</span>
                |
                <span className='text-muted'><AlertTriangle size={20} /> Epidemic</span>
            </div>
        </>
    );
};

const DeckSection = ({ name, cards, infect, epidemic, remove, unremove, showEpidemic, showDraw }) => {
    const styles = useStyles();
    if(!cards || cards.length <= 0) {
        return (<></>);
    }

    return (
        <div>
            <h3 className={styles.sectionTitle}>{name}</h3>
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

