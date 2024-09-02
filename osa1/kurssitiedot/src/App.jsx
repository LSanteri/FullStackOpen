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
  console.log(parts)
  return (
    <div>
      <p>
        {parts.pt1} {parts.ex1}
      </p>
      <p>
        {parts.pt2} {parts.ex2}
      </p>
      <p>
        {parts.pt3} {parts.ex3}
      </p>
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



export default App