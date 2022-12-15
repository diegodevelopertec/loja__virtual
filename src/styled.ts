import styled from 'styled-components'
import BgImage from '.././src/assets/imgs/bg.jpg'

export const ThemeStyle={
    bgTheme:'#263852',
    bgAppSystem:'#edeceb',
    bgCardProductBottom:'#2f302f' ,
    colorTitleCard: 'black',
    colorIngredientsCategory:' #aaa',
    colorTextCard: '',
    bgHoverIcon: '#455163',
    bgActiveIconMenu:'#564061'

}


export const Body=styled.div`
    display:flex;
    height:100vh;
    width: 100vw;
    overflow:hidden;
    background:${ThemeStyle.bgAppSystem};

`

export const LeftContent=styled.div`
    background:${ThemeStyle.bgTheme};
    width: 10%;
    display: flex;
    justify-content:center;
    align-items:center;
   
    @media screen  and (max-width:950px){
     position:fixed;
     top: 90;
     bottom:0;
     width: 100%;
     
     box-shadow:0 0 5px #aaa;
     border-top-left-radius:20px;
     border-top-right-radius:20px;
     margin-bottom:0;

   }
 
`

export const HeaderApp=styled.header`
    display: flex;
    justify-content:center;
    margin: 10px;
    background: initial;
    .text-logo{
        color: #485161;
    }
        img{
            height: 90px;
            width: 90px;
            border-radius:100%;
    }


`
export const CardLoja=styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    width: 95%;
    margin:30px 15px;
    min-height: 100px;
    border-radius:10px;
    color:#485161;
    .logo{
        font-size:2rem;
        color: white;
        display: flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
           
    .icons-rede{
        display:flex;
        img{
                margin-right:4px;
                height: 30px;
                width: 30px;
            }
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
    background-size: contains ;
    background-color: #625B5B54A;
    overflow-y:auto;
    @media screen  and (max-width:950px){
     flex-direction:column;
   }
    
`
