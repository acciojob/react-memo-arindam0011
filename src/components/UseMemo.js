import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [todos, setTodos] = useState(["New todo"])

    const [count, setCount] = useState(0)

    const [number, setNumber] = useState(0)
    const Operation = useMemo(() => {
        let result = 0
        for (let i = 0; i < number; i++) {
            result += i ** 6
        }
        return result
    }, [number])

    return (
        <div>
            <h2>My todos</h2>
            <div className='todos'>
                {
                    todos.map((todo, index) => {
                        return <div key={index}>{todo}</div>

                    })
                }
            </div>

            
            <button id="#add-todo-btn"
                onClick={() => {
                    setTodos([...todos, "new todo"])
                }}
            >Add todo</button>
            
            <hr />

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p>Count: {count}</p><button id="incr-cnt" style={{ marginLeft: '10px', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => setCount(count + 1)}>+</button>
            </div>
            <h1>Expensive Calculation</h1>
            <input type="text" value={number} onChange={(e) => {
                setNumber(e.target.value)

            }} />

            <div>Random Oparation: {Operation}</div>
            <hr />
            <hr />

        </div>
    )
}

export default UseMemo
