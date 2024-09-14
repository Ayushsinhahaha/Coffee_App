import { ADD_TO_CART ,REMOVE_FROM_CART} from "../ActionTypes"

export const addToCart = (data) => {
    return(
        type:ADD_TO_CART,
        payload: data
    )
}

export const removeFromCart = (index) => {
    return(
        type: REMOVE_FROM_CART,
        payload: index
    )
}