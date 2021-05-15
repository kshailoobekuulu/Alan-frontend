
const foodsLoaded = (newFoods) => {
    return {
        type: 'FETCH_FOODS_SUCCESS',
        payload: newFoods
    }
};
const foodsRequested = () => {
    return {
        type: 'FETCH_FOODS_REQUEST'
    }
}
const foodsError = (error) => {
    return {
        type: 'FETCH_FOODS_FAILURE',
        payload: error
    }
}
const foodAddedToCart = (foodId) => {
    return {
        type: 'FOOD_ADDED_TO_CART',
        payload: foodId
    }
}
const foodIncreaseInCart = (foodId) => {
    return {
        type: 'FOOD_INCREASE_IN_CART',
        payload: foodId
    }
}
const foodDecreaseInCart = (foodId) => {
    return {
        type: 'FOOD_DECREASE_IN_CART',
        payload: foodId
    }
}
const foodDeleteInCart = (foodId) => {
    return {
        type: 'FOOD_DELETE_IN_CART',
        payload: foodId
    }
}

const fetchFoods = (foodsService, dispatch) => () => {
    dispatch(foodsRequested());
    foodsService.getFoods()
        .then((data) => dispatch(foodsLoaded(data)))
        .catch((err) => dispatch(foodsError(err)));
}

const fetchCategoryByUrl = (foodsService, dispatch) => () => {
    dispatch(foodsRequested());
    foodsService.getFoods()
        .then((data) => dispatch(foodsLoaded(data)))
        .catch((err) => dispatch(foodsError(err)));
}

const categoriesLoaded = (categories) => {
    return {
        type: 'FETCH_CATEGORIES',
        payload: categories
    }
};

export {
    fetchFoods,
    foodAddedToCart,
    foodDecreaseInCart,
    foodIncreaseInCart,
    foodDeleteInCart,
    categoriesLoaded
};