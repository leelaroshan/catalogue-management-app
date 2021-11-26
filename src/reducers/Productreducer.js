

import React from 'react';

const initialState = {
  products:  [  
    {id: 1, name:"lkio", category:"ece", description: "this is good quality fabrick"},
    {id: 2, name:"jrty", category:"cse",description: "this is good quality fabrick"},
    {id: 3, name:"leel", category:"eee", description: "this is good quality fabrick"},
    {id: 1, name:"rosh", category:"ece", description: "this is good quality fabrick"},
    {id: 2, name:"eeshu", category:"cse",description: "this is good quality fabrick"},
    {id: 3, name:"ciuo", category:"eee", description: "this is good quality fabrick"}
 
   ]

}


const productReducer = ( state= initialState, action)=> {
    switch(action.type){
        case 'SELECT_PRODUCTS':
        return state;
        default :
        return state;
    }

}

export default productReducer;