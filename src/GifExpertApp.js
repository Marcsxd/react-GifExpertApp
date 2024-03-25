import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ( { defaultCategory = [] } ) => {

    const [categories, setCategories] = useState( defaultCategory );
    // const handleAdd = () => {

        // setCategories( c => [...c, 'Jujutsu Kaisen'] )
        // setCategories( [...categories, 'Jujutsu Kaisen'] )

    // }


    return (

        <>
        
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr/>            


            <ol>
                {
                    categories.map(category => {
                        return(
                            <GifGrid 
                                key= { category }
                                category={ category }
                            />
                        )
                    })
                }
            </ol>

        </>

    );


}

export default GifExpertApp
