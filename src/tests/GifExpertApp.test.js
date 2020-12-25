
import React from 'react';
import '@testing-library/jest-dom';
import GifExpert from '../GifExpertApp';
const { shallow } = require("enzyme");


describe('Prueba de GifExpertApp', () => {
    
    

    test('should mostrar el componente correctamente', () => {

        let wrapper = shallow(<GifExpert></GifExpert>);

        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('should mostrar una lista de categoría', () => {
        
        const categorias = ['One Punch', 'Dragon Ball'];

        let wrapper = shallow(<GifExpert defaultCategories={categorias}></GifExpert>);

        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('GifGrid').length ).toBe( categorias.length );

    })
    

});
