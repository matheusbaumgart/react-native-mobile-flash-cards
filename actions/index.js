export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const CREATE_DECK = 'CREATE_DECK'

// DECKS
export const recieveDecks = decks => ({
    type: RECEIVE_DECKS,
    decks
})

export const addDeck = deck => ({
    type: CREATE_DECK,
    deck
})