import * as S from './styled'
import { EventHandler, useState } from 'react'
import { Routes } from './Routes'
import { ButtonMenu } from './Components/ButtonMenu'
import BurguerImage from '.././src/assets/imgs/burguer.png'
import UserIcon from '.././src/assets/imgs/user.png'
import LojaIcon from '.././src/assets/imgs/lojaicon.png'
import MotoIcon from '.././src/assets/imgs/moto.png'
import LogoIcon from '.././src/assets/imgs/logo.png'
import FaceIcon from '.././src/assets/imgs/face.png'
import InstaIcon from '.././src/assets/imgs/insta.png'
import TikTokIcon from '.././src/assets/imgs/tiktok.png'

const App=()=>{
  
  const [viewHome,setViewHome]=useState(true)
  const [viewAccount,setViewAccount]=useState(false)
  const [viewDelivery,setViewDelivery]=useState(false)
  

  const ClickViewHome=()=>{
    setViewHome(true)
    setViewAccount(false)
    setViewDelivery(false)
  
  }
  const ClickViewDelivery=()=>{
    setViewDelivery(true)
    setViewHome(false)
    setViewAccount(false)
   
  }
  
  const ClickViewAccount=()=>{
    setViewAccount(true)
    setViewHome(false)
    setViewDelivery(false)
  }

  return <S.Body>
        <S.LeftContent>
            <S.Menu>
             
                   <ButtonMenu link='/'
                  onClick={()=>ClickViewHome} 
                  iconActive={viewHome} 
                  src={LojaIcon}  
                  marginhorizontal='10' 
                  text='inicio'
                  marginvertical='10' />
              <ButtonMenu link='/pedidos' 
                  onClick={()=>ClickViewDelivery}  
                  iconActive={viewDelivery} 
                  src={MotoIcon} 
                  marginhorizontal='10' 
                  marginvertical='10' 
                  text='pedidos'/>
              <ButtonMenu  
                 onClick={()=>ClickViewAccount} 
                 iconActive={viewAccount} 
                 src={UserIcon} 
                 link='/user'
                 marginhorizontal='10' 
                 marginvertical='10'
                 text='conta'/>
                 
            </S.Menu>
        </S.LeftContent>

        <S.RightContent>
          <S.HeaderApp>
            <S.CardLoja>
              <div className="logo">
               <div><img src={LogoIcon} alt="" /> <span className='text-logo'>Samira Modas</span></div>
              <div className="icons-rede">
               
                    <a href="" className='social-img'> <img src={FaceIcon} alt="" /></a>
                    <a href="" className='social-img'> <img src={TikTokIcon} alt="" /></a>
                    <a href="" className='social-img'> <img src={InstaIcon} alt="" /></a>
               </div>
              </div>
             
              <div className="search-loja">
                  <input type="search" name="" id="" />
              </div>
            </S.CardLoja>

          </S.HeaderApp>
          <Routes/>
  
        </S.RightContent>
  </S.Body>
}

export default App