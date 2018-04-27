import {ADD_SCORE} from '../constants/AppConstants'

export default (state = [], action)=>{
    switch(action.type){
        case ADD_SCORE:
        return  (action.payload.score)
        default: 
        return state;
    }
}
