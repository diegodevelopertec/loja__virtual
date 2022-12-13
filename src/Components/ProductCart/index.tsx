import * as S from './style'
import { dataBlouses} from '../../data/Product'
import { Product } from '../../Types/Products'
import { useState } from 'react'

type Props={
    data:Product
}



export const ProductCart=()=>{
    const [qdtProduct,setQdtProduct]=useState(dataBlouses[0].qdt)
    const [priceProduct,setPriceProduct]=useState(dataBlouses[0].price)


   const  actionsCartCard={
        add:()=>{
           setPriceProduct(prev=>prev + dataBlouses[0].price)
           setQdtProduct(qdtProduct +1)
        },
        minus:()=>{
            setPriceProduct(prev=>prev - dataBlouses[0].price)
            setQdtProduct(qdtProduct -1)
        }
    }

   
  


    return <S.Container>
        <div className="area-left">
            <div className='area--image'>
                <img src={dataBlouses[0].imageProduct} alt="" />
            </div>
            <div className="area-text">
                <span className='name'>
                    {dataBlouses[0].name}
                </span>
                <span className='price'>
                    R$ {priceProduct.toFixed(2)}
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