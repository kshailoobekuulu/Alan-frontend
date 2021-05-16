import React, {Component, useEffect} from "react";
import '../Menu-Page/menu-page.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {categoryByUrlAction} from "../../../actions/categoryByUrlAction";
import Spinner from "../../spinner/spinner";
import ErrorIndicator from "../../error-indicaror/error-indicator";
import FoodList from "../Menu-Page/food-list/food-list";
import {fetchFoods, foodAddedToCart} from "../../../actions";
// import {withFoodsService} from '../../hoc';
// import { compose} from '../../../utils';
// import {fetchFoods, foodAddedToCart} from "../../../actions";
// import Spinner from "../../spinner/spinner";
// // import FoodList from "./food-list/food-list";
// import ErrorIndicator from "../../error-indicaror/error-indicator";

const CategoryPageContainer = () =>  {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.categoryByUrl.loading)
    const error = useSelector(state => state.categoryByUrl.error)
    const foods = useSelector(state => state.foodList.foods)

    const path = window.location.pathname.replace('/products/', '')

    const addToCart = (id) => {
        console.log(id)
        dispatch(foodAddedToCart(id))
    }
    useEffect(() => {
        dispatch(categoryByUrlAction.getCategoryByUrlAction(path))
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

    }, [])

        if(loading) {
            return <Spinner/>
        }
        if(error) {
            return <ErrorIndicator/>
        }
        return (
            <div className='main-menu'>
                <div className='menu-page-container'>
                    <h2 className="menus-header">Наше меню:</h2>
                    <FoodList
                        foods = {foods}
                        onAddedToCart = {(id) => addToCart(id)}
                    />
                </div>
            </div>
        );
}

export default CategoryPageContainer


// const mapStateToProps = ({foodList: {foods, loading, error }}) => {
//     return { foods, loading , error};
// }
// const mapDispatchToProps = (dispatch, ownProps) => {
//     const {foodsService} = ownProps;
//     return {
//         fetchFoods: fetchFoods(foodsService, dispatch),
//         onAddedToCart: (id) => dispatch(foodAddedToCart(id))
//         // onAddedToCart: (id) => console.log("added:" ,id)
//     }
//
// };
//
// export default compose (
//     withFoodsService(),
//     connect(mapStateToProps, mapDispatchToProps)
// )(MenuPage);



