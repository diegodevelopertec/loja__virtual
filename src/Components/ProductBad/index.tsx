import * as S from './style'
import { dataSapatos } from '../../data/Product'
import { Product } from '../../Types/Products'
import { useState } from 'react'

type Props={
    data:Product
}



export const ProductBad=()=>{
    const [qdtProduct,setQdtProduct]=useState(dataSapatos[0].qdt)
    const [priceProduct,setPriceProduct]=useState(dataSapatos[0].price)


   const  actionsBadCard={
        add:()=>{
           setPriceProduct(prev=>prev + dataSapatos[0].price)
           setQdtProduct(qdtProduct +1)
        },
        minus:()=>{
            setPriceProduct(prev=>prev - dataSapatos[0].price)
            setQdtProduct(qdtProduct -1)
        }
    }

   
  


    return <S.Container>
        <div className="area-left">
            <div className='area--image'>
                <img src={dataSapatos[0].imageProduct} alt="" />
            </div>
            <div className="area-text">
                <span className='name'>
                    {dataSapatos[0].name}
                </span>
                <span className='price'>
                    R$ {priceProduct.toFixed(2)}
                </span>
            </div>
        </div>
        <div className="area-right">
            <div className="counter">
                <button className="btn-minus" onClick={actionsBadCard.minus}> - </button>
                <div className="cx-qdt"> {qdtProduct} </div>
                <button className="btn-add" onClick={actionsBadCard.add}>  + </button>
            </div>
        </div>
    </S.Container>
}