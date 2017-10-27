export const FETCH_DECKS = 'FETCH_DECKS'
export const CREATE_DECK = 'CREATE_DECK'

import { fetchDecks } from "../utils/api";

// DECKS
export const getDecksAction = decks => ({
    type: FETCH_DECKS,
    decks
})

export const addDeckAction = deck => ({
    type: CREATE_DECK,
    deck
})

export const fetchDecksAction = dispatch => {
    return fetchDecks()
        .then(res => res.json())
        .then(data => { dispatch(getDecksAction(data)) })
}