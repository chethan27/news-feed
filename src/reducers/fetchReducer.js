import {FETCH_NEWS} from "../actions/types";

const intialState = {
    news: []
}

export default  function(state=intialState,action) {
     switch (action.type) {
        case FETCH_NEWS: 
            return {...state,news: action.payload}

        default :
            return state
    }
}