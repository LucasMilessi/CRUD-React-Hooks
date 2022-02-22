import React from "react";

const UserTable = (props) => {

    console.log(props.users)

    return ( 
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map(users => (
                        <tr key={users.id}>
                            <td>{users.name}</td>
                            <td>{users.username}</td>
                            <td>
                                <button 
                                    className="btn btn-primary" 
                                    onClick={() => {props.editRow(users)}}>Edit</button>
                                <button 
                                    className="btn btn-danger" 
                                    onClick={() => {props.deleteUser(users.id)}}>Delete</button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={3}>No Users</td>
                        </tr>
                    )
                }
                
            </tbody>
        </table>
     );
}
 
export default UserTable;