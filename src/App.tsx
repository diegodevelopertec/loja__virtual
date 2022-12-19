import * as S from './styled'
import { useState } from 'react'
import { Routes } from './Routes'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonMenu } from './Components/ButtonMenu'
import UserIcon from '.././src/assets/imgs/user.png'
import LojaIcon from '.././src/assets/imgs/lojaicon.png'
import LogoIcon from '.././src/assets/imgs/logo.png'
import FaceIcon from '.././src/assets/imgs/face.png'
import InstaIcon from '.././src/assets/imgs/insta.png'
import TikTokIcon from '.././src/assets/imgs/tiktok.png'
import ComprasIcon from '.././src/assets/imgs/comprasIcon.png'

import { useNavigate } from 'react-router-dom';

const App=()=>{
  
  const [viewHome,setViewHome]=useState(true)
  const [viewAccount,setViewAccount]=useState(false)
  const [viewDelivery,setViewDelivery]=useState(false)
  const navigate=useNavigate()

  const ClickViewHome=(e:any)=>{
    e.preventDefault()
    navigate('/')
    setViewHome(true)
    setViewAccount(false)
    setViewDelivery(false)
  
  }
  const ClickViewDelivery=(e:any)=>{
    e.preventDefault()
    navigate('/compras')
    setViewDelivery(true)
    setViewHome(false)
    setViewAccount(false)
   
  }
  
  const ClickViewAccount=(e:any)=>{
    e.preventDefault()
    navigate('/account')
    setViewAccount(true)
    setViewHome(false)
    setViewDelivery(false)
  }

  return <S.Body>
        <S.LeftContent>
            <S.Menu>
             
                   <ButtonMenu link='/'
                  onClick={ClickViewHome} 
                  iconActive={viewHome} 
                  src={LojaIcon}  
                  marginhorizontal='10' 
                  text='inicio'
                  marginvertical='10' />
              <ButtonMenu link='/compras' 
                  onClick={ClickViewDelivery}  
                  iconActive={viewDelivery} 
                  src={ComprasIcon} 
                  marginhorizontal='10' 
                  marginvertical='10' 
                  text='compras'/>
              <ButtonMenu  
                 onClick={ClickViewAccount} 
                 iconActive={viewAccount} 
                 src={UserIcon} 
                 link='/account'
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
        <ToastContainer />
  </S.Body>
}

export default App