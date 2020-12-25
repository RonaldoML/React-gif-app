import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require("enzyme");
const { GifGridItem } = require("../../components/GifGridItem");



describe('Prueba GifGridItem', () => {

    const title = 'Título';
    const url = 'Url';

    let wrapper = shallow(<GifGridItem
        title={title}
        url={url}
    />);

    beforeEach(
        () => {
            wrapper = shallow(<GifGridItem
                title={title}
                url={url}
            />);
        }
    );

    test('should mostrar correctamente el componente GifGridItem', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should tener un párrafo con el título', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });

    test('should tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');

        //props me da un objeto con las propiedades del wrapper
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });

    test('should tener animated__fadeIn', () => {

        const div = wrapper.find('div');
        const clase = 'animated__fadeIn';

        expect(div.prop('className').includes(clase)).toBe(true);
    });



});
