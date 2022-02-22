import React from 'react'
import { useForm } from 'react-hook-form';

const UpdateUserForm = (props) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: props.currentUser
    });

    const onSubmit = (data, e) => {
        console.log(data)
        props.addUser(data)

        //Limpia los campos
        e.target.reset()
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" {...register('name', {
                        required: true,
                    })}/>
                    {errors.name?.type === 'required' && (
                    <span className='text-danger text-small d-block mb-2'>
                        El nombre es obligatorio
                    </span>
                )}
            <label>Username</label>
            <input type="text" name="username" {...register('username', {
                        required: true,
                    })}/>
                    {errors.username?.type === 'required' && (
                    <span className='text-danger text-small d-block mb-2'>
                        El username es obligatorio
                    </span>
                )}
            <center><button className="btn btn-success btn-lg">Update user</button></center>
        </form>
     );
}
 
export default UpdateUserForm;