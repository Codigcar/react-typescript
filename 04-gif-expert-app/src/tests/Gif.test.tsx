import { shallow } from 'enzyme';
import 'jest';
import { Gif } from '../components/Gif';
import { useFetchGifs } from '../hooks/useFetchGifs';
describe('Pruebas a <Gif />', () => {
    test('debe mostrar el componente <Gif /> renderizado', () => {
        // const {data, loading}  = useFetchGifs('goku');
        // const gif = data[0];
        const wrapper = shallow( <Gif />);
        expect(wrapper).toMatchSnapshot();
        
    })
    
})
