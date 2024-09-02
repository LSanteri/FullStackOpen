const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Content pt1={part1} pt2={part2} pt3={part3}/>
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
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
      <Part name={parts.pt1.name} exercises={parts.pt1.exercises} />
      <Part name={parts.pt2.name} exercises={parts.pt2.exercises} />
      <Part name={parts.pt3.name} exercises={parts.pt3.exercises} />
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