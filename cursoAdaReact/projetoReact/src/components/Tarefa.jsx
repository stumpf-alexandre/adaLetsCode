import { useEffect, useState } from "react"

export default function Tarefa() {
    const[tarefas, setTarefas] = useState([])

    useEffect(() => {
        async function buscarDados() {
            const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
            const resultadoFinal = await resultado.json()
            return resultadoFinal
        }

        buscarDados().then(res => setTarefas(res))
    }, [])

    return (
        <div>
            <ol>
                {tarefas.map((tarefas) => {
                    return (
                        <div key={tarefas.userId}>
                            <li key={tarefas.id}>{tarefas.title}{tarefas.completed ? ' - Tarefa Concluída' : null}</li>
                        </div>
                    )
                })}
            </ol>
        </div>
    )
}