import { useState,useEffect } from "react"
import { BannerPromotion } from "../../Components/BannerPromotions"
import bannerImage from '../../assets/imgs/banner.jpg'
import * as S from './style'
import { CardProduct } from "../../Components/CardProduct"
import { Product } from "../../Types/Products"
import { dataBlusas } from "../../data/Product"
import BebidasIcon from '../../assets/imgs/iconBebida.png'
import ResturantIcon from '../../assets/imgs/restaurante.png'
import PizzaIcon from '../../assets/imgs/iconspizza.png'
import LanchesIcon from '../../assets/imgs/iconhamburguer.png'
import { ButtonMenu } from "../../Components/ButtonMenu"
import { CardCliked } from "../../Components/CardProductCliked"
import { dataSapatos} from "../../data/Product"
import { dataBaby } from "../../data/Product"
import { RestaurantePage } from "./../RestaurantePage"
import { Bad } from "../../Components/Bad"
import { ProductBad } from "../../Components/ProductBad"
import { ApiProduct } from "../../Api/ApiProducts"


export const Showcase=()=>{
    const [burguerProductList,setBurguerProductList]=useState<Product[] >(dataBlusas)
    const [pizzaProductList,setPizzaProductList]=useState<Product[]>(dataSapatos)
    const [drinksProductList,setDrinksProductList]=useState<Product[] >(dataBaby)
    const [dataProductCliked,setDataProductCliked]=useState<Product | any>()
    const [displayBurguer,setDisplayBurguer]=useState<boolean>(true)
    const [displayPizzas,setDisplayPizzas]=useState<boolean>(false)
    const [displayRestaurant,setDisplayRestaurant]=useState<boolean>(false)
    const [displayDrinks,setDisplayDrinks]=useState<boolean>(false)
    const [onModal,setOnModal]=useState(false)
    const [productbad,setProductBad]=useState([17])

   /* useEffect(()=>{
    const loadBurguers=async()=>{
        let dataBurguer=await ApiProduct.getProducts()
        await  setBurguerProductList(dataBurguer)
    }
        setTimeout(()=>loadBurguers(),1000)
    },[burguerProductList])*/



    const clikedOnModal=()=>setOnModal(true)
    const closeModal=()=>setOnModal(false)


    const actionDisplayBurguers=()=>{
        setDisplayBurguer(true)
        setDisplayPizzas(false)
        setDisplayDrinks(false)
        setDisplayRestaurant(false)
    }
    const actionDisplayPizzas=()=>{
        setDisplayBurguer(false)
        setDisplayPizzas(true)
        setDisplayDrinks(false)
        setDisplayRestaurant(false)
    }
    const actionDisplayDrinks=()=>{
        setDisplayBurguer(false)
        setDisplayPizzas(false)
        setDisplayDrinks(true)
        setDisplayRestaurant(false)
    }
    const actionDisplayRestaurante=()=>{
        setDisplayRestaurant(true)
        setDisplayBurguer(false)
        setDisplayPizzas(false)
        setDisplayDrinks(false)
    }

    const returnDataClikedProduct=(data:Product)=>{
        setDataProductCliked(data)
        clikedOnModal()
    }

    const setDataBad=()=>{
        closeModal()
    }

    const conditionCategoryTitle=()=>{
        if(displayBurguer){
            return 'Hamburguers'
        }else if(displayDrinks){
            return 'Bebidas'
        }else if(displayPizzas){
            return 'Pizzas'
        }else{
            return 'Marmita'
        }
    }

  

    return <S.Container>
    <S.CategorySectionProducts>
      <>
      <p>Selecione uma categoria :</p>
        <div className="cx-btn-icons">
            <ButtonMenu  bg='#717b8f' 
                 iconActive={displayBurguer ? true : false} src={LanchesIcon} 
                 marginhorizontal='10' marginvertical='10'  
                 onClick={actionDisplayBurguers}
                radius={true}
            />
            <ButtonMenu bg='#717b8f' 
                iconActive={displayDrinks ? true : false} src={BebidasIcon} 
                marginhorizontal='10' 
                marginvertical='10'  
                onClick={actionDisplayDrinks} 
                radius={true}
            />
            <ButtonMenu bg='#717b8f' 
                iconActive={displayPizzas ? true : false} src={PizzaIcon} 
                marginhorizontal='10' 
                marginvertical='10' 
                onClick={actionDisplayPizzas} 
                radius={true}
            />
              <ButtonMenu bg='#717b8f' 
                iconActive={displayRestaurant} src={ResturantIcon} 
                marginhorizontal='10' 
                marginvertical='10' 
                onClick={actionDisplayRestaurante} 
                radius={true}
            />
           
        </div>
        <p className="category-title">Produtos: <span>{conditionCategoryTitle()}</span> </p>
      </>
    </S.CategorySectionProducts>
  
    <S.ShowcaseProduct stateDisplay={displayRestaurant}> 
        { displayBurguer ? burguerProductList && burguerProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct} data={item} />) : null}
        { displayPizzas ? pizzaProductList && pizzaProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
        { displayDrinks ? drinksProductList && drinksProductList.map((item,index)=>< CardProduct  key={index} onClick={returnDataClikedProduct}  data={item} />) : null}
        { displayRestaurant  && <RestaurantePage/>}
        <Bad >
          {productbad.map((item,index)=>(
            <ProductBad key={index} />
           
          ))}
        </Bad>
    </S.ShowcaseProduct>
    {onModal && <S.ContainerModal>
        <CardCliked  onClick={setDataBad} data={dataProductCliked} funcOffModal={closeModal}/>
     </S.ContainerModal>}
     
    
   
    </S.Container>
}