import * as S from './style'
import cartIcon from '../../assets/imgs/cart.png'
import  openCartIcon from '../../assets/imgs/setbaixo.png'
import CloseCartIcon from '../../assets/imgs/close.png'
import { useContextApp } from '../../hooks/useContextApp'
import { Navigate, useNavigate } from 'react-router-dom'
import {  ReactNode, useState } from 'react'
import { ProductCart } from '../ProductCart'
import { Product } from '../../Types/Products'

type Props={
    stateModal:()=>void

   
}

export const Cart=({stateModal}:Props)=>{
    const [displayCart,setDisplayCart]=useState(false)
    const [notification,setNotification]=useState(false)
    const {state,dispatch}=useContextApp()
    const redirect=useNavigate()

    const clickDisplayCart=()=>{
       if(!displayCart){
           setDisplayCart(true)
           setNotification(false)
       }else{
         setDisplayCart(false)
      }
    }


    const finalizeCompra=()=>{
        const user=state.user

         if(user === null){
          stateModal()
        }else{
           redirect('/compras')
        }
     



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
                <button onClick={finalizeCompra}>finalizar compra</button>
                </div>
           
           </>  : <div className='error-bad'>Nenhum pedido adicionado ainda </div>
}
            
        </S.CartBody>
        
    </S.Container>



}