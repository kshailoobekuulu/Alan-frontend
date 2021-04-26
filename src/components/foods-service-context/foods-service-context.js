import React from "react";

const {
    Provider: FoodsServiceProvider,
    Consumer: FoodsServiceConsumer
} = React.createContext();

export {
    FoodsServiceConsumer,
    FoodsServiceProvider
};

