import * as S from './style'
import cartIcon from '../../assets/imgs/cart.png'
import  openCartIcon from '../../assets/imgs/setbaixo.png'
import CloseBadIcon from '../../assets/imgs/close.png'


import { Children, ReactNode, useState } from 'react'

type Props={
   children:ReactNode
}

export const Bad=({children}:Props)=>{
    const [displayBad,setDisplayBad]=useState(false)
    const [notification,setNotification]=useState(true)


    const clickDisplayBad=()=>{
       if(!displayBad){
           setDisplayBad(true)
           setNotification(false)
       }else{
         setDisplayBad(false)
      }
}


    
        
    


    return <S.Container displayBad={displayBad}>
        <S.BadHeader displayBad={displayBad} onClick={ !displayBad  ? clickDisplayBad : ()=> null}>
            <div className="header--text">
                <img src={cartIcon} alt="" /><span>compras[0]</span>
            </div>
            <div  onClick={clickDisplayBad}  className='close--bad'>
             {displayBad ? <img src={CloseBadIcon}  alt="" /> : <img className='open-icon' src={openCartIcon}  alt="" />} 
             
            </div>
            <S.NotificationBad displayBad={notification}>  2 </S.NotificationBad >
        </S.BadHeader>
        <S.BadBody displayBad={displayBad}>
             <>
             {children}
             </>
        </S.BadBody>
        
    </S.Container>



}