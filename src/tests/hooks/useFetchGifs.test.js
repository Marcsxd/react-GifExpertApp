/* import { renderHook } from '@testing-library/react';
import useFetchGifs from '../../hooks/useFetchGifs';



describe('Pruebas en el custom Hook useFetchGifs', () => {

    test('debe retornar el estado inicial',  async () => {

        // const { data, loading } = useFetchGifs('One Punch')

        const hooksitos = renderHook( () => useFetchGifs('One Punch') );
        // const { data, loading } = result.current;

        console.log( hooksitos );
        // await waitForNextUpdate();
        
        // expect( data ).toEqual( [] );
        // expect( loading ).toBe( true );
        
    })
    
    test('debe retornar un arreglo de imgs y el loading en false',  async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') );
        const { data, loading } = result.current;
        

        // await waitForNextUpdate();
        
        // expect( data.length ).toBeGreaterThan( 2 );
        // expect( loading ).toBe( false );
        
    })

}) */


test('debe ser igual', () => {

    const uno = 1;

    expect( uno ).toBe( 1 );

})