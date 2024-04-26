import * as React from 'react';
import renderer from 'react-test-renderer';

import { product2 } from '../data/products';
import { ProductCard } from '../../src/components/ProductCard';

const {act}=renderer;

describe('ProductCard', () => { 

test('debe de mostrar el componente correactamente', () => { 
     


const wrapper= renderer.create(
    <ProductCard product={product2} >
{
    ()=>(
        <h1>ProductCard</h1>
    )
}
    </ProductCard>
    
)
expect(wrapper.toJSON()).toMatchSnapshot()


    });



    test('Debe de incrementar el contador', () => { 


        const wrapper= renderer.create(
            <ProductCard product={product2} >
        {
            ({count, increaseBy})=>(
                <>
                <h1>ProductCard</h1>
                <span>{count}</span>
                <button onClick={()=> increaseBy(1)}></button>
                </>
            )
            
        }
            </ProductCard>
            
        );
        let tree = wrapper.toJSON()
        expect(tree).toMatchSnapshot();


        act(()=>{
            (tree as any).children[2].props.onClick()//estoiy ejecutando el onClick
        })

       
        tree=wrapper.toJSON()
        expect((tree as any).children[1].children[0]).toBe('1')

     })

})