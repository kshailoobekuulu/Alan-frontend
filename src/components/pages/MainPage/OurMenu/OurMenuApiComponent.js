import React, {Component} from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {categoriesLoaded} from "../../../../actions";
import OurMenu from "./OurMenu";


class OurMenuApiComponent extends Component {
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/categories`)
            .then(res => {
                this.props.setCategories(res.data.data);
            })
    }

    render() {

        return <OurMenu categories= { this.props.categories} />

    }

}

const mapStateToProps = (state) => {
    return {categories: state.categoryList.categories}
}
const mapDispatchToProps = (dispatch) => {
    return {
        setCategories: (categories) => {
            dispatch(categoriesLoaded(categories))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(OurMenuApiComponent);