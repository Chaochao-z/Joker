import FetchRequest from "../utils/fetchRequest";
import {objectToQueryString} from "../utils/conversions";
import {store, API_URL} from "./store";

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

    getDeck() {
        return this.deck;
    }
}

export default Deck;