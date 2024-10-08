import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addNumber = (event) => {
    event.preventDefault()
    const personExists = persons.find((person) => person.name === newName)

    personExists
    ? window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      ? personService
          .update(personExists.id, { ...personExists, number: newNumber })
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id !== personExists.id ? person : response
              )
            )
            setNewName('')
            setNewNumber('')
          })
      : null // If the user cancels, do nothing
    : personService
          .create({ name: newName, number: newNumber })  
          .then(response => {
            setPersons(persons.concat(response))
            setNewName('')
            setNewNumber('')
          })
  }

  const deleteIt = (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    : persons

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handlePhoneChange={handlePhoneChange}
        addNumber={addNumber}
      />
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} deleteIt={deleteIt} />
    </div>
  )
}

export default App
