import React, { useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4} from 'uuid';


function App() {

  const userData = [
    {id: uuidv4(), name: 'Lucas', username: 'LucasBohe'},
    {id: uuidv4(), name: 'Fernando', username: 'FernandoH1'},
    {id: uuidv4(), name: 'Pablo', username: 'Pabser'},
  ]

  // state
  const [users, setUsers] = useState(userData)

  return (
    <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add user</h2>
        </div>
        <div className='flex-large'>
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
