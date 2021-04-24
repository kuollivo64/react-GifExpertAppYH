import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

//Funcional component
const GitExpertApp = () => {
    
    const [categorias, setCategorias] = useState(['One Punch'])
    return(
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategorias={ setCategorias }/>
            <hr />
            <ol>
                {
                    categorias.map( category =>
                        <GifGrid 
                        key={category}
                        categoria={category}
                        />
                    )
                }
            </ol>


        </>
    );
};

export default GitExpertApp;