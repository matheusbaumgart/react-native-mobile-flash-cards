import { FETCH_DECKS, FETCH_DECK, CREATE_DECK } from '../actions'

// DECKS
const decks = (state = {}, action) => {
    switch (action.type) {
        case FETCH_DECK:
            return {
                ...state,
                // ...action.decks,
            }
        case CREATE_DECK:
            return {
                state
            }
        default:
            return state
    }
}

export default decks
