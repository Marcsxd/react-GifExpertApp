import React, { useState } from 'react'
import PropTypes from 'prop-types'



const AddCategory = ( {setCategories} ) => {
  
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ( ev ) => {
        setInputValue( ev.target.value )
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()

        // console.log(ev.target[0].value, '"Added"');
        if(inputValue.trim().length > 2){
          setCategories( c => [ inputValue, ...c ] );
          setInputValue('')
        }
    }


    return (
        
        <form onSubmit = { handleSubmit }>

          <input
            type = 'text'
            value = {inputValue}
            onChange = { handleInputChange }
            placeholder = 'Escribe mano xd'
          /> 

        </form>
  
  );

};


export default AddCategory

AddCategory.propTypes = {

setCategories: PropTypes.func.isRequired

}