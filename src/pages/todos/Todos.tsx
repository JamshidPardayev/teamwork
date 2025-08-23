import type React from "react";
import { useEffect, useState } from "react";
import { api } from "../../api";


type Todos = [
  id: number,
  todo: string,
  completed: boolean,
]

const Todos: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [todos, setTodos] = useState<Todos[]>([])

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const response = await api.get("/todos")
        setTodos(response.data.todos)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }
    loadTodos()
  })
 
  if (loading)
    return (
      <p className="text-[30px] text-blue-500 flex items-center gap-2">
        Loading... <span className="loader"></span>
      </p>
    );
  if (error) return <p className="text-red-600 text-[30px]">Error: {error}</p>;

  return (
    <div>
      <h1 className="text-[60px]">Todos</h1>
      <div className="w-[90%] grid grid-cols-4 gap-x-[25px] gap-y-[40px] my-[50px] mx-auto">
        {todos.map((todo: any) => (
          <div key={todo?.id} className="flex items-center flex-col justify-center gap-6 h-[400px] rounded-3xl bg-gradient-to-br from-green-400 via-cyan-500 to-blue-800">
            <h2>{todo?.todo}</h2>
            <div className={`${todo?.completed ? "bg-green-500" : "bg-red-500"} flex items-center mx-auto  w-[70px] h-[40px] rounded-2xl justify-center`} ><p>{ todo?.completed === true ? "true" : "False"}</p></div>
          </div>
        )) }
      </div>
    </div>
  )

  
  return (
    <div>
      <h1>Todos</h1>
    </div>
  )
};

export default Todos;
