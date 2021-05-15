import { categoryByUrlConstants } from "../_constants/categoryByUrlConstants";

export const initialState = {
    categoryProducts: [],
    loading: false,
    success: false,
    error: false
}
export function getCategoryByUrlReducer(state = initialState, action) {
    switch (action.type) {

        case categoryByUrlConstants.CATEGORY_BY_URL_GET:
            return { ...state, loading: true };
        case categoryByUrlConstants.CATEGORY_BY_URL_SUCCESS:
            return { ...state, loading: false, success: true,
                categoryProducts: action.data};
        case categoryByUrlConstants.CATEGORY_BY_URL_FAILURE:
            return {...state, loading: false, error: true};
        default:
            return state
    }
}