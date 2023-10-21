import React from "react"

export function PokeRender({ pokemonApi }) {

    console.log(pokemonApi, 1)

    if (pokemonApi.length === 0) {
        return <div>

        </div>
    } else {
        return (
            <div className="w-full overflow-hidden">
                <div className="pokemonsName overflow-x-auto px-5">

                    {pokemonApi.map(poke => {
                        return (
                            <div className="pokeCard bg-blue-100 text-sky-900" key={poke.name}>
                                <img className="pokeImage shadow-image-card" key={poke.imageFront} src={poke.imageFront} />
                                <div className="pokeName ">
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