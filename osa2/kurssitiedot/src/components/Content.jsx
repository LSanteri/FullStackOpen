import Part from './Part'

const Content = ({ parts }) => {
  
  const sum = parts.reduce((s, p) => {
    console.log('yhteensä:', s)
    console.log('lisätään:', p.exercises)
    return s + p.exercises
  }, 0)

  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
        <p>Total exercises: {sum}</p>
    </div>
    
  )
  
}

export default Content
