import React, { createContext, useState } from "react";
import {initialStateProductCart,useProductCartReducer} from './reducers/productReducer'
import {initialStateAddress,useProductAdressReducer} from './reducers/addressReducer'
import { Product } from "../Types/Products";
import { ActionTypeGeral } from "../Types/TypeAction";
import { AddressType } from "../Types/AdressType";
import {initialStatePurchasing,usePurchansingReducer} from './reducers/purchansingReducer'
import {initialStateUser,userReducer} from './reducers/userReducer'
import { PurchasingType } from "../Types/PurchansingType";
//import { UserType } from "../Types/userType";


type ContextTypeState={
   products:Product[]  ,
   address:AddressType[],
   purchansing:PurchasingType ,
   //user:UserType | null
 
}
type ContextType={
    state:ContextTypeState,
    dispatch:React.Dispatch<any>
}


export const initialStateContext={
    products:initialStateProductCart,
    address:initialStateAddress,
   purchansing:initialStatePurchasing,
    user:initialStateUser
 
   
}

export const mainReducer=(state:ContextTypeState,action:ActionTypeGeral)=>({
     products : useProductCartReducer(state.products,action),
    address:useProductAdressReducer(state.address,action),
   purchansing:usePurchansingReducer(state.purchansing,action),
   // user:userReducer(state.user,action)
    
})

export const Context=createContext<ContextType>({
    state:initialStateContext,
    dispatch:()=>null
})