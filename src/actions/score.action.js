import {ADD_SCORE} from '../constants/AppConstants'

export const addScore = (score) =>{
    return {
        type: ADD_SCORE,
        payload: {
            score, 
        },
    }
}