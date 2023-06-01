import './App.css';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { PokeRender } from './js/pokeRender';

async function pokeApiSearch() {
  try {
    const pokeApi = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    // quando tiver um array de requisições, utilize o Promise.all
    const pokeInfoApi = await Promise.all(pokeApi.data.results.map(poke => axios.get(poke.url)))
    const pokeInfoApiObj = []

    // .filter

    // .reduce

    pokeInfoApi.map(a => pokeInfoApiObj.push({
       
          pokemon: true,
          name: a.data.name,
          pokemonObj: a,
          imageFront: a.data.sprites.front_default
        })
    )



    return (pokeInfoApiObj)
  } catch (erro) {
    console.log(erro)
  }
}

function App() {
  const [pokeApi, setPokeApi] = useState([])
  const inputRef = useRef(null);
  useEffect(() => {
    pokeApiSearch().then(pokeJson => {
      setPokeApi(pokeJson)
    })
  }, [])

  return (
    <div>
      <h3>Sapato</h3>
      <div ref={inputRef}>

      </div>
      <PokeRender pokemonApi={pokeApi} />
    </div>
  );
}

export default App;
