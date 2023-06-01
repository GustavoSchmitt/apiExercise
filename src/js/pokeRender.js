import React from "react"
import '../App.css'

export function PokeRender({ pokemonApi }) {

    console.log(pokemonApi, 1)

    if (pokemonApi.length === 0) {
        return <div>

        </div>
    } else {
        return (
            <div>
                <h3>Pokemons</h3>
                <div className="pokemonsName">

                    {pokemonApi.map(poke => {
                        return (
                            <div className="pokeCard" key={poke.name}>
                                <img className="pokeImage" key={poke.imageFront} src={poke.imageFront} />
                                <div className="pokeName">
                                    {poke.name}
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        )

    }

}