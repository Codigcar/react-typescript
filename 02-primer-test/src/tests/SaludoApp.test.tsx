import 'jest';
import React from 'react';
import { shallow } from 'enzyme';
import { SaludoApp } from '../components/SaludoApp';
import { render } from '@testing-library/react';

describe('Pruebas en <SaludoApp/>', () => {
    test('debe de mostrar el mensaje "Hola, Soy Carlos"', () => {
        // const saludo = 'Carlos';
        
        const wrapper = shallow( <SaludoApp saludo='Carlos' subtitulo='Castilla' />)
        expect(wrapper).toMatchSnapshot();
        // const {getByText} = render(<SaludoApp saludo={saludo} subtitulo='Castilla'/>);
        // expect(getByText(saludo)).toBeInTheDocument();

    })
    
})
