import {categoryByUrl} from "../services/categoryByUrl";
import {categoryByUrlConstants} from "../_constants/categoryByUrlConstants";

export const categoryByUrlAction = {
    getCategoryByUrlAction
}

function getCategoryByUrlAction(url){
    return dispatch => {
        dispatch(request());
        categoryByUrl.getCategoryByUrl(url)
            .then( res =>
                {
                    dispatch(success(res.data.data))
                }
            )
            .catch(err =>
                dispatch(failure(err))
            )
    }
    function request(){ return {type: categoryByUrlConstants.CATEGORY_BY_URL_GET}}
    function success(data) { return { type: 'FETCH_FOODS_SUCCESS', payload: data } }
    function failure(error) { return { type: 'FETCH_FOODS_FAILURE', payload: error } }
}