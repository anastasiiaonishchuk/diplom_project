import {LOAD_ITEMS} from '../constants/AppConstants'
import tests from '../SERVER_S_MONGOY/miningTests/api/routes/testRoutes';

const initState = [];


export default (state = initState, action)=>{
    switch(action.type){
        case LOAD_ITEMS: 
            return [...state, ...tests];
            console.log(tests)
        default:
        return state
    }
}