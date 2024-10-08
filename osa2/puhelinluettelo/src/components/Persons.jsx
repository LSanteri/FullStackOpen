const Persons = ({personsToShow, deleteIt}) =>{
    return (
        <ul>
      {personsToShow.map(person =>
        <li key ={person.name}>{person.name} {person.phonenumber}
                  <button onClick={() => deleteIt(person.id)}>Delete</button></li>
      )}
      </ul>
    )
}
export default Persons