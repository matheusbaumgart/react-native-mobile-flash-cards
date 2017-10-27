import { FETCH_DECKS, FETCH_DECK, CREATE_DECK } from '../actions'

// DECKS
function decks(state = {}, action) {
    switch (action.type) {
        case FETCH_DECKS:
            return { ...state, ...action.decks };

        case CREATE_DECK:
            return {...state, ...action.deck};
            

        default:
            return state
    }
}

export default decks
