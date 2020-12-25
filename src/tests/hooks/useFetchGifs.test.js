
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';



describe('Pruebas en el hook useFetchGif', () => {



    test('should retornar el estado inicial', async() => {

        //Configuración para probar custom hooks
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('LOL'));

        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test('should retornar un arreglo de imgs y el loading en false', async() => {


        //Configuración para probar custom hooks
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('LOL'));
        
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(20);
        expect(loading).toBe(false);

    })



})
