const API_URL = 'https://deckofcardsapi.com/api'

import Deck from "./Deck";

const states = {
    deckId: null,
    deck: {},
    card: {},
    remainingCards: null,
    pile: [{
        test: 'x',
    }, {
        test: 'y',
    }
    ],
    playerHand: [],
    test: 'Hello world!',
};

const commits = {
    deck: {
        async generateDeck() {
            const deck = await Deck.generateDeck({
                jokers_enabled: false,
            });
            states.deck = deck
            states.remainingCards = deck.remaining;
            states.deckId = deck.deck_id
        },
        async drawCard() {
            const draw = await Deck.drawCard(states.deckId);
            states.card = draw.cards[0];
            states.remainingCards = draw.remaining;
        },
    }
};

const store = {states, commits}

export {store, API_URL};