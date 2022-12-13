import { useState,useEffect } from "react"
import * as S from './style'
import { CardProduct } from "../../Components/CardProduct"
import { Product } from "../../Types/Products"
import calcinhaIcon from '../../assets/imgs/calcinha.png'
import JeansIcon from '../../assets/imgs/jeans.png'
import sapatoIcon from '../../assets/imgs/sapatoF.png'
import camisasIcon from '../../assets/imgs/camisasF.png'
import { ButtonMenu } from "../../Components/ButtonMenu"
import { CardCliked } from "../../Components/CardProductCliked"
import { dataBlouses,dataShoes,dataShorts,dataUnderwear} from '../../data/Product'
import { Cart } from "../../Components/Cart"
import { ProductCart } from "../../Components/ProductCart"
import { ApiProduct } from "../../Api/ApiProducts"


export const Showcase=()=>{
    const [blosesProductList,setBlousesProductList]=useState<Product[] >( dataBlouses)
    const [shoesProductList,setShoesProductList]=useState<Product[]>(dataShoes)
    const [shortsProductList,setShortsProductList]=useState<Product[] >(dataShorts)
    const [undewearProductList,setUnderwear]=useState(dataUnderwear)
    const [dataProductCliked,setDataProductCliked]=useState<Product | any>()
   
    const [displayBlouses,setDisplayBlouses]=useState<boolean>(true)
    const [displayShoes,setDisplayShoes]=useState<boolean>(false)
    const [displayUndewear ,setDisplayUnderwear]=useState<boolean>(false)
    const [displayShorts,setDisplayShorts]=useState<boolean>(false)
    const [onModal,setOnModal]=useState(false)
    const [productCart,setProductCart]=useState([17])

   /* useEffect(()=>{
    const loadBurguers=async()=>{
        let dataBurguer=await ApiProduct.getProducts()
        await  setBurguerProductList(dataBurguer)
    }
        setTimeout(()=>loadBurguers(),1000)
    },[burguerProductList])*/



    const clikedOnModal=()=>setOnModal(true)
    const closeModal=()=>setOnModal(false)


    const actionDisplayBlouses=()=>{
        setDisplayShoes(false)
        setDisplayBlouses(true)
        setDisplayShorts(false)
        setDisplayUnderwear(false)
    }
    const actionDisplayShoes=()=>{
        setDisplayShoes(true)
        setDisplayBlouses(false)
        setDisplayShorts(false)
        setDisplayUnderwear(false)
    }
    const actionDisplayShorts=()=>{
        setDisplayShoes(false)
        setDisplayBlouses(false)
        setDisplayUnderwear(false)
        setDisplayShorts(true)
    }

    const actionDisplayUnderwear=()=>{
        setDisplayShoes(false)
        setDisplayBlouses(false)
        setDisplayShorts(false)
        setDisplayUnderwear(true)
    }

    const returnDataClikedProduct=(data:Product)=>{
        setDataProductCliked(data)
        clikedOnModal()
    }

    const setDataBad=()=>{
        closeModal()
    }

    const conditionCategoryTitle=()=>{
        if(displayShoes){
            return 'Calçados'
        }else if(displayBlouses){
            return 'Blusas'
        }else if(displayShorts){
            return 'Shorts'
        }else{
            return 'Peça Intima'
        }
    }

  

    return <S.Container>
    <S.CategorySectionProducts>
      <>
        <p>Selecione uma categoria :</p>
            <div className="cx-btn-icons">
                <ButtonMenu  bg='#717b8f' 
                    iconActive={displayShoes ? true : false} src={sapatoIcon} 
                    marginhorizontal='10' marginvertical='10'  
                    onClick={actionDisplayShoes}
                    radius={true}
                    text='calçados'
                />
                <ButtonMenu bg='#717b8f' 
                    iconActive={displayBlouses ? true : false} src={camisasIcon} 
                    marginhorizontal='10' 
                    marginvertical='10'  
                    onClick={actionDisplayBlouses} 
                    radius={true}
                    text='Blusas'
                />
                <ButtonMenu bg='#717b8f' 
                    iconActive={displayShorts ? true : false} src={JeansIcon} 
                    marginhorizontal='10' 
                    marginvertical='10' 
                    onClick={actionDisplayShorts} 
                    radius={true}
                    text='shorts'
                />
                <ButtonMenu bg='#717b8f '
                    iconActive={displayUndewear} src={calcinhaIcon} 
                    marginhorizontal='10' 
                    marginvertical='10' 
                    onClick={actionDisplayUnderwear} 
                    radius={true}
                    text='intima'
                />
            
            </div>
            <p className="category-title">Produtos: <span>{conditionCategoryTitle()}</span> </p>
      </>
    </S.CategorySectionProducts>
  
    <S.ShowcaseProduct > 
        { displayBlouses ? blosesProductList && blosesProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct} data={item} />) : null}
        { displayShoes ? shoesProductList && shoesProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
        { displayShorts ? shortsProductList && shortsProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
        { displayUndewear  ?  undewearProductList && undewearProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
        <Cart >
          {productCart.map((item,index)=>(
            <ProductCart key={index} />
           ))}
        </Cart>
    </S.ShowcaseProduct>
    {onModal && <S.ContainerModal>
        <CardCliked  onClick={setDataBad} data={dataProductCliked} funcOffModal={closeModal}/>
     </S.ContainerModal>}
     
    
   
    </S.Container>
}