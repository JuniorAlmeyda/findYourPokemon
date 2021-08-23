import React, { useEffect, useState } from 'react'

export const GetAllPokemons = () => {

    const [allPokemons, setAllPokemons] = useState([]);

    useEffect( () => {
        getAllPokemonsByID();
    }, [] );

    const getAllID = async() => {
        let arrId = [];
        const url = `https://pokeapi.co/api/v2/pokemon?limit=1118`;
        const resp = await fetch(url);
        const data = await resp.json();
        
    

        const ids = {
            link: data.results.map( ({url}) => url )
        }

        arrId =  ids.link.map( id => id.substring(34, id.length - 1 ) );
        
        return arrId;
    }
    
    const getAllPokemonsByID = async() => {

        let ids = await getAllID();
        let pokemons = [];
    //    ids.length - 1
        for(let i = 0; i<= (ids.length - 1); i++){
            let url = `https://pokeapi.co/api/v2/pokemon/${ids[i]}`;
            
            let resp = await fetch(url);
            
            let data = await resp.json();
            let linkImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ids[i]}.png`;
            
            const mayuscName = data.forms[0].name.toUpperCase();

            let pokemonData = {
                id: data.id,
                name: mayuscName,
                image: linkImage,
                type: data.types.map( ({type}) => type.name )
            }
            
            pokemons.push(pokemonData);
        
        }
        console.log(pokemons);
        setAllPokemons(pokemons);

    }


    return (
        <>
            <div className="colums">
            {
                 allPokemons &&
                allPokemons.map(data => (
                    
                    <div key={data.id} className="containerAllPokemons">
                        
                        <div  className="containerPokemons">

                            <div className="izquierdaPokemons">
                                <img src={data.image} alt={data.name} className="imgAllPokemon" />
                            </div>
                            
                            <div className="derechaPokemons">
                                <h2 className="nameAllPokemon">{data.name}</h2>
                                <h3 className="nombreDelTipo">TYPE</h3>
                                <div className="containerType">
                                    {
                                        data.type.map( type => (
                                            <p key={type} className="typeAllPokemon" >{type}</p>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>
                        
                    </div>
                )) 
            }
            </div>
        </>
    )
}
