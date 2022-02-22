import React, { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import { v4 as uuidv4} from 'uuid';
import UpdateUserForm from './components/UpdateUserForm';



function App() {

  const userData = [
    {id: uuidv4(), name: 'Lucas', username: 'LucasBohe'},
    {id: uuidv4(), name: 'Fernando', username: 'FernandoH1'},
    {id: uuidv4(), name: 'Pablo', username: 'Pabser'},
  ]

  // state
  const [users, setUsers] = useState(userData)

  // Agregar Usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users, 
      user
    ])
  }

  //Eliminar usuarios
  const deleteUser = (id) => {

    setUsers(users.filter(user => user.id !== id))
  }

  //Editar usuario
  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  })

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }



  return (
    <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>

          {
            editing ? (
              <div>
                <center><h2>Update user</h2></center>
                <UpdateUserForm 
                  currentUser={currentUser}
                />
              </div>
            ) : (
              <div>
                <center><h2>Add user</h2></center>
                <AddUserForm addUser={addUser}/>
              </div>
            )
            }    
        </div>
        <div className='flex-large'>
          <center><h2>View users</h2></center>
          <UserTable 
            users={users} 
            deleteUser={deleteUser} 
            editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
