import React from 'react';
import CreateExercise from './CreateExercise'
import ShowList from './ShowList'
import Generator from './Generator'

import {exercises} from '../Exercises'

const Main = () => {
    const [newText, setNewText] = React.useState(exercises)

    const removeExercise = (name) => {
        let newArr = [...newText]
        newArr = newArr.filter((item) => {
            return item.name !== name
        })
        setNewText(newArr)
    }

    const addExercise = (newExercise) => {
        let newArr = [...newText]
        newArr.push(newExercise)
        setNewText(newArr)
    }

    return(
        <div>
            <CreateExercise addExercise={addExercise} />
            <ShowList 
                exercises={newText} 
                delete={removeExercise}
            />
            <Generator />
        </div>
    )
}

export default Main