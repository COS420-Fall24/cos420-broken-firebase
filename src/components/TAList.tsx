import React, {useState} from 'react';

import {db} from "../firebase-config"

import { useCollection } from 'react-firebase-hooks/firestore';
import { person, roleType} from '../models/person';


function TAList() {
    

    return (
        <div>
            <h2>TA:</h2>
            {/* 
            Query for all persons with a role of "Instructor" here.
            Map out the results into their own tags
            */}

        </div>
    )
}

export default TAList;