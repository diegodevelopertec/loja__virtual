import styled from "styled-components";
import { ThemeStyle } from "../../styled";
type Props={
  displayCart:boolean,
 
}
export const Container=styled.div<Props>`
    
    background:${ThemeStyle.bgTheme};
    position: absolute;
    color:white;
    bottom: 0;
    right:10px;
    width: 460px;
    padding:10px;
    box-shadow: 0 0 5px #aaa;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    margin-top:12px;
    transition:all ease 0.13;
    overflow: none;
   
    @media screen and (max-width:920px){
   
         position:${props=>props.displayCart === true ? 'absolute' : 'fixed'};
         height:${props=>props.displayCart === true ? '100vh' : '60px'};
         display:${props=>props.displayCart=== true ? 'block' : 'flex'};
         justify-content:center;
         align-items:center;
         width:${props=>props.displayCart === true ? '100vw' : '60px'};
         margin:${props=>props.displayCart === true ? '0' : '0px'};
         margin-bottom:${props=>props.displayCart === true ? '0' : '130px'};
         top:${props=>props.displayCart === true ? '0' : '76vh'};
         bottom:${props=>props.displayCart=== true ? '0' : '150px'};
         right:${props=>props.displayCart === true ? '0' : '8px'};
         border-radius:${props=>props.displayCart === true ? 'noneh' : '60px'};

         
        
      
    }
`

export const CartHeader=styled.div<Props>`
  display: flex;
  justify-content:space-between;
  align-items:center;
  font-size:14px;
  padding: 10px 0;

  .header--text{
      display: flex;
      justify-content:center;
      align-items:center;
  }
  .close--cart{
      display:${props=>props.displayCart=== false ? 'flex' : 'flex'};
  }
  img{
      height: 20px;
      width:20px;
      margin-right:5px;
  }

    @media screen and (max-width:920px){
      .header--text span{
        display: ${props=>props.displayCart === true ? 'flex' : 'none'};
      }
      .open-icon{
        display: none;
      }
    }
`
export const CartBody=styled.div<Props>`
  display:${props=>props.displayCart ? 'flex' : 'none'};
  flex-direction:column;
  margin: 20px 0;
  height:500px;
    .area-listproduct{
      height: 250px;
      padding: 10px 5px;
      overflow-y:auto;
      margin-bottom:12px;
      ::-webkit-scrollbar{
        width: 2px;
      }
    
    }
    .area-address{
      font-size:13px;
      height: 80px;
      background: red;
      padding: 10px 5px;
    }
  .area-final-cupom{
        flex:1;
        display: flex;
        flex-direction:column;
        padding: 12px 20px;
          input,button{
            padding: 12px;
            border-radius:5px;
          }
              button{
                margin: 12px 0;
                background: ${ThemeStyle.bgActiveIconMenu};
                border: none;
                color: ${ThemeStyle.bgAppSystem};
                font-size:14px;
                text-transform:uppercase;
                  &:hover{
                    cursor:pointer;
                    background: green;
                    
                  }
              }
              .data-item{
                  font-size:13px;
                  margin: 5px 0;
                  display: flex;
                  justify-content:space-between;
                }
  }
 

  @media screen and (max-width:600px){
    height:100vh;
    .area-listproducts{
      height: 80vh;
    }
  
  }
 
  }
`
export const NotificationCart=styled.div<Props>`
    position: absolute;
    right:2px;
    background:red;
    color:white;
    height: 20px;
    border-radius:100%;
    width: 20px;
    font-size:12px;
    display:${props=>props.displayCart ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
    @media screen and (max-width:920px){
        top:1px;
    }
`
