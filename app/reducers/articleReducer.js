import { FETCH_ARTICLES } from '../actions/types';

export default (state=[], actions) => {
    switch(actions.type) {
        case FETCH_ARTICLES:
        return actions.payload || false;
        default:
        return state;
    }
}