import { combineReducers } from 'redux'
import { RECEIVE_DECKS, CREATE_DECK, DELETE_DECK, ADD_CARD } from '../actions'

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
            var copy = Object.assign({}, state) 
            delete copy[action.deckName]
            return copy

        case ADD_CARD:
            var copy = Object.assign({}, state)
            let t = copy[action.deck]
            t.questions.push(action.card)
            return copy

        default:
            return state
    }
}

const rootReducer = combineReducers({
    decks
})

export default rootReducer
