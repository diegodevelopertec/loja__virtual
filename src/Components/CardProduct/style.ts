import styled from "styled-components";



export const Container=styled.div`
  
    background-color: #e3e8e4;
    box-shadow: 0 0 7px #aaa;
    margin:12px 5px;
    border-radius:5px;
    @media screen and (max-width:600px){
    
        margin: 5px;
        font-size:10px;
       
        
    }
   
`

export const  ContainerImage=styled.div`
    background: #3b4161;
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
                    color: #aaa;
                    padding: 5px 0;
                    text-transform: capitalize;
                }
                h3{
                    font-size:1rem;
                    color: black;
                }
                p{
                    color: #aaa;
                    margin: 10px 0;
                    font-size:1rem;
                }
                .price{
                    color: #485161;
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
            background: #3b4161 ;
            color: white;
            border: 2px solid #3b4161;
            border-radius:5px;
            &:hover{
                cursor:pointer;
                background:transparent;
                color: #3b4161;
                border: 2px solid  #485161e;
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