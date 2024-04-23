import React,{ useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from "../styles/styles.module.css";




export interface Props{
className?: string
style?: React.CSSProperties
}


export const ProductButtons=({className, style}: Props)=>{//desestructuro las props de arriba
    
    const {increaseBy,counter, maxCount}=useContext(ProductContext)
  

    const isMaxReached=useCallback(
      () => !!maxCount && counter ===maxCount,//si tiene un valor regresa maxcount sino rturna falso y no sigue
      [counter, maxCount],
    );
    

    return(
      <div 
      className={`${styles.buttonsContainer} ${className}`}
      style={style}
      >
              
              <button className={styles.buttonMinus} onClick={()=> increaseBy(-1)}> - </button>
              <div className={styles.countLabel}> {counter} </div>
              <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} onClick={()=> increaseBy(+1)}> + </button>
              
          </div>
    )
  }