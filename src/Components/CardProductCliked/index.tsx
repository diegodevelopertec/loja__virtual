import * as S from './style'
import Bg from '../../assets/imgs/bg1.png'
import { useEffect, useState } from 'react'
import { Product } from '../../Types/Products';
import { useContextApp } from '../../hooks/useContextApp';

type Props={
    funcOffModal:()=>void;
    data:Product,
   
   
    
}

export const CardCliked=({funcOffModal,data}:Props)=>{
    const {state,dispatch}=useContextApp()
    const [qdtProduct,setQdtProduct]=useState(1)
    const [priceModal,setPriceModal]=useState(data.price)

    useEffect(()=>{
        setQdtProduct(1)
    },[data])
   

const actionsModal={
    addQdtProduct:()=>{
        setQdtProduct(prev=>prev+1) 
        setPriceModal(priceActual=>priceActual + data.price)  
    }
    ,
    minusQdtProduct:()=>{
        if(qdtProduct > 1){
            setQdtProduct(prev=>prev-1)  
           setPriceModal(priceActual=>priceActual - data.price) 
        }
    }
}


 
const  clikedSetDataCart=()=>{
    let newdata={
        ...data,
        qdt:qdtProduct,
        price:priceModal
    }
    dispatch({
        type:'addProduct',
        payload:{
            data:newdata,
            qdt:newdata.qdt,
            price:newdata.price
        }
    })
    
    funcOffModal()
}




    return <S.Container>
        <S.ContainerImage>
           <img src={data.imageDefault} alt="" />
        </S.ContainerImage>
        <S.ContainerData>
            <div className="data-top">
                <div className="cx-name">
                   <span className='name'> {data.name} </span><small className="category">{data.category}</small>
                </div>
                <div className="ingredientes">
                   <p> {data.detailsProduct}</p>
                </div>
                <div className="cx-price">
                    <div className="price-modal">
                        R$ {priceModal.toFixed(2)}
                    </div>
                </div>
            </div>
            <div className="data-bottom">
               <div className="cx-qdt">
                    <p>Selecione uma quantidade desejada:</p>
                    <div className='area-btn-qdt'>
                        <div className='container-btn-add'>
                            <button className='btn-minus' onClick={actionsModal.minusQdtProduct}> - </button>
                            <div className='btn-qdt'> {qdtProduct} </div>
                            <button className='btn-add' onClick={actionsModal.addQdtProduct}> + </button>
                        </div>
                    </div>
                    <p>Você está adicionando {qdtProduct} {qdtProduct === 1 ? data.category.replace('s','') : data.category}</p>
               </div>
               <div className="cx-buttons">
                    <button className='btn-cancel' onClick={funcOffModal}>voltar</button>
                    <button className='btn-save' onClick={clikedSetDataCart}>adicionar ao carrinho</button>
               </div>
            </div>

        </S.ContainerData>
    </S.Container>
}