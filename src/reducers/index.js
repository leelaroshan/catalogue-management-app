import React from "react";
import productReducer from "./Productreducer";
import categoryReducer from "./Categoryreducer";
import { combineReducers } from "redux";

const allReducers =  combineReducers({
    allProducts : productReducer,
    category : categoryReducer

})

export default allReducers;



