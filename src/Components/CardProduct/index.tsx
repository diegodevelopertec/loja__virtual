import { Product } from '../../Types/Products'
import * as S from './style'


type Props={
    data?:Product,
    clikedStartModal?:()=>void
    onClick:(dataCard:any)=>void
}
export const CardProduct=({data,clikedStartModal,onClick}:Props)=>{

const ClikeData=()=>onClick(data)
   
    return <S.Container >
        <S.ContainerImage>
            <img src={data?.imageDefault}/>
        </S.ContainerImage>
        <S.DataProduct>
            <div className='info-product'>
             
                <h4>{data?.name} </h4>
                <p className='details-text'>
                  {data?.detailsProduct}  
                </p>
                <p className="price">
                    R$ {data?.price.toFixed(2)}
                </p>
            </div>
            <div className="cx-btn-product">
               <button onClick={ClikeData}>comprar</button>
            </div>
        </S.DataProduct>
    </S.Container>
}