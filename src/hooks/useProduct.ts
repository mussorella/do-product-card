
import { useEffect,  useRef,  useState } from "react"
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';


interface useProductArgs{
   product:Product,
    onChange?:(args:onChangeArgs)=> void,
    value?:number;
    initialValues?:InitialValues;
}

export const useProduct =({onChange, product, value=0, initialValues}:useProductArgs)=>{

    const [counter, setCounter] = useState<number>(initialValues?.count||value)//si viene valor de initial values toma ese, sino value
 
    const isMounted = useRef(false);
 
    
    const increaseBy=(value:number)=>{
    
        let newValue=Math.max(counter+value, 0)
        
        if(initialValues?.maxCount){//si el initial values tiene un valor y el max count tambien
            newValue=Math.min(newValue, initialValues.maxCount)//entonces voya  toamr el minimo d eestos dos el new value y el initial values
        }//con esto lñimito al max count

    
    setCounter(newValue)
    onChange && onChange({count: newValue, product});
}//si da true se ejecuta el onchange
    
    const reset=()=>{
        setCounter(initialValues?.count||value)
    }
    useEffect(() => {
        if(!isMounted.current) return;

      setCounter(value);//este use effect actualiza el valor del value en el shoppingcart
    }, [value])
    
    useEffect(() => {
        isMounted.current=true
            }, [])
    
    
    
return{
    counter,  
     
    maxCount:initialValues?.maxCount, 
    isMaxCountReached:!!initialValues?.count && initialValues.maxCount===counter,

    increaseBy,
    reset
}

}