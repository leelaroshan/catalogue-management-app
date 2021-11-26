

const initialState = {
    categories: []
}




const categoryReducer = ( state= initialState, action)=> {
    switch(action.type){
        case 'CATEGORY_PRODUCTS':
        return state;
        default :
        return state;
    }

}

export default categoryReducer;