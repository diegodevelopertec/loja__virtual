import { AdressType } from "../../Types/AdressType"
import { Product } from "../../Types/Products"
import { ActionTypeGeral } from "../../Types/TypeAction"



export type PurchansingType={
    products:Product[] ,
    address:AdressType[] 
}

export const initialStatePurchansing={
    products:[

        
    ],
    address:[]
}

export const usePurchansingReducer=(state:PurchansingType, action:ActionTypeGeral)=>{
    switch(action.type){
        case 'setDataRequest':{
           
        }
    }




    return state
}