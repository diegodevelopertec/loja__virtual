import * as S from './style'
import cartIcon from '../../assets/imgs/cart.png'
import  openCartIcon from '../../assets/imgs/setbaixo.png'
import CloseCartIcon from '../../assets/imgs/close.png'


import {  ReactNode, useState } from 'react'

type Props={
   children:ReactNode
}

export const Cart=({children}:Props)=>{
    const [displayCart,setDisplayCart]=useState(false)
    const [notification,setNotification]=useState(true)


    const clickDisplayCart=()=>{
       if(!displayCart){
           setDisplayCart(true)
           setNotification(false)
       }else{
         setDisplayCart(false)
      }
}


    
        
    


    return <S.Container displayCart={displayCart}>
        <S.CartHeader displayCart={displayCart} onClick={ !displayCart  ? clickDisplayCart : ()=> null}>
            <div className="header--text">
                <img src={cartIcon} alt="" /><span>carrinho</span>
            </div>
            <div  onClick={clickDisplayCart}  className='close--cart'>
             {displayCart ? <img src={CloseCartIcon}  alt="" /> : <img className='open-icon' src={openCartIcon}  alt="" />} 
             
            </div>
            <S.NotificationCart displayCart={notification}>  2 </S.NotificationCart >
        </S.CartHeader>
        <S.CartBody displayCart={displayCart}>
             <>
             {children}
             </>
        </S.CartBody>
        
    </S.Container>



}