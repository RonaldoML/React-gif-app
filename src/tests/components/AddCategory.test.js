import React from 'react';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';
const { shallow } = require("enzyme");


describe('Prueba a AddCategory', () => {

    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {

        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('should mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should cambiar la caja de texto', () => {

        const input = wrapper.find('input');

        const value = 'Hola mundo';

        input.simulate('change', {
            target: { value }
        });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('should not to post information on submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should llamar el setCatergories y limpiar la caja de texto', () => {

        wrapper.find('input').simulate('change', {
            target: { value: 'Hola' }
        });

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).toHaveBeenCalled();

        expect(setCategories).toHaveBeenCalledTimes(1);
        
        expect(setCategories).toHaveBeenCalledWith(expect.any(Array));

        expect(wrapper.find('input').prop('value')).toBe('');

    });

});
