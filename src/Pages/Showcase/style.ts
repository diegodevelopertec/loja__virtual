import styled from "styled-components";


export const Container=styled.div`
    width: 100%;
    opacity: 1;
    font-size:20px;
    overflow-x:hidden;
   @media screen and (max-width:950px){
    padding-bottom:50px;
   }
`


export const ContainerBanner=styled.div`
    display:flex;
    justify-content:center;
  
  @media screen and (max-width:950px){
    width: 100vw;
    height: 400px;
  }
`
export const CategorySectionProducts=styled.div`
    margin: 20px 0 0 ;
    font-size:18px;
    color:#5a5b5c;
    font-weight:bold;
    background:#edeceb;
    flex-direction:column;
    display: flex;
    align-items:center;

    .category-title{
       padding-top:15px;
        display: flex;
        span{
            margin-left:10px;
            text-decoration:underline;
            color: #aaa;
        }
    }
   .cx-btn-icons{
        display: flex;
        margin: 20px 0 0px 80px;
       
    }
    padding: 20px 10px;

    @media screen and (max-width:950px){
        text-align:center;
        .cx-btn-icons{
            justify-content:center;
            margin: 0;
        }
        .category-title{
          justify-content:center;
         }
}
`


export const ShowcaseProduct=styled.div`
    display: grid ;
    grid-template-columns:repeat(4,1fr);
    gap:10px;
    transition: all ease 0.2;
    padding-bottom:150px;
    padding: 30px 10px;
    padding-bottom:90px;
    background:#edeceb;
    @media screen and (max-width:920px){
      grid-template-columns:repeat(2,1fr);
      padding-bottom:100px;
    }
`

export const ContainerModal=styled.div`
    left:0;
    right: 0;
    bottom: 0;
    top: 0;
    position: absolute;
    background: rgba(179, 179, 179, 0.45);
    display: flex;
    justify-content:center;
    align-items:center;
    transition:ease all 0.5s;
 

`

