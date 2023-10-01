import React from 'react'

function Person(name, age, hobbies) {
    const confirmAge = (age >= 18) 
        ? "Please go vote!" 
        : "You must be 18."
    const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);
    return (
        <div>
            <p>Learn some information about this person.</p>
            <ul>
                <li>Name: {name.slice(0, 7)}</li>
                <li>Age: {age}</li>
                <ul>Hobbies: {hobbiesLIs}</ul>
            </ul>
            <h3>{confirmAge}</h3>
        </div>
    )
}

export default Person;