import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';


describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories = { setCategories } /> )

    beforeEach( () => {
        
        jest.clearAllMocks()
        wrapper = shallow( <AddCategory setCategories = {setCategories} /> );

    })

    
    
    test('debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();

    }) 

    test('la caja de texto debe cambiar', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo'

        input.simulate('change', { target: { value } } )

    })

    test('NO debe postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        expect( setCategories ).not.toHaveBeenCalled();

    })

    test('debe llamar al setCatregories y limpiar la caja de texto', () => {

        const value = 'Hola papu';

        const input = wrapper.find('input')

        input.simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        
        expect(input.prop('value')).toBe('');

    })


})