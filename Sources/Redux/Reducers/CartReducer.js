import { CartActions } from "../Actions/CartActions";
const initialState = {
  totalCount: 0,
  cartData: [],
  idQuantity: {},
  totalPrice:0,
}

export const CartReducer = (state = initialState , action) => {
  switch (action.type) {
   
    
    case CartActions.INCREASE:
      //if cart is empty
      if(state.cartData.length===0){
          return {
            ...state,
            cartData:[...state.cartData, action.data],
            totalCount: state.totalCount+ 1,
            idQuantity:{[action.data.id]:1},
            totalPrice:state.totalPrice+action.data.price
          };
        }
        else{

          //when something exists in cart
          if(state.cartData.length > 0 && state.cartData.find(item=>item.id===action.data.id)){
            console.log("condition 2 succewssful")
            return{
            ...state,
            totalCount:state.totalCount+1,
            idQuantity:{
              ...state.idQuantity,
              [action.data.id]:
              state.idQuantity[action
              .data.id]+1,
              
            },
            totalPrice:state.totalPrice+action.data.price

          };
        }      //if product was never added before

        return{
          ...state,
          cartData:[...state.cartData,action.data],
          totalCount:state.totalCount+1,
          idQuantity:{
            ...state.idQuantity,
            [action.data.id]:1,
          },
          totalPrice:state.totalPrice+action.data.price

      }
    };  



    case CartActions.DECREASE:
           if(state.idQuantity[action.data.id]>0){
      return {
        ...state,
        totalCount:state.totalCount-1,
        idQuantity:{
          ...state.idQuantity,
          [action.data.id]:
          state.idQuantity[action
          .data.id]-1,
        }, 
        totalPrice:state.totalPrice-action.data.price
 
      }
    }
    //   if(state.cartData.length===0){}
    // return ;
    // }

    // case CartActions.DECREASE:
    //   //when there is nothing in cart
    //   if(state.cartData.length===0)
    //   {
    //     return;
    //   }
    //   if(state.idQuantity[action.data.id]===1)
    //   {
    //     return{
    //       ...state,
    //       idQuantity:{
    //         ...state.idQuantity,
    //         [action.data.id]:0,
    //       },
    //       totalCount:state.totalCount-1,
    //       cartData:state.cartData.filter(
    //         item=>item.id !==action.data.id,
    //       )
    //     };
    //   }

    //   if(state.idQuantity[action.data.id]>1)
    //   {
    //     return{
    //     ...state,
    //       idQuantity:{
    //         ...state.idQuantity,
    //         [action.data.id]:
    //         state.idQuantity[action.data.id]-1,
    //       },
    //       totalCount:state.totalCount-1,
    //     };
    //   }


    default:
      return state;
  }
};
export default CartReducer;
