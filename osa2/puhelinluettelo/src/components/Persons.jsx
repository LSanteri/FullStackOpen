const Persons = ({personsToShow}) =>{
    return (
        <ul>
      {personsToShow.map(person =>
        <li key ={person.name}>{person.name} {person.phonenumber}</li>
      )}
      </ul>
    )
}
export default Persons