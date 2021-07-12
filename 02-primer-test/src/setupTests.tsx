import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer, } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode:'deep'}));

// export declare function createSerializer(options?: Options): jest.SnapshotSerializerPlugin

/* import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'; */