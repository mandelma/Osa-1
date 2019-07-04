import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) =>{
    
    return(
        <div>
            <h1>{props.nimi}</h1>
        </div>
    )
}

const Part = (props) =>{
    
    return(
        <div>
            <p>
                {props.part1} {props.exercises1}
            </p>
            <p>
                {props.part2} {props.exercises2}
            </p>
            <p>
                {props.part3} {props.exercises3}
            </p>
        </div>
    )
}


const Content = (props) =>{
    return(
        <div>
            <Part part1 = {props.p1} exercises1 = {props.ex1} />
            <Part part2 = {props.p2} exercises2 = {props.ex2}/>
            <Part part3 = {props.p3} exercises3 = {props.ex3}/>
        </div>
    )
}

const Total = (props) =>{
    return(
        <div>
            <p>Number of exercises {props.count} </p>
        </div>
    )
}

const App = () =>{
    const course = 'Half Stack application development'
    const osa1 = 'Fundamentals of React'
    const osa2 = 'Using props to pass data'
    const osa3 = 'State of a component'
    const tehtavat1 = 10
    const tehtavat2 = 7
    const tehtavat3 = 14
    const yhteensa = tehtavat1 + tehtavat2 + tehtavat3
    return(
        <div>
            <Header nimi = {course} />
            <Content p1 = {osa1} ex1 = {tehtavat1} 
                     p2 = {osa2} ex2 = {tehtavat2}
                     p3 = {osa3} ex3 = {tehtavat3} />
            <Total count = {yhteensa} />
        </div>
        
    )
}

ReactDOM.render(<App />, document.getElementById('root'));