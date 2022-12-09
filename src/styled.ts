import styled from 'styled-components'
import BgImage from '.././src/assets/imgs/bg.jpg'



export const Body=styled.div`
    background-color: #eee;
    display:flex;
    height:100vh;
    width: 100vw;
    overflow:hidden;
    background-color: #dadce0;


`

export const LeftContent=styled.div`
    background: #f06c0e;
    width: 10%;
    display: flex;
    justify-content:center;
    align-items:center;
   
    @media screen  and (max-width:950px){
     position:fixed;
     bottom:0;
     top: 90;
     left:0;
     right:0;
     width: 100%;
     box-shadow:0 0 5px #aaa;
   }
 
`

export const HeaderApp=styled.header`
display: flex;
justify-content:center;



`
export const CardLoja=styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    background-color: #f06c0e;
    width: 95%;
    margin:30px 15px;
    min-height: 100px;
    border-radius:10px;
    box-shadow: 0 0 5px #000;
.logo{
    font-size:2rem;
    color: white;
    display: flex;
    justify-content:center;
    align-items:center;
    img{
        height: 80px;
        width: 80px;
        margin-right:12px;
    }
}

.search-loja{
    input{
        width: 180px;
        padding:5px  20px;
    }
}

@media screen and (max-width:950px){
    flex-direction:column;
    padding: 10px 0;
}

`
export const Menu=styled.div`
@media screen and (max-width:950px){
 display: flex;

 a{
    margin:15px;
 }
}
`

export const RightContent=styled.div`
    flex: 1;
    background-image:url(${BgImage}) ;
    background-size: contains ;
    background-color: #625B5B54A;
    overflow-y:auto;
    @media screen  and (max-width:950px){
     flex-direction:column;
   }
    
`
