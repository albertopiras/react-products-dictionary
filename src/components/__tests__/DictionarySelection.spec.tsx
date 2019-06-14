import React from 'react';
import { mount, ShallowWrapper } from 'enzyme';
import colorProviderContext from 'providers/__mocks__/colorDictionaryContext';
import DictionarySelection from 'components/DictionarySelection';

let component: ShallowWrapper;

jest.mock('providers/ColorDictionariesProvider');

describe('DictionarySelection', () => {


    beforeEach(() => {
        component = mount(<DictionarySelection />,{ context:colorProviderContext });

    });
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render correctly', () => {

        expect(component).toBeDefined();
    });

});