import styled from "styled-components";

type Props={
    bgColor?:string,
    bgColorActive:boolean,
    mv:string,
    mh:string,
    radiusState?:boolean
}

export const ContainerButtonMenu=styled.a<Props>`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    padding:6px;
    height: 60px;
    width: 60px;
    text-decoration:none;
    margin: ${props=>props.mv && props.mh ? `${props.mv}px ${props.mh}px` : '10px 20'};
   border-radius ${props=>props.radiusState === true ? '100%' : 'none'};
    background:${props=>props.bgColorActive === true ? '#485161' :  props.bgColor };
    &:hover{
        cursor:pointer;
        background:${props=>props.bgColorActive === true ? '#d4ae3bc' :  '#485161' };
    }
`

export const ButtonIcon=styled.img`
    height: 40px;
    width: 40px;
    @media screen and (max-width:600px){
     height: 33px;
     width: 33px;
    }
`

export const TextButton=styled.span`
    display: none;
    color:#e8e8e8;
   
    @media screen and (max-width:920px){
        display: flex;
    }
`