import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNumber = (event) =>{
    event.preventDefault()
    const personObject = {
      name: newName
    }
    console.log(event)
    console.log(personObject)
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        
        
        <div>
          name: <input value={newName} 
        onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person =>
        <li key ={person.name}>{person.name}</li>
      )}
      </ul>
    </div>
  )

}


export default App
