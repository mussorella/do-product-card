import * as React from 'react';
import renderer from 'react-test-renderer';

import { product2 } from '../data/products';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';


describe('ProductImage', () => { 

test('debe de mostrar el componente correactamente con la imagen personalizado', () => { 
     


const wrapper= renderer.create(
    <ProductImage  img='https://hola.jpg' className='custom-class'/>
    
)
expect(wrapper.toJSON()).toMatchSnapshot()


})
test('Debe de mostarr el componente con la imagen producto', () => { 
    const wrapper= renderer.create(
        <ProductCard product={product2}>
        {
            ()=>(
                <ProductImage/>
            )
        }

            </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot()
    
    })



})
