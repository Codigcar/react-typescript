import 'jest';
import { shallow } from 'enzyme';
import { CounterApp } from '../components/CounterApp';

describe('Pruebas en <CounterApp />', () => {
    
    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    })

    test('debe mostrar el Contador', () => {
        const wrapper = shallow(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de mostrar el Contador:1 al ejecutar handleSuma', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('Contador: 1');
    })

    test('debe de mostrar el Contador:0 al ejecutar handleResta', () => {
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('Contador: -1');
    })
    
})
