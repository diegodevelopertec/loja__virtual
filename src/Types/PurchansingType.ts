import { Product } from "./Products"
import { AddressType } from "./AdressType"


export type PurchasingDataType={
    id:string,
    state:'pendende' | 'entregue',
    products:Product[]  ,
    address:AddressType,
    totatValueProduct:number
}
export type PurchasingType=PurchasingDataType[]