import {FETCH_VIDEO} from '../actions/types';


export default (state=[] , actions) => {
    switch(actions.type){
        case FETCH_VIDEO:
        return actions.payload ||  false ;
        default:
        return state ;
    }
}
