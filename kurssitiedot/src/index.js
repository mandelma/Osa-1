import React from 'react';
import ReactDOM from 'react-dom';



const App = () =>{
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        }, 
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14 
        }
    ]
    
    let summa = 0
    const part = parts.map(par => <li key = {par.name}>{par.name + " " +  par.exercises}</li>)
    
    parts.map(p => summa += p.exercises)
    
    return(
        
        <div>
            <p>
                <h2>{course}</h2>
                {part}
                Number of exercises: {summa}
            </p>
        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById('root'));