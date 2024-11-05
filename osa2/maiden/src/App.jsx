import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'
import CountryDetails from './components/CountryDetails.jsx'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setCountries(response.data))
      .catch(error => console.error('Error fetching countries:', error))
  }, [])

  useEffect(() => {
    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredCountries(filtered)
  }, [search, countries])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h1>Country Info</h1>
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={handleSearchChange}
      />
      {filteredCountries.length > 10 ? (
        <p>Too many matches, please refine your search.</p>
      ) : filteredCountries.length > 1 ? (
        <CountryList countries={filteredCountries} />
      ) : filteredCountries.length === 1 ? (
        <CountryDetails country={filteredCountries[0]} />
      ) : (
        <p>No matches found.</p>
      )}
    </div>
  )
}

export default App
