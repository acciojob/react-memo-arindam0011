import React, { useState } from 'react'

const ReactMemo = () => {
    const[skills,setSkills]=useState([])
    const[skillInput, setSkillInput] = useState("")
    return (
        <div>
            <h1>React.memo</h1>
            <input type='text' onChange={(e)=>setSkillInput(e.target.value)} value = {skillInput}/> 
            <button onClick={()=>setSkills([...skills,skillInput])}>Add Skill</button>
            <ul>
                {
                    skills.map((skill, index)=> <li key={index}>{skill}</li>)
                }
            </ul>
        </div>
    )
}

export default ReactMemo
