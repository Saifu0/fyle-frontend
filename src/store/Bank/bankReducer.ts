import { 
    SET_DROPDOWN_OPTION, 
    SET_PARAMS, 
    FETCH_BANK_FAILURE, 
    FETCH_BANK_REQUEST, 
    FETCH_BANK_SUCCESS 
} from './bankTypes';
import { TState } from './@types';

const initialState : TState = {
    option : 'NONE',
    params : '',
    banks : [],
    isLoading : false,
    error : ''
}

const reducer = (state : TState = initialState, action : any ) =>{
    switch(action.type){
        case SET_PARAMS:
            return {
                ...state,
                params : action.payload
            }
        case SET_DROPDOWN_OPTION:
            return {
                ...state,
                option : action.payload
            }
        case FETCH_BANK_REQUEST:
            return {
                ...state,
                isLoading : true
            }
        case FETCH_BANK_SUCCESS:
            return {
                ...state,
                isLoading : false,
                banks : action.payload,
            } 
        case FETCH_BANK_FAILURE:
            return {
                ...state,
                error : action.payload,
                isLoading : false
            }   
        default:
            return state
    }
}

export default reducer;