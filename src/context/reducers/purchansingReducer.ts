import { AdressType } from "../../Types/AdressType"
import { Product } from "../../Types/Products"
import { ActionTypeGeral } from "../../Types/TypeAction"



export type PurchansingType={
    products:null | Product[] ,
    address: null | AdressType[] 
}

export const initialStatePurchansing={
    products:[
        {
            id:3,
            category:'Hamburguers',
            name:'X-Salada',
            price:7,
            imageProduct:'../../../src/assets/imgs/bg3.png',
            ingredientes:'Milho,Hamburguer,Maionese,Tomate,Alface,Queijo',
            qdt:1},
            
     
    ],
    address:[]
}

export const usePurchansingReducer=(state:PurchansingType, action:ActionTypeGeral)=>{
  switch(action.type){
    case 'add':{
        return {...state}
    }
  }



    return state
}