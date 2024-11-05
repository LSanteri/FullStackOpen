import React from 'react'

const CountryDetails = ({ country }) => (
  <div>
    <h2>{country.name.common}</h2>
    <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
    <p>Population: {country.population}</p>
    <p>Region: {country.region}</p>
    <p>Subregion: {country.subregion}</p>
    <h3>Languages</h3>
    <ul>
      {country.languages
        ? Object.values(country.languages).map((lang, index) => (
            <li key={index}>{lang}</li>
          ))
        : 'N/A'}
    </ul>
    <img
      src={country.flags.png}
      alt={`Flag of ${country.name.common}`}
      width="100"
    />
  </div>
)

export default CountryDetails
