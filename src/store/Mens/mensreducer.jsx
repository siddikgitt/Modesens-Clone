import { GET_CATEGORY, GET_MENS_DATA_SUCCESS, GET_NEXT_PAGE, GET_PAGESUCCESS } from "./menstype";
let initialState={page:1,catdata:[],mdata:[],mloaderror:{loading:false,error:false}}
export const mensreducer=(state=initialState,action)=>{
switch (action.type)
{   case GET_CATEGORY:{
    return {...state,catdata:action.payload}
}
    case GET_MENS_DATA_SUCCESS:
    { 
        return {...state,mdata:action.payload,mloaderr:{...state.mloaderror,loading:false,error:false}}
    }
   
    case GET_PAGESUCCESS:
    {
        return{...state,page:action.payload}
    }
    default:
       {
        return{...state}
       } 
}
}