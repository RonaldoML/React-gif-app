import React, { PureComponent } from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Prueba de GifGrid', () => {

    const category = 'Lol';

    test('should mostrar correctamente el componente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} ></GifGrid>)
        expect(wrapper).toMatchSnapshot();

    });

    test('should mostrar items cuando se cargan imágenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquiercosa.jpg',
                title: 'Cualquier cosa'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });
        //Hacer como si el componente ha cargado informacion
        const wrapper = shallow(<GifGrid category={category} ></GifGrid>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(true);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });


});
