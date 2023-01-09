import { dataUser } from "../../Pages/AccountPage/style"
import { ActionTypeGeral } from "../../Types/TypeAction"
import { UserType } from "../../Types/userType"



export const initialStateUser=null

export const userReducer=(state:UserType | null  ,action:ActionTypeGeral)=>{

    switch(action.type){
        case 'createAccount' :{
            let dataUser={...state}
            dataUser={
                name:action.payload?.name,
                photoUser: action.payload?.profilePhotoUser,
                email: action.payload?.email,
                password: action.payload?.password,
                token:action.payload?.tokenUser,
                address:action.payload?.address

            }
            return dataUser
        }
        case 'loginApp':{
            let dataState={...state}
            let email=action.payload?.email
            let password=action.payload?.password
            //let token=localStorage.getItem('token')
            if(email === dataState.email && password === dataState.password){
                return true
            }else{
                'usuário não existe'
                return false
            }
           
        }
       
       
       
    }






    return state




}