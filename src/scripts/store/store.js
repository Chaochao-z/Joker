const API_URL = 'https://deckofcardsapi.com/api'

import Deck from "./Deck";

const states = {
    deckId: null,
    deck: {},
    card: {},
    remainingCards: null,
    pile: [],
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
        async addCardToPile(cardCode = states.card.code) {
            const updatedPile = await Deck.addCardToPile(states.deckId, cardCode);
            await this.getPile()
            return updatedPile;
        },
        async getPile() {
            const res = await Deck.listPile(states.deckId);
            states.pile = res.piles.pile.cards;
        },
    }
};

const store = {states, commits}

export {store, API_URL};