import React, { useEffect, useState } from 'react'

export const GetPokemonFetch = ({pokemon}) => {

    const [image, setImage] = useState({});

    useEffect( () => {
        fetchFunction();
    }, []);


    const fetchFunction = async() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const resp = await fetch(url);
        
        if(!resp.ok){
            console.log("asdfasdfasd");
        }
        else{
            // .map( ({ability}) => ability.name)
            const data = await resp.json();
            const id = data.id;
            const mayuscName = data.forms[0].name.toUpperCase();
            const pokemonData = {
                abilities: data.abilities.map( ({ability}) => ability.name),
                height: data.height,
                weight: data.weight,
                base_experience: data.base_experience,
                moves: data.moves.length,
                id: id,
                name: mayuscName,
                url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
            }

            console.log(pokemonData.height);
            setImage(pokemonData);
            
        }

    }
    
    return (
        <>  
            {( 
                
                image.url ?
                <div className="container">
                    <div className = "izquierda">
                            
                        <img className="pokemon" src={image.url} alt={image.name} />
                       
                                    
                    </div> 
                   
                    <div className = "derecha">
                        <h2 className="nombre">{image.name}</h2>
                        <h3>ABILITIES</h3>
                        <div className="abilities">
                            {
                                image.abilities && 
                                image.abilities.map( (ability) => (<p className="ability" key={ability}>{ability}</p>) )
        
                            }
                        </div>
                       <div className="infoExtra">
                            <div className="talla">
                                <h4>HEIGHT</h4>
                                <div>{ image.height }m</div>
                            </div>
                            <div className="peso">
                                <h4>WEIGHT</h4>
                                <div>{ image.weight }kg</div>
                            </div>
                            <div className="baseExp">
                                <h4>BASE EXP.</h4>
                                <div>{ image.base_experience }</div>
                            </div>
                        </div>
                    </div>

                </div>
                :   <div className="error">
                        <h4 className="errorTitulo">Ups!!! Pokemon not found.</h4> 
                        <small className="errorMensaje">Make sure you have captured the pokemon...</small>
                    </div>
            )}
        </>
    )
}

