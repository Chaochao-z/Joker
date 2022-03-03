const API_URL = 'https://deckofcardsapi.com/api'

import Deck from "./Deck";


const store = {
    states: {
        deck: [],
        playerHand: [],
        test: 'Hello world!',
    },
    commits: {
        deck: {
            getNewDeck() {
                const deck = new Deck({
                    jokers_enabled: false,
                })
            },
        }
    }
}

export {store, API_URL};