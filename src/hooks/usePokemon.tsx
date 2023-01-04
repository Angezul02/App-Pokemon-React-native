import React, {useState} from 'react'
import { PokemonFullInformation } from '../interfaces/pokemonInterfaces';
import { useEffect } from 'react';
import { pokemonApi } from '../api/pokemonApi';


const usePokemon = (id:string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemon, setPokemon] = useState<PokemonFullInformation>({} as PokemonFullInformation)

  const loadpokemon = async ()=>{
        const resp = await pokemonApi.get<PokemonFullInformation>(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setPokemon(resp.data)
        setIsLoading(false)
  }

  useEffect (() => {
   loadpokemon();
  }, [])
  




return{
    isLoading,
    pokemon 
}

}

export default usePokemon
