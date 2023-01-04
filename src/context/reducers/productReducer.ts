import { Profiler } from "react";
import { ProductCart } from "../../Components/ProductCart";
import { Product } from "../../Types/Products";
import { ActionTypeGeral } from "../../Types/TypeAction";
import { dataBlouses } from "../../data/Product";



export const initialStateProductBad=[]

export const useProductCartReducer=(state:Product[],action:ActionTypeGeral)=>{

    switch(action.type){
        case 'addProduct':{
            /*existe no item na lista?
                pegar o item
                alterar o item

            */
           let products=[...state]
           let id=action.payload?.data.id
           let index=products.findIndex(item=>item.id === id)
           if(index > -1){
                products[index].qdt+=action.payload?.qdt
                products[index].price+=action.payload?.price
                return [...products]
            
           }else{
            let newData={
                ...action.payload?.data,
                qdt:action.payload?.qdt,
                price:action.payload?.price
            }
           
            products.unshift(newData)
            
               return [...products]
        }
      
    }
        

    }

    return state
}