import React/* , { useEffect, useState }  */from 'react'
import PropTypes from 'prop-types'

import GifGridItem from './GifGridItem'
import useFetchGifs from '../hooks/useFetchGifs'


const GifGrid = ( {category} ) => {

    const {data:images, loading} = useFetchGifs( category );


    return (

        <>

            <h3 className='animate__animated animate__fadeIn'> { category } </h3>
            
            { loading && <p className='animate__animated animate__flash'>Loading</p> }

            <div className='card-grid'>

                    {
                        
                        images.map( img => {
                            return(
                                <GifGridItem 
                                    key={img.id}
                                    {...img}    
                                    />        
                            )
                        })
                            
                    }

            </div>
            
        </>
    
    )

}


export default GifGrid;

GifGrid.propTypes = {

    category: PropTypes.string.isRequired,

};
