import { useContextApp } from "./useContextApp"


export const useUserData=()=>{
    const {state,dispatch}=useContextApp()
    const userData=state.user
    return {
        userData,dispatch
    }

}