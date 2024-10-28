import React from 'react';
import './App.css';
import AddPerson from './components/AddPerson';
import InstructorList from './components/InstructorList';
import StudentList from './components/StudentList';
import TAList from './components/TAList';


function App() {
  return (
    <div className="App">
        <h1>Rolling with Firebase</h1>
        <AddPerson/>
        <br/>
        <div className='roleContainer' >
           <InstructorList/>
           <StudentList/>
           <TAList/>
        </div>
    </div>
  );
}

export default App;
