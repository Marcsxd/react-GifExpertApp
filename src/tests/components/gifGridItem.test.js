import React from 'react'
import { shallow } from 'enzyme'

import GifGridItem from '../../components/GifGridItem'


describe('Pruebas en el componente gifGridItem', () => {

    const title = 'Titulo random';
    const url = 'https://NoTeCreoHijo.localhost.jpg'
    const wrapper = shallow( <GifGridItem title = { title } url = { url } /> )


    test('debe mostrar correctamente el componente', () => {

        expect( wrapper ).toMatchSnapshot()

    })

    test('debe tener un párrafo con el title', () => {

        const p = wrapper.find('p')

        expect( p.text().trim() ).toBe( title )

    })

    test('la img debe tener los mismos atributos que los props', () => {

        const img = wrapper.find('img');

        // console.log(img.props().src);   console.log(img.prop('src'));

        expect( img.prop('src')).toBe( url );
        expect( img.prop('alt')).toBe( title );
        
    })

    test('el div debe tener la clase animate__fadeIn', () => {

        const div = wrapper.find( 'div' );
        const classNames = div.prop('className');

        expect( classNames.includes('animate__fadeIn') ).toBe(true)

    })

})

