const Hello = (props) => {
  return (
    <div>
      <p>Yo Whatup {props.name} you're {props.age} old!</p>
    </div>
  )
}

const App = () => {
  const friends = [
    {name: "Peter"},
    {name: "Maya"},
  ]
  console.log("Hi")
  return (
    <div>
      <p>Hello world</p>
      <p> {1 + 2} </p>
      <Hello name="Dog"/>
      <Hello name="World" age="56"/>
      <p> {friends[0].name}</p>
    </div>
  )
}


export default App