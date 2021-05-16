import { categoryByUrlConstants } from "../_constants/categoryByUrlConstants";

const initialState = {
    foods: [],
    loading: false,
    success: false,
    error: false
}
function getCategoryByUrlReducer(state = initialState, action) {
    console.log(state, initialState, action)
    switch (action.type) {

        case categoryByUrlConstants.CATEGORY_BY_URL_GET:
            return { ...initialState, loading: true };
        case categoryByUrlConstants.CATEGORY_BY_URL_SUCCESS:
            return { ...initialState, loading: false, success: true,
                foods: action.data};
        case categoryByUrlConstants.CATEGORY_BY_URL_FAILURE:
            return {...initialState, loading: false, error: true};
        default:
            return initialState
    }
}

export default getCategoryByUrlReducer