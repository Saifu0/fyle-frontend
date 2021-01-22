import axios from 'axios';
import { 
    SET_DROPDOWN_OPTION, 
    SET_PARAMS, 
    FETCH_BANK_FAILURE, 
    FETCH_BANK_REQUEST, 
    FETCH_BANK_SUCCESS,
    ADD_FAVORITE,
    SET_FAVORITE
} from './bankTypes';


export const setParams = ( params : string ) => {
    return {
        type : SET_PARAMS,
        payload : params
    }
}
export const setDropdownOption = ( option : string ) => {
    return {
        type : SET_DROPDOWN_OPTION,
        payload : option
    }
}

export const addToFavorite = ( item : any ) => {
    return {
        type : ADD_FAVORITE,
        payload : item
    }
}

export const setFavorites = ( favorites : any ) => {
    return  {
        type : SET_FAVORITE,
        payload : favorites
    }
}

export const fetchBankRequest = () => {
    return {
        type : FETCH_BANK_REQUEST
    }
}

export const fetchBankSuccess = ( data : any ) => {
    return {
        type : FETCH_BANK_SUCCESS,
        payload : data
    }
}

export const fetchBankFailure = ( error : string ) => {
    return {
        type : FETCH_BANK_FAILURE,
        payload : error
    }
}

export const fetchBanksOnQuery = ( url : string ) => {
    return ( dispatch : any ) => {
        dispatch(fetchBankRequest());
        axios.get(url)
            .then(res => {
                dispatch(fetchBankSuccess(res.data.results));
            })
            .catch(err => {
                dispatch(fetchBankFailure(err.message))
            })
    }
} 