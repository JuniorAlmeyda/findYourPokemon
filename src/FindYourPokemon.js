import React, { useState } from 'react'
import { AddPokemon } from './components/AddPokemon'
import { GetAllPokemons } from './components/GetAllPokemons'
import { GetPokemonFetch } from './components/GetPokemonFetch'

export const FindYourPokemon = () => {

    const [pokemon, setPokemon] = useState([])

    return (
        <>
            
            <h1 className="titulo">Find Your Pokemon!!!</h1>
            <hr className="linea" />

            <AddPokemon setPokemon = {setPokemon} />

            <div>
                {
                    pokemon.map( pokemon => {
                        return <GetPokemonFetch 
                                    key = {pokemon}
                                    pokemon = {pokemon} 
                                />
                    } )
                }
            </div>

            <h2 className="titulo">ALL POKEMONS THAT YOU CAN FIND</h2>
            <GetAllPokemons />
            
        </>
    )
}
