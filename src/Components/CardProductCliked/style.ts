import styled from "styled-components";
import { ThemeStyle } from "../../styled";


export const Container=styled.div`
    display: flex;
    width:740px;
    height: 500px;
    background-color:${ThemeStyle.bgAppSystem};
    box-shadow:0 0 5px #aaa;
    border-radius:6px;
  

   @media screen and (max-width:600px){
        position: absolute;
        top:0;
        left:0;
        bottom: 0;
        right:0;
        width: 100vw;
        height: 100vh;
        flex-direction:column;
        align-items:center;
        overflow-x:none;
        border-radius:0;
        margin: 0;
       
   }
 
`

export const ContainerImage=styled.div`
    width:35%;
    background: ${ThemeStyle.bgTheme};
    display: flex;
    justify-content:center;
    align-items:center;
    border-top-left-radius:6px;
    border-bottom-left-radius:6px;
    img{
        width: 180px;
        height: 180px;
       
    }
 
        @media screen and (max-width:600px){
            width: 100%;
            height: 250px;
            border-radius:0;
            padding-top:12px;
            img{
                
              
            }
        }
`

export const ContainerData=styled.div`
    display:flex.
    flex-direction:column;
    flex:1;
    padding: 0 5px;
   
     p{ margin: 12px 0;}
    .data-top{
        margin: 15px 0;
        padding: 0 5px;
        .cx-name{
            .name{
                margin-right:5px;
                font-weight:bold;
            }
            .category{ 
                color:${ThemeStyle.colorIngredientsCategory};
            }
            padding: 20px 0;
            display: flex;
            justify-content:center;
        
        }
    
        .ingredientes{
            font-size:1rem;
            color:${ThemeStyle.colorIngredientsCategory};
            word-break:break-all;
            text-align:justify;
        }
        .cx-price{
            padding: 12px 0;
            color:${ThemeStyle.bgTheme};
            font-size:2rem;
        }

    }

    .data-bottom{
        font-size:14px;
        .container-btn-add{
                display: flex;
                justify-content:center;
                margin:15px 0;
                font-size:2em;
                div{
                    height: 50px;
                    width: 50px;
                    display: flex;
                    justify-content:center;
                    align-items:center;
                    background: white;
                    font-size:14px;
                }
                button{
                    height: 50px;
                    width: 70px;
                    background:${ThemeStyle.bgTheme};
                    color: white;
                    border:0;
                    font-size:18px;
                    &:hover{
                        cursor: pointer;
                    }
                }
                .btn-minus{
                    border-top-left-radius:25px;
                    border-bottom-left-radius:25px;
                }
                .btn-add{
                    border-top-right-radius:25px;
                    border-bottom-right-radius:25px;
                }
            }

            .cx-buttons{
                margin: 20px 0;
                display: flex;
                justify-content:center;
                align-items:center;
            
                button{
                    padding: 17px 5px;
                    display: flex;
                    justify-content:center;
                    align-items:center;
                    border: 2px solid transparent;
                    color:#FFFF;
                    border-radius:6px;
                    font-size:13px;
                    height: 50px;
                    width:160px;
                    &:hover{
                        cursor:pointer;
                    }
                }
            .btn-save{
                
                background:${ThemeStyle.bgTheme};
                &:hover{
                color:  #485161;
                border: 2px solid  #485161;
                background: transparent;
                }
            }
            .btn-cancel{
                
                background:#de473c;
                margin-right:12px;
              
                &:hover{
                    border: 2px solid  #de473c;
                    color:  #de473c;
                    background: transparent;
                }
            }
            
            
        }

    }

  

    @media screen and (max-width:600px){
        padding: 10px;

            .cx-qdt{
                    align-items:center;
                    text-align:center;
                    p{color: #374969;}
            }
            .cx-price{
                display: family;
                justify-content:center;    
            }
            .price-modal{
                text-align:center;
                margin: 20px 0;
                background-color: #79807b;
                padding: 12px 5px;
                border-radius:5px;
                width:70vw;
            }
     
    }

    @media screen and (max-width:300px){
        padding: 12px;
        p{
            text-align:center;
        font-size:12px;
        }

    }



`