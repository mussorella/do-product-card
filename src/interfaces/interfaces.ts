
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";


  
  export interface Product{//asi obligo q me tiene que mandar un producto con el id y titulo y como debe ser
    id: string;
    title: string;
    img?: string;
  }
  
  export interface ProductContextProps{//como debe lucir el provider
  counter: number;//los datos los saque del value del provider de abajo
  maxCount?:number;
  increaseBy: (value:number)=>void;
  product:Product
  }


  export interface ProductCardHOCProps{
    ({ children, product }: ProductCardProps ) : JSX.Element,
     Title: (Props: ProductTitleProps) => JSX.Element,
     Image: (Props: ProductImageProps) => JSX.Element,
     Buttons: (Props:ProductButtonsProps) => JSX.Element
  }
  export interface onChangeArgs{
    product:Product,
    count: number
  }

  export interface ProductInCart extends Product{//esta interfaz define que el producto lleve un contador
    count: number
  
  }

  export interface InitialValues{//para los valores de initializer
    count?:number;
    maxCount?:number;
  }

  export interface ProductCardHandlers{
    count:number;
    isMaxCountReached: boolean;
    maxCount?:number;
    product: Product;

    increaseBy:(value:number)=>void;
    reset:()=>void
  }