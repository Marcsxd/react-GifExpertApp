import getGifs from '../../helpers/getGifs';




describe('Pruebas en el helper getGifs', () => {

    test('debe traer 10 elementos', async() => {

        const gifs =  await getGifs( 'One Punch' );

        expect( gifs.length ).toBe( 10 )

    })
    
    test('debe mostrar un array vacio cuando no se manden argumentos', async() => {

        const gifs =  await getGifs( '' );

        expect( gifs.length ).toBe( 0 )

    })

})