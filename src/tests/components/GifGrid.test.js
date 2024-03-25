import GifGrid from '../../components/GifGrid'
import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import useFetchGifs from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'One Punch';

    test('debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data:[],
            loading: true
        })

        const wrapper = shallow( <GifGrid category= { category } /> );
        
        expect( wrapper ).toMatchSnapshot();
        
    })
    
    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'WUDAV',
                url: 'https:YaMano/Ahorita/xd.jpg',
                title: 'No creo ah',   
            },
            {
                id:'DBJASC',
                url: 'https://Lo/Mismo/de/arriba/xd.jpg',
                title: 'Yo si creo xd',
            },
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        })

        const wrapper = shallow( <GifGrid category= { category } /> );

        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
        
    })


})
