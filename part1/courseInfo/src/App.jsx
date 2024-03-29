
const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.partNum} {props.exerciseNum}
    </p>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part partNum={props.parts[0].name} exerciseNum={props.parts[0].exercises}/>
      <Part partNum={props.parts[1].name} exerciseNum={props.parts[1].exercises}/>
      <Part partNum={props.parts[2].name} exerciseNum={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => { 
  return (
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = "Half Stack Application Development"
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data", 
      exercises: 7
    },
    {
      name: "State of a component", 
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App
