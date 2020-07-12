import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpert = () => {

    const [categories, setCategories] = useState(['League of Legends']);

    return (
        <>
            <h2>
                Gif Searcher
            </h2>

            <AddCategory setCategories = {setCategories}/>
            
            <hr />
            

            <ol>
                { 
                categories.map( c => 
                    (
                        <GifGrid 
                            key= {c}
                            category = {c}
                        />
                    )) 
                }
            </ol>
            
        </>
    );

};

export default GifExpert;