import { AppActions } from "../Actions/AppActions"; 
import Foods from "../../Const/Foods";

const initialState={
    userInfo:{},
    // totalAmount:0,
    // totalCount:0,
    // cartData:Foods,
};

export const AppReducer=(state=initialState,payload)=>
{
    switch(payload.type){
    case AppActions.LOGIN:
        return{
            ...state,
            userInfo:payload.data,
        };
        case AppActions.UPDATE_INFO:
            return{
                ...state,
                userInfo:payload.data,  
            }
        case AppActions.LOGOUT:
            return{
                ...initialState,
            }
            default:
                    return state;
}
}