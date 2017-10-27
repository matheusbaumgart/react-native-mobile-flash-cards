export const FETCH_DECKS = 'FETCH_DECKS'
export const CREATE_DECK = 'CREATE_DECK'

// DECKS
export const getDecks = decks => ({
    type: FETCH_DECKS,
    decks
})

export const addDeck = deck => ({
    type: CREATE_DECK,
    deck
})