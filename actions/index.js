export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const CREATE_DECK = 'CREATE_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const ADD_CARD = 'ADD_CARD'

// DECKS
export const recieveDecks = decks => ({
    type: RECEIVE_DECKS,
    decks
})

export const addDeck = deck => ({
    type: CREATE_DECK,
    deck
})

export const removeDeck = deckName => ({
    type: DELETE_DECK,
    deckName
})

export const addCard = (deck, card) => ({
    type: ADD_CARD,
    deck, card
})