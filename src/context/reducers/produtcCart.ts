import { Product } from "../../Types/Products";
import { ActionTypeGeral } from "../../Types/TypeAction";




export const initialStateProductCart:Product[]=[]

export const useProductCartReducer=(state:Product[],action:ActionTypeGeral)=>{

    switch(action.type){
       case 'addProductCart':
          let products=[...state]
          let id=action.payload?.id
          let index=products.findIndex(item=>item.id === id)
          if(index > -1){
                   products[index].qdt+=action.payload?.qdt 
          }else{
            let data={...action.payload?.data}
            products.push(data)
          }
          return [...state,products]
        

    }

    return state
}