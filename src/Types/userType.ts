import { AddressType } from "./AdressType"

export type UserType={
    name:string,
    photoUser?:string,
    email:string,
    password:string,
    token:string
    address:AddressType[],


}