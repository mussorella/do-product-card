import styles from "../styles/styles.module.css";

import React, {  createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import { Product, ProductContextProps, InitialValues, onChangeArgs, ProductCardHandlers } from '../interfaces/interfaces';






export const ProductContext=createContext({} as ProductContextProps);
const {Provider}=ProductContext;//el provider es el proveedor de info


export interface Props{
    product: Product;//aca obliga que el proucto sea enviado como tal
    //children?: ReactElement| ReactElement[];//es un elemento de react
    children:(args: ProductCardHandlers)=>JSX.Element;//lo q me permite hacerlo jsx y no comoa rriba es que ahora puedo agregarle funciones o patrones o componentes a esta interfaz por ejemplo u string y mandarlo a llamar a otro lado
    className?: string;
    style?: React.CSSProperties;
    onChange?:(args:onChangeArgs)=>void;
    value?:number;
    initialValues?: InitialValues
  }


export const ProductCard = ({children,product, className, style, onChange, value, initialValues}: Props) => {
 
    const {counter,increaseBy, maxCount, isMaxCountReached, reset}= useProduct({
        onChange,
         product, 
         value,
         initialValues
        })


    return(//pongo el provider aca para que exporte los datos 
 <Provider value={{
  counter,
  increaseBy,
  product,
  maxCount
 }}>

    <div className={`${styles.productCard}  ${className}`}
    style={style}>
        {children({
            count:counter,
            isMaxCountReached,
            maxCount:initialValues?.maxCount,
            product,
            increaseBy,
            reset,
        })}
        
    </div>

 </Provider>
 
)
    
}




