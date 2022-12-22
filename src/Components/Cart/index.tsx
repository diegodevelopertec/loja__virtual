import * as S from './style'
import cartIcon from '../../assets/imgs/cart.png'
import  openCartIcon from '../../assets/imgs/setbaixo.png'
import CloseCartIcon from '../../assets/imgs/close.png'
import { useContext } from 'react'
import { Context } from '../../context/Context'

import {  ReactNode, useState } from 'react'
import { ProductCart } from '../ProductCart'
import { Product } from '../../Types/Products'

type Props={
   children:ReactNode,
   data:Product
}

export const Cart=()=>{
    const [displayCart,setDisplayCart]=useState(false)
    const [notification,setNotification]=useState(true)
    const {state,dispatch}=useContext(Context)

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
                <img src={cartIcon} alt="" /><span>carrinho <span>{state.products.length}</span></span>
            </div>
            <div  onClick={clickDisplayCart}  className='close--cart'>
              {displayCart ? <img src={CloseCartIcon}  alt="" /> : <img className='open-icon' src={openCartIcon}  alt="" />} 
             
            </div>
            <S.NotificationCart displayCart={notification}>  2 </S.NotificationCart >
        </S.CartHeader>
        <S.CartBody displayCart={displayCart}>
           
        {state.products.length > 0 && <> 
           <div className="area-listproduct">
                    {
                    state.products.map((item,index)=>(
                        <ProductCart key={index} data={item} />
                    )) }
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
                            <span>$ 00</span>
                        </div>
                        <div className="data-item">
                            <span>Total</span>
                            <span>$ 00</span>
                        </div>
                    </div>
                <button>finalizar compra</button>
                </div>
           
           </> 
}
            
           
          
        </S.CartBody>
        
    </S.Container>



}