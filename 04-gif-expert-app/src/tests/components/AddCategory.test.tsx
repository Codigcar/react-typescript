import 'jest';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en <AddCategory />', () => {
    const setCategories = () => {};
    const wrapper = shallow( <AddCategory setCategories={setCategories} /> );
    
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();        
    })

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const valor = 'Text escrito';
        input.simulate('change', {target:{value:valor}});
        // console.log(wrapper.find('p').html());
        expect(wrapper.find('p').text().trim()).toBe(valor);
    })
    
    
})
