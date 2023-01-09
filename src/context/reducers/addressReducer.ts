import { ActionTypeGeral } from "../../Types/TypeAction";
import { AddressType } from "../../Types/AdressType";



export const initialStateAddress=[
    {
        id: 1,
        rua: 'generoso pinto',
        state: true,
        numero: '124',
        cidade:'bh',
        bairro: 'curitiba',
        complemento: 'casa',
        cep:'3546000'
       
    },
    {
        id: 2,
        rua: 'alameda',
        state: false,
        numero: '144',
        cidade:'bh',
        bairro: 'alterosa',
        complemento: 'casa',
        cep:'3546000'
       
    }



]

export const useProductAdressReducer=(state:AddressType[] ,action:ActionTypeGeral)=>{

    switch(action.type){
        case 'setAddress':{
            let addressList=[...state]
            let addressDefault=addressList.find(item=>item.state === true)
            return state
        }
    }


    return state



    return state
}