import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phonenumber: '040-1231244' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const addNumber = (event) =>{
    event.preventDefault()

    const personExists = persons.find((person) => person.name === newName)

    personExists 
    ? alert(`${newName} is already added to phonebook`) 
    : setPersons(persons.concat({ name: newName, phonenumber: newNumber}))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        
        
        <div>
          name: <input value={newName} 
        onChange={handleNameChange}/>
        </div>
        <div>number: <input value={newNumber}
        onChange={handlePhoneChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person =>
        <li key ={person.name}>{person.name} {person.phonenumber}</li>
      )}
      </ul>
    </div>
  )

}


export default App
