const App = () => {
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

  return (
    <div>
      <Header props={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({props}) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.name}
      </p>
    </div>
  )
}

const Content = ({parts}) => {
  console.log(parts)
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />

    </div>
  )
}


const Total = ({parts}) => {
  console.log(parts)
  return (
    <div>
      <p>
        {parts[0].exercises + parts[1].exercises + parts[2].exercises}
      </p>
    </div>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

export default App