import * as S from './style'
import { Link } from 'react-router-dom'
import LojaIcon from '../../assets/imgs/logo.png'
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useContextApp } from '../../hooks/useContextApp';
import { useUserData } from '../../hooks/userUserData';

type InputTypes={
    email:string,
    password:string
}

type Props={
    closeModalClick:()=>void
}


export const LoginModal=({closeModalClick}:Props)=>{

  
    const {userData,dispatch}=useUserData()

  

    const schema=yup.object({
        email:yup.string().email().required(),
        password:yup.string().required(),
    }).required()
    
    
    const {register,handleSubmit,formState:{errors}}=useForm<InputTypes>({
        resolver:yupResolver(schema)
    })
    
    
    
    const submitForm=(data:InputTypes)=>{
        console.log(data);
        dispatch({
            type:'loginApp',
           payload:{
            data,
            email:data.email,
            password:data.password
           }
        })
        closeModalClick()
    }
     


    

    return <S.Container  >
        <div className="text">
           <div className='header-container'>
                <button onClick={closeModalClick}>voltar</button>
           </div>
           <div className="cx-login">
               <span className='cx-logo'><img src={LojaIcon} alt="" /></span>
           </div>
            <p>Faça login na sua conta para continuar sua compra :</p>
        </div>
        <div className="form">
            <form action=""  onSubmit={handleSubmit(submitForm)}>
                <div>
                     <input type="email" {...register('email')} placeholder='Digite seu email' />
                     <p className='erros-form' >{errors.email?.message}</p>
                </div>
                <div>
                    <input type="password" {...register('password')}   placeholder='Digite sua senha'/>
                    <p className='erros-form' >{errors.password?.message}</p>
                </div>
                <div>
                    <input type="submit"  value={'Entrar'}/>
                </div>
                <div className='create-account'>
                    <p>Não tenho uma conta?<Link to='/register'>clique aqui</Link></p>
                </div>
            </form>
        </div>
    </S.Container>
}