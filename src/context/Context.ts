import React, { createContext } from "react";
import {initialStateProductCart,useProductCartReducer} from './reducers/produtcCart'
import { Product } from "../Types/Products";
import { ActionTypeGeral } from "../Types/TypeAction";


type ContextTypeState={
    products:Product[],
  
}
type ContextType={
    state:ContextTypeState,
    dispatch:React.Dispatch<any>
}

export const initialStateContext={
    products:initialStateProductCart,
  
}

export const mainReducer=(state:ContextTypeState,action:ActionTypeGeral)=>({
    products : useProductCartReducer(state.products,action),
   
})

export const Context=createContext<ContextType>({
    state:initialStateContext,
    dispatch:()=>null
})