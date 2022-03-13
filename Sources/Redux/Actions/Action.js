import * as types from './CartActions';

export const getCartTotal=()=>({
    type:types.GET_TOTALS,
})

export const increase=(id)=>({
    type:types.INCREASE,
    payload:id
})
export const decrease=(id)=>({
    type:types.DECREASE,
    payload:id
})