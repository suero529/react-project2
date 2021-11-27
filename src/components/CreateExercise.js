import React from 'react'

const CreateExercise = (props) => {
    const [text, setText] = React.useState('')
    
    const createNewExercise = () => {
        const newExercise = 
        {name: text};         
        props.addExercise(newExercise)
        }
        
        return(
            <div>
                <input onChange={(e) => setText(e.target.value)}
                value={text}
                placeholder='Enter Exercise'
                >   
                </input>
                <button onClick={createNewExercise} >Add New Exercise</button>
            </div>
        )
}

export default CreateExercise