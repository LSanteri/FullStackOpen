import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phonenumber: '040-123456' },
    { name: 'Ada Lovelace', phonenumber: '39-44-5323523' },
    { name: 'Dan Abramov', phonenumber: '12-43-234345' },
    { name: 'Mary Poppendieck', phonenumber: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  const addNumber = (event) =>{
    event.preventDefault()
    const personExists = persons.find((person) => person.name === newName)

    personExists 
    ? alert(`${newName} is already added to phonebook`) 
    : setPersons(persons.concat({ name: newName, phonenumber: newNumber}))
    setNewName('')
  }

  const personsToShow = filter
  ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  : persons;

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      

      <div>filter shown with: <input value={filter} onChange={handleFilterChange}/>
      </div>

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
      {personsToShow.map(person =>
        <li key ={person.name}>{person.name} {person.phonenumber}</li>
      )}
      </ul>
    </div>
  )

}


export default App
