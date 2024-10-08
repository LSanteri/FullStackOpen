const Persons = ({personsToShow, deleteIt}) =>{
    return (
        <ul>
      {personsToShow.map(person =>
        <li key ={person.id}>{person.name} {person.number}
                  <button onClick={() => deleteIt(person.id)}>Delete</button></li>
      )}
      </ul>
    )
}
export default Persons