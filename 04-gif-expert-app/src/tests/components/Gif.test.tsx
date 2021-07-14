import { shallow } from 'enzyme';
import 'jest';
import { Gif } from '../../components/Gif';

describe('Pruebas a <Gif />', () => {
    const title = 'titulo';
    const url = 'https://localhost/algo.jpg:';
    const wrapper = shallow( <Gif title={title} url={url} />);

    test('debe mostrar el componente <Gif /> renderizado', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el title', () => {

        const parrafo = wrapper.find('p');
        expect(parrafo.text().trim()).toBe(title);
    })

    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
        
    })
    
})
