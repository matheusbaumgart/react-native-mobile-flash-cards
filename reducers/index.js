import { combineReducers } from 'redux'
import { RECEIVE_DECKS, CREATE_DECK, DELETE_DECK } from '../actions'

// DECKS
function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return action.decks;

        case CREATE_DECK:
            return {
                ...state,
                ...action.deck
            };

        case DELETE_DECK:
            let copy = Object.assign({}, state) // assuming you use Object.assign() polyfill!
            delete copy[action.deckName] // shallowly mutating a shallow copy is fine
            return copy

        default:
            return state
    }
}

const rootReducer = combineReducers({
    decks
})

export default rootReducer
