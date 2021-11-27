import React from 'react'

const ShowList = (props) => {

    return(
        <div>
            <h1>Exercise List:</h1>
            {props.exercises.map((item) => {
                return(
                <div>
                    <ul>
                        <li>{item.name}</li><button onClick={() => props.delete(item.name)}
            >
            Done!</button>
                    </ul>
                    
            </div>
                )
            })}
           
        </div>
    )
}

export default ShowList;