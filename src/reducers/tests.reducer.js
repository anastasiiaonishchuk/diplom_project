import {LOAD_ITEMS} from '../constants/AppConstants'
import tests from '../task/tests';

const initState = [];


export default (state = initState, action)=>{
    switch(action.type){
        case LOAD_ITEMS: 
            return [...state, ...tests];
        default:
        return state
    }
}