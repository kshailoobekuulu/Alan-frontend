import React, {Component} from "react";
import './menu-page.css';
import { connect} from "react-redux";
import {withFoodsService} from '../../hoc';
import { compose} from '../../../utils';
import {fetchFoods, foodAddedToCart} from "../../../actions";
import Spinner from "../../spinner/spinner";
import FoodList from "./food-list/food-list";
import ErrorIndicator from "../../error-indicaror/error-indicator";

class MenuPage extends Component {

    componentDidMount() {
        console.log("hi ",this.props.fetchFoods());
        this.props.fetchFoods();
    }

    render() {
        const {foods, loading, error, onAddedToCart} = this.props;
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
                    <FoodList foods = {foods}
                              onAddedToCart = {onAddedToCart}/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({foodList: {foods, loading, error }}) => {
    return { foods, loading , error};
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const {foodsService} = ownProps;
    return {
        fetchFoods: fetchFoods(foodsService, dispatch),
        onAddedToCart: (id) => dispatch(foodAddedToCart(id))
        // onAddedToCart: (id) => console.log("added:" ,id)
    }

};

export default compose (
    withFoodsService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(MenuPage);



