import React, { useState } from 'react'

export const AddPokemon = ({setPokemon}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(inputValue.trim().length > 0){
            const inputValueToLowerCase = inputValue.toLowerCase();
            setPokemon(pokemon => [inputValueToLowerCase]);
            setInputValue('');
            console.log('submit hecho');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type = "text"
                value = {inputValue}
                placeholder = 'Search your pokemon...'
                onChange = {handleInputChange}
            />
        </form>
    )
}
