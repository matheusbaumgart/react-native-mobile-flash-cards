import { combineReducers } from 'redux'
import { RECEIVE_DECKS, CREATE_DECK } from '../actions'

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


        default:
            return state
    }
}

const rootReducer = combineReducers({
    decks
})

export default rootReducer
