// src/components/Course.js

const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  const totalExercises = parts.reduce((s, p) =>{
    console.log('yhteensä:', s)
    console.log('lisätään:', p.exercises)
    return s + p.exercises}, 0)

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <p>Total exercises: {totalExercises}</p>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default Course;
