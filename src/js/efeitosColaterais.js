import { useEffect } from 'react';
import { useState } from 'react';
const minhaLista = [
  {id:1, value:'Fruta'},
  {id:2, value:'Legume'},
  {id:3, value:'Carne'}
]
export function EfeitosColaterais() {
    const [produtos, setProdutos] = useState(minhaLista)
    const [pesquisa, setPesquisa] = useState('')
    
    useEffect(
      () => {
        if(pesquisa){
    
          const novaLista = minhaLista.filter((item) => {
            return item.value.toLocaleLowerCase().includes(pesquisa.toLowerCase())
          })
          setProdutos(novaLista)
        }else{
          setProdutos(minhaLista)
        }
      },
      [pesquisa]
    )

    return (
      <div>
        <h1>Efeitos colaterais</h1>
        <input 
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder='search here' />
        {produtos.map((item) =>{
          return(
            <div key={item.id}>
              <h4>{item.value}</h4>
            </div>
          )
        })}
      </div>
    );
}
  