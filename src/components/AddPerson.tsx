import React, {useState} from 'react';

import {db} from "../firebase-config"

import { useCollection } from 'react-firebase-hooks/firestore';
import { person, roleType } from '../models/person';

async function createPerson(person: person){
    // Add the person document to the "people" collection


}
function AddPerson(){
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [role, setRole] = useState<roleType>("Instructor");

    return (
        <div>
            <label htmlFor="fname">First Name:</label>
            <input type="text" id="fname" name="fname" value={fname} onChange={e=>setFname(e.target.value)}/> <br/>
            <label htmlFor="lname">Last Name:</label>
            <input type="text" id="lname" name="lname" value={lname} onChange={e=>setLname(e.target.value)}/> <br/>
            <label htmlFor="role">Role:</label>
            <select name="role" id="role" value={role} onChange={e=>setRole(e.target.value as roleType)}>
                <option value="Instructor">Instructor</option>
                <option value="Student">Student</option>
                <option value="TA">TA</option>
            </select>
            <button onClick={()=>{
                //Gather the infomation from the other input fields and send them to the createPerson function, as a person
            

            }}>Add Person</button>
        </div>
    )
}

export default AddPerson;