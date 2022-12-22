import styled from "styled-components";
import { ThemeStyle } from "../../styled";

export const Container=styled.div`
    display: flex;
    justify-content:space-between;
    padding:10px 5px;
    font-size:13px;
    width: 100%;
    border: 2px solid ${ThemeStyle.bgActiveIconMenu};
    border-radius:5px;
    margin: 8px 0;
    .area--image{
        margin-right:10px;
        img{
            width: 100%;
        }
    }
    .area-left{
    display: flex;
      img{
        height:30px;
        width:30px;

      }
      .price{
        color:black;
        font-weight:bold;
      }
      .area-text{
        display: flex;
        flex-direction:column;
        align-content:center;
            .name{
                font-weight:bold;
            }
      }
  }

  .area-right{
    .counter{
        display: flex;
        
        button{
            padding: 10px;
            border: none;
            display:flex;
            justify-content:center;
            width: 30px;
        }
        .btn-minus{
            border-top-left-radius: 25px;
            border-bottom-left-radius: 25px;

        }
        .btn-add{
            border-top-right-radius: 25px;
            border-bottom-right-radius: 25px;
        }
        .cx-qdt{
            display:flex;
            justify-content:center;
            align-items:center;
            border: none;
            padding:10px;
            background: white;
            color: orange;
            width: 30px;
        }
    }
  }


`