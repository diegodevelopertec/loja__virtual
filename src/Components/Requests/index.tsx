import { useState } from 'react'
import * as S from './style'
import { useContext } from 'react'
import { ProductRequest } from '../ProductRequest'
import { Product } from '../../Types/Products'
import { useContextApp } from '../../hooks/useContextApp'
import { PurchasingDataType } from '../../Types/PurchansingType'

type Props={
    dataRequests:PurchasingDataType
}
export const Requests=({dataRequests}:Props)=>{
    const {state,dispatch}=useContextApp()
    const [openBody,setOnBody]=useState(false)
    let [purchansing]=state.purchansing
    let address=state.address.find(item=>item.state === true)

    const setBodyRequest=()=>{
        !openBody  ? setOnBody(true) : setOnBody(false)
    }

    return <S.Container>
        <S.RequestHeader>
           <div>
              Pedido feito em :data
           </div>
           <div>
                estado:entregue
           </div>
           <div className="cx-btns">
                <button className="abrir">apagar</button>
                <button className="abrir" onClick={setBodyRequest}>{!openBody ? 'detalhes' : 'fechar'}</button>
           </div>
        </S.RequestHeader>
        <S.RequestBody openBody={openBody}>
             <div className="cx-produtos">
             {purchansing.products.map((item,index)=>(
                           <ProductRequest data={item} key={index} />
                ))}
           </div>  
           
        </S.RequestBody>
    
    
    </S.Container>

}