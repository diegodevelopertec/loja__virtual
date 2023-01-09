import * as S from './style'
import cartIcon from '../../assets/imgs/cart.png'
import  openCartIcon from '../../assets/imgs/setbaixo.png'
import CloseCartIcon from '../../assets/imgs/close.png'
import { useContextApp } from '../../hooks/useContextApp'
import { Navigate, useNavigate } from 'react-router-dom'
import {  ReactNode, useState,useEffect } from 'react'
import { ProductCart } from '../ProductCart'
import { Product } from '../../Types/Products'

type Props={
    stateModal:()=>void
}

export const Cart=({stateModal}:Props)=>{
    const [displayCart,setDisplayCart]=useState(false)
    const [notification,setNotification]=useState(false)
    const {state,dispatch}=useContextApp()
    const [total,setTotalValues]=useState(0)
    const [products,setProducts]=useState(state.products)
    const redirect=useNavigate()

    
    useEffect(()=>{
        setProducts(state.products)
        let total=state.products.reduce((prevPrice:any,nextPrice:Product)=>prevPrice + nextPrice.price , 0 )  
        setTotalValues(total)
    },[state.products])

    const clickDisplayCart=()=>{
       if(!displayCart){
           setDisplayCart(true)
           setNotification(false)
       }else{
         setDisplayCart(false)
      }
    }


    const setDatatoCart=()=>{
        //const user=state.user
       
        
           redirect('/compras')
        
     



    }
        


  
    return <S.Container displayCart={displayCart}>
        <S.CartHeader displayCart={displayCart} onClick={ !displayCart  ? clickDisplayCart : ()=> null}>
            <div className="header--text">
                <img src={cartIcon} alt="" /><span>Sacola[<span className='qdt-sacola'>{state.products.length}</span>]</span>
            </div>
            <div  onClick={clickDisplayCart}  className='close--bad'>
             {displayCart ? <img src={CloseCartIcon}  alt="" /> : <img className='open-icon' src={openCartIcon}  alt="" />} 
             
            </div>
            <S.NotificationCart displayCart={notification}>  2 </S.NotificationCart >
        </S.CartHeader>
        <S.CartBody displayCart={displayCart}>
             
           {state.products.length > 0  ? <> 
               <div className="area-listproduct">
                  {state.products.length  &&  state.products.map((item,index)=>(
                         <ProductCart key={index} data={item} />)) 
                         
                 }
             </div>
                <div className='area-address'>
                    
                </div>
                <div className="area-final-cupom">
                    <input type="text" />
                    <div className="data-compra">
                        <div className="data-item">
                            <span>Desconto</span>
                            <span>$ 00</span>
                        </div>
                        <div className="data-item">
                            <span>Taxa de Entrega</span>
                            <span>R$ 00</span>
                        </div>
                        <div className="data-item">
                            <span>Total</span>
                            <span>R${}</span>
                        </div>
                    </div>
                <button onClick={setDatatoCart}>finalizar compra</button>
                </div>
           
           </>  : <div className='error-bad'>Nenhum pedido adicionado ainda </div>
}
            
        </S.CartBody>
        
    </S.Container>



}