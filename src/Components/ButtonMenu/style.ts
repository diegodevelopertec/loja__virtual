import styled from "styled-components";
import { ThemeStyle } from "../../styled";



type Props={
    bgColor?:string,
    bgColorActive:boolean,
    mv:string,
    mh:string,
    radiusState?:boolean,
   
   
}

export const ContainerButtonMenu=styled.a<Props>`
   
    color:${ThemeStyle.bgTheme};
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    padding:10px;
    height: 80px;
    width: 80px;
    text-decoration:none;
    margin: ${props=>props.mv && props.mh ? `${props.mv}px ${props.mh}px` : '10px 20'};
    border-radius ${props=>props.radiusState === true ? '100%' : 'none'};
    background:${props=>props.bgColorActive === true ?  `${ThemeStyle.bgActiveIconMenu}` : props.bgColor  };
    &:hover{
        cursor:pointer;
        background:${props=>props.bgColorActive === true ? `${props.bgColorActive}`:`${ThemeStyle.bgHoverIcon}`  };
    }
    @media screen and (max-width:950px){
        padding:10px;
        height:70px;
        width: 70px;
    }
    @media screen and (max-width:280px){
        padding:26px;
        height:50px;
        width: 50px;
        font-size:1rem;
    }
`

export const ButtonIcon=styled.img`
    height: 40px;
    width: 40px;
    @media screen and (max-width:600px){
     min-height: 15px;
     height:25px;
     width:23px;
     min-width: 23px;
   
    }
`

export const TextButton=styled.span`
    font-size:12px;
    color:${ThemeStyle.bgAppSystem};
   
    @media screen and (max-width:920px){
        display: flex;
    }
`