import * as S from './style'
import { dataBlouses} from '../../data/Product'
import { Product } from '../../Types/Products'
import { useState,useEffect } from 'react'
import { useContextApp } from '../../hooks/useContextApp'

type Props={
    data:Product
}



export const ProductCart=({data}:Props)=>{
    const [qdtProduct,setQdtProduct]=useState(data.qdt)
    const [priceProduct,setPriceProduct]=useState(data.price)
    const {state,dispatch}=useContextApp()

    
    useEffect(()=>{
        setQdtProduct(data.qdt)
        setPriceProduct(data.price)
},[state.products])

   const  actionsCartCard={
        add:()=>{
           setPriceProduct(prev=>prev + data.price)
           setQdtProduct(qdtProduct +1)
        },
        minus:()=>{
            setPriceProduct(prev=>prev - data.price)
            setQdtProduct(qdtProduct -1)
        }
    }

   
  


    return <S.Container>
        <div className="area-left">
            <div className='area--image'>
                <img src={data.imageDefault} alt="" />
            </div>
            <div className="area-text">
                <span className='name'>
                    {data.name}
                </span>
                <span className='price'>
                    R$ {data.price}
                </span>
            </div>
        </div>
        <div className="area-right">
            <div className="counter">
                <button className="btn-minus" onClick={actionsCartCard.minus}> - </button>
                <div className="cx-qdt"> {qdtProduct} </div>
                <button className="btn-add" onClick={actionsCartCard.add}>  + </button>
            </div>
        </div>
    </S.Container>
}