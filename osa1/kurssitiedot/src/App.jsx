const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content pt1={part1} ex1={exercises1} pt2={part2} ex2={exercises2} pt3={part3} ex3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}

const Content = (parts) => {
  return (
    <div>
      <Part name={parts.pt1} exercises={parts.ex1} />
      <Part name={parts.pt2} exercises={parts.ex2} />
      <Part name={parts.pt3} exercises={parts.ex3} />
    </div>
  )
}


const Total = (total) => {
  console.log(total)
  return (
    <div>
      <p>
        {total.total}
      </p>
    </div>
  )
}

const Part = (parts) => {
  return (
    <p>
      {parts.name} {parts.exercises}
    </p>
  )
}

export default App