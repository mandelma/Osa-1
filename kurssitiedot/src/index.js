import React from 'react';
import ReactDOM from 'react-dom';



const App = () =>{
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    
    } 

    let summa = 0
    const part = course.parts.map(par => <li key = {par.name}>{par.name + " " +  par.exercises}</li>)
    
    course.parts.map(p => summa += p.exercises)
    
    return(
        
        <div>
            <h2>{course.name}</h2>
            <p>
                {part}
                Number of exercises: {summa}
            </p>
        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
