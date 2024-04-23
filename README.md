#FB-Product-Card

Este es un paquete d epruebas de despliegue en NPM


###Fede

##Ejemplo


```
import { ProductImage, ProductTitle, ProductButtons, ProductCard } from 'fb-product-card'
```


```
<ProductCard 
          product={product}
          key={product.id}
          initialValues={{
            count:4,
            //maxCount:10,
          }}
          >


            {
              ({reset, isMaxCountReached,maxCount,increaseBy,count })=>(

                <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
                </>

              )
            }

</ProductCard>
```


pegar en typing.d.ts 
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.jpg" {
    const value: any;
    export default value;
}
Comment
