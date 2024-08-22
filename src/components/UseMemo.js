import React, { useMemo, useState } from 'react';

const UseMemo = () => {
    const [todos, setTodos] = useState(["New Todo"]);

    const [count, setCount] = useState(0);

    const [number, setNumber] = useState();
    const Operation = useMemo(() => {
        let result = 0;
        for (let i = 0; i < number; i++) {
            result += i ** 6;
        }
        return result;
    }, [number]);

    return (
        <div>
            <h2>My todos</h2>
            <div className='todos'>
                {
                    todos.map((todo, index) => {
                        return <div id={"todo-" + index} key={index}>{todo}</div>
                    })
                }
            </div>

            <button id="add-todo-btn"
                onClick={() => {
                    setTodos([...todos, "New Todo"]); 
                }}
            >Add todo</button>

            <hr />

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p>Count: <span id="incr-cnt">{count}</span></p>
                <button value = "+" id="incr-btn" 
                style={{ 
                    marginLeft: '10px', 
                    width: '20px', 
                    height: '20px', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                    }} onClick={() => setCount(count + 1)}>+</button>
            </div>
            <h1>Expensive Calculation</h1>
          
            <p>1000000000</p>
            <hr />
            <hr />
        </div>
    );
};

export default UseMemo;
