import React from "react";
import { FoodsServiceConsumer} from '../foods-service-context';
const withFoodsService = () => (Wrapped) => {
    return (props) => {
        return (
            <FoodsServiceConsumer>
                {
                    (foodsService) => {
                        return (<Wrapped
                            {...props}
                            foodsService = {foodsService}/>);
                    }
                }
            </FoodsServiceConsumer>
        )
    }
}
export default withFoodsService;