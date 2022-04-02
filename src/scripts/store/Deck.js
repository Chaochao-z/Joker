import FetchRequest from "../utils/fetchRequest";
import {objectToQueryString} from "../utils/conversions";
import {store, API_URL} from "./store";

const Deck = {
    async generateDeck(params) {
        const queryParams = objectToQueryString(params);
        const req = new FetchRequest(`${API_URL}/deck/new/${queryParams}`);
        const res = await req.fetch();
        return await res.json();
    },

    async drawCard(deckId) {
        if (!deckId) return;
        const req = new FetchRequest(`${API_URL}/deck/${deckId}/draw/`);
        const res = await req.fetch();
        return await res.json();
    }
}

export default Deck;