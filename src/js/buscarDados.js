import { useEffect, useState } from "react"

const tarefas = [
    { id: 1, title: 'minha primeria tarefa' },
    { id: 2, title: 'tarefa dois' },
    { id: 3, title: 'outra tarefa' },
    { id: 4, title: 'tarefa imediata' },
]
export function BuscarDados() {

    const [tarefasList, setTarefasList] = useState([])

    useEffect(() => {
        async function buscarDadosApi() {
            const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
            const resultadoFinal = await resultado.json()
            return resultadoFinal
        }

        buscarDadosApi().then(dado => setTarefasList(dado))
    }, [])

    console.log(tarefasList)

    return (
        <>
            <h1>Lista de tarefas</h1>
            <ul style={{ color: '#ff5555' }}>
                {tarefas.map((tarefa) => {
                    return <li key={tarefa.id}>{tarefa.title}</li>
                })}
            </ul>
            <div style={{ display: 'flex', gap: 16 }}>
                <div style={{flex:1, display:'flex', flexDirection:'column', gap:20, color:'#55cc55'}}>
                    <h3 style={{justifySelf:'center', textAlign:'center'}}>Tarefas concluídas</h3>
                    <ul>
                        {tarefasList.map((tarefa) => {
                            if (!!tarefa.completed) return null
                            return <li key={tarefa.id} id={tarefa.id}>{tarefa.title}</li>
                        })}
                    </ul>
                </div>
                <div style={{flex:1, display:'flex', flexDirection:'column', gap:20, color:'#cc5555'}}>
                    <h3 style={{justifySelf:'center', textAlign:'center'}}>Tarefas a concluir</h3>
                    <ul>
                        {tarefasList.map((tarefa) => {
                            if (!tarefa.completed) return null
                            return <li key={tarefa.id} id={tarefa.id}>{tarefa.title}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}