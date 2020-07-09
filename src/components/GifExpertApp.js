import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     // setCategories(['HunterXHunter', ...categories]);
    //     setCategories(category => [...category, 'HunterXHunter']);
    // }

    return (
        <>
         <h1>GifExpertApp</h1>
         <AddCategory setCategories={setCategories} />
         <hr />
         {/* <button onClick={handleAdd}>Agregar</button> */}
         <ol>
             {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
             }

         </ol>
        </>
    )
}


// export default GifExpertApp;
