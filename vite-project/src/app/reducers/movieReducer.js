import { actionTypes } from "../actionTypes";

const initialState = {
    popularFilms:[],
    loading: false,
    genres: [],

}

export const movieReducer = (state = initialState, {type, payload}) => {
    switch(type){
    case actionTypes.GET_FILMS:
        return{
            ...state,
            popularFilms:payload
        }    
        case actionTypes.GET_GENRES:
            return{
                ...state,
                genres: payload,
            }
        default:
            return state;
    }
}