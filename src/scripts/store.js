const API_URL = 'https://deckofcardsapi.com/api'

const states = {
    deck: [], playerHand: [],
}

import FetchRequest from "./utils/fetchRequest";
import {objectToQueryString} from "./utils/conversions";

class Deck {
    deck = {};
    newDeckLoading = false;

    constructor(params) {
        this.newDeckLoading = true;
        this.generateDeck(params)
            .then((deck) => {
                this.deck = deck;
            })
            .catch((err) => {
                throw new Error(err);
            })
            .finally(() => {
                this.newDeckLoading = false;
            })
    }

    async generateDeck(params) {
        const queryParams = objectToQueryString(params);
        const req = new FetchRequest(`${API_URL}/deck/new/${queryParams}`, {}, 1000, () => {
            console.log('request timed out!')
        })
        const res = await req.fetch();
        return await res.json();
    }
}

export {Deck};