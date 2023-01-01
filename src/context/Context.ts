import React, { createContext, useState } from "react";
import {initialStateProductBad,useProductCartReducer} from './reducers/productReducer'
import {initialStateAddress,useProductAdressReducer} from './reducers/addressReducer'
import { Product } from "../Types/Products";
import { ActionTypeGeral } from "../Types/TypeAction";
import { AdressType } from "../Types/AdressType";
import {PurchansingType,initialStatePurchansing,usePurchansingReducer} from './reducers/purchansingReducer'


type ContextTypeState={
    products:Product[],
   address:AdressType[],
   purchansing:PurchansingType
 
}
type ContextType={
    state:ContextTypeState,
    dispatch:React.Dispatch<any>
}


export const initialStateContext={
    products:initialStateProductBad,
    address:initialStateAddress,
    purchansing:initialStatePurchansing
 
   
}

export const mainReducer=(state:ContextTypeState,action:ActionTypeGeral)=>({
     products : useProductCartReducer(state.products,action),
    address:useProductAdressReducer(state.address,action),
    purchansing:usePurchansingReducer(state.purchansing,action)
    
})

export const Context=createContext<ContextType>({
    state:initialStateContext,
    dispatch:()=>null
})