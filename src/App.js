import './App.css';
import './index.css'
import 'tailwindcss/defaultTheme'
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
    <div className='bg-emerald-400/40 bg-poke-main-bg bg-cover h-[100vh] flex flex-col items-center justify-center gap-10'>
      <div>
        <h3 className='font-bold text-7xl'>Pikomons<span className='text-lg font-normal'> by Nal do canal</span></h3>
        

      </div>
      <PokeRender pokemonApi={pokeApi} />
    </div>
  );
}

export default App;
