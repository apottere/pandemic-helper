export const explodeDeck = (deck, cities) => {
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
            addToSection(id, seen, count);
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

export const removeFromSection = (id, section) => {
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

export const removeFromTopOfDeck = (id, unseen, epidemics) => removeFromDeck(id, ...([unseen, ...epidemics].reverse()));
export const removeFromBottomOfDeck = (id, unseen, epidemics) => removeFromDeck(id, unseen, ...epidemics);

export const addCard = (id, section) => {
    if(!section[id]) {
        section[id] = 0;
    }

    section[id]++
};
