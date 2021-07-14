import { shallow } from 'enzyme';
import 'jest';
import { Gif } from '../components/Gif';

describe('Pruebas a <Gif />', () => {
    test('debe mostrar el componente <Gif /> renderizado', () => {
        // const {data, loading}  = useFetchGifs('goku');
        // const gif = data[0];
        const dataExample = {
            title : 'titulo',
            url : 'https://localhost/algo.jpg'
        }
        console.log(dataExample);
        
        const title = 'titulo';
        const url = 'https://localhost/algo.jpg:';
        const wrapper = shallow( <Gif title={title} url={url} />);
        expect(wrapper).toMatchSnapshot();
        
    })
    
})
