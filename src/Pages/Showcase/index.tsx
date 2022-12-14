import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import * as S from './style'
import { CardProduct } from "../../Components/CardProduct"
import { Product } from "../../Types/Products"
import calcinhaIcon from '../../assets/imgs/calcinha.png'
import JeansIcon from '../../assets/imgs/jeans.png'
import sapatoIcon from '../../assets/imgs/sapatoF.png'
import camisasIcon from '../../assets/imgs/camisasF.png'
import { ButtonMenu } from "../../Components/ButtonMenu"
import { CardClicked } from "../../Components/CardProductCliked"
import { dataBlouses,dataShoes,dataShorts,dataUnderwear} from '../../data/Product'
import { Cart } from "../../Components/Cart"
import { ProductCart } from "../../Components/ProductCart"
import { ApiProduct } from "../../Api/ApiProducts"
import { ThemeStyle } from "../../styled"
import { toast } from "react-toastify"
import { LoginModal } from "../LoginModal"
import { useContext } from "react"
import { useContextApp } from "../../hooks/useContextApp"

export const Showcase=()=>{
    const {state,dispatch}=useContextApp()
    const redirect=useNavigate()
    const [blousesProductList,setBlousesProductList]=useState<Product[] >( dataBlouses)
    const [shoesProductList,setShoesProductList]=useState<Product[]>(dataShoes)
    const [shortsProductList,setShortsProductList]=useState<Product[] >(dataShorts)
    const [underwearProductList,setUnderwear]=useState(dataUnderwear)
    const [dataProductCliked,setDataProductCliked]=useState<Product | any>()
   
    const [displayBlouses,setDisplayBlouses]=useState<boolean>(true)
    const [displayShoes,setDisplayShoes]=useState<boolean>(false)
    const [displayUnderwear ,setDisplayUnderwear]=useState<boolean>(false)
    const [displayShorts,setDisplayShorts]=useState<boolean>(false)
    const [onModal,setOnModal]=useState(false)
    const [productCart,setProductCart]=useState<Product>()
    const [isLogged,setIsLogged]=useState(false)



    const clikedOnModal=()=>setOnModal(true)
    const closeModal=()=>{
        setIsLogged(false)
        setOnModal(false)
    }

const returnDataClikedProduct=(data:Product)=>{
    setDataProductCliked(data)
    setOnModal(true)

}
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


 

    const conditionCategoryTitle=()=>{
        if(displayShoes){
            return 'Cal??ados'
        }else if(displayBlouses){
            return 'Blusas'
        }else if(displayShorts){
            return 'Shorts'
        }else{
            return 'Pe??a Intima'
        }
    }

  

    return <S.Container>
    <S.CategorySectionProducts>
      <div className="area">
        
      <p>Selecione uma categoria :</p>
           
           <div className="cx-btn-icons">
                <ButtonMenu  bg={ThemeStyle.bgTheme} 
                    iconActive={displayShoes} src={sapatoIcon} 
                    marginhorizontal='10' marginvertical='10'  
                    onClick={actionDisplayShoes}
                    radius={true}
                    text='cal??ados'
                />
                <ButtonMenu  bg={ThemeStyle.bgTheme}  
                    iconActive={displayBlouses } src={camisasIcon} 
                    marginhorizontal='10' 
                    marginvertical='10'  
                    onClick={actionDisplayBlouses} 
                    radius={true}
                    text='Blusas'
                />
                <ButtonMenu  bg={ThemeStyle.bgTheme}  
                    iconActive={displayShorts } src={JeansIcon} 
                    marginhorizontal='10' 
                    marginvertical='10' 
                    onClick={actionDisplayShorts} 
                    radius={true}
                    text='shorts'
                />
                <ButtonMenu  bg={ThemeStyle.bgTheme}  
                    iconActive={displayUnderwear} src={calcinhaIcon} 
                    marginhorizontal='10' 
                    marginvertical='10' 
                    onClick={actionDisplayUnderwear} 
                    radius={true}
                    text='intima'
                />
            </div>
            
            <p className="category-title">Produtos:<span>{conditionCategoryTitle()}</span> </p>
     
      </div>
          
    </S.CategorySectionProducts>
  
    <S.ShowcaseProduct > 
        { displayBlouses ? blousesProductList && blousesProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct} data={item} />) : null}
        { displayShoes ? shoesProductList && shoesProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
        { displayShorts ? shortsProductList && shortsProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
        { displayUnderwear  ?  underwearProductList && underwearProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
        <Cart stateModal={()=>{
            setIsLogged(true)
        }} />
    </S.ShowcaseProduct>
    {onModal && <S.ContainerModal>
        <CardClicked   data={dataProductCliked} funcOffModal={closeModal}/>
     </S.ContainerModal>}
     
     {isLogged && <S.ContainerModal>
        <LoginModal closeModalClick={closeModal} />
     </S.ContainerModal>}
    
   
    </S.Container>
}