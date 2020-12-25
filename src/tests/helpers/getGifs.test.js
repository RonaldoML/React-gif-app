import {getGifs} from  '../../helpers/getGifs'


describe('Pruebas con getGift Fetch', () => {

    test('should mostar que el arreglo tiene 20 gifs', async() => {
        const gifs = await getGifs('Lol');
        expect(gifs.length).toBe(20);
    })
    
    // test('should ', async() => {
    //     const gifs = await getGifs();
    //     expect(gifs.length).toBe(0);
    // });
    
})
