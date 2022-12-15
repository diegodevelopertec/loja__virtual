import styled from "styled-components";
import { ThemeStyle } from "../../styled";


export const Container=styled.div`
  
    background-color:${ThemeStyle.bgAppSystem};
    box-shadow: 0 0 7px #aaa;
    margin:12px 5px;
    border-radius:5px;
    @media screen and (max-width:600px){
    
        margin: 5px;
        font-size:10px;
       
        
    }
   
`

export const  ContainerImage=styled.div`
    background: ${ThemeStyle.bgTheme};
    height: 190px;
    display: flex;
    padding: 12px 0;
    justify-content:center;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    width:100%;
    padding-top:12px;
  
    img{
        max-width:130px;
        height:150px;
        @media screen and (max-width:600px){
        width: 70px;
        height: 70px;
    }
    }

    @media screen and (max-width:600px){
      height: 70px;
     
    }


`

export const DataProduct=styled.div`

    display:flex;
    padding: 18px 10px;
    margin-top:12px;
    flex-direction:column;
    
        .info-product{
            margin: 15px 0;
           
            
            .category--name:{
                    color: ${ThemeStyle.colorIngredientsCategory};
                    padding: 5px 0;
                    text-transform: capitalize;
                }
                h3{
                    font-size:1rem;
                    color: black;
                }
                p{
                    color: ${ThemeStyle.colorIngredientsCategory};
                    margin: 10px 0;
                    font-size:1rem;
                }
                .price{
                    color: ${ThemeStyle.bgTheme};
                    font-family:Arial;
                    font-weight:bold;
                    width: 100px;
                }
                .details-text{
                    word-break:break-all;
                    font-size:13px;
                    padding: 5px 0;
                }

                @media screen and (max-width:600px){
                        font-size:1rem;
                        flex-wrap:wrap;
                        .ingredientes-text{
                            display:none;
                        }
                       
                       

        }
    }

    .cx-btn-product{
        display:flex;
        justify-content:center;
        align-items:center;
        padding: 15px 5px;
        width: 100%;
        margin: 13px 0;
      
        button{
            font-family:Arial;
            font-weight:bold;
            text-transform:uppercase;
            padding: 12px 20px;
            background-color: ${ThemeStyle.bgTheme};
            color: white;
            border: 2px solid ${ThemeStyle.bgTheme};
            border-radius:5px;
            &:hover{
                cursor:pointer;
                background:transparent;
                color:${ThemeStyle.bgTheme};
                border: 2px solid  ${ThemeStyle.bgTheme};
            }
         }
         @media screen and (max-width:600px){
              padding:0;
         }
    }

    @media screen and (max-width:600px){
      padding: 0 5px;
      width: 100%;
    }
`