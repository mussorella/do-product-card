import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle,  } from '../../src/components/ProductTitle';
import { product1 } from '../data/products';
import { ProductCard } from '../../src/components/ProductCard';


describe('ProductTitle', () => { 

test('debe de mostrar el componente correactamente con el title personalizado', () => { 
     


const wrapper= renderer.create(
    <ProductTitle title='Custom Product' className='custom-class'/>
    
)
expect(wrapper.toJSON()).toMatchSnapshot()


})
test('Debe de mostarr el componente con el nombre dle producto', () => { 
    const wrapper= renderer.create(
        <ProductCard product={product1}>
        {
            ()=>(
                <ProductTitle/>
            )
        }

            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    
    })



})
