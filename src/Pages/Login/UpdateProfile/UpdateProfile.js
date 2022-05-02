import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebse.init';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const [user]=useAuthState(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const schema = yup.object({
        firstName: yup.string().required()
    }).required();

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => {  
        updateProfile({displayName:data.firstName+data.lastName})
        reset()
    }
    const navigate = useNavigate();
    if(user.displayName){
        navigate('/')
    }

    return (
        <div className='p-5'>
            <form className='mx-auto w-25 mt-4' onSubmit={handleSubmit(onSubmit)}>
                <h3>Give a user name</h3>
                <input {...register("firstName")} className='form-control'/>
                <p>{errors.firstName?.message}</p>
                <input {...register("lastName")} className='form-control'/>
                <p>{errors.lastName?.message}</p>
                <input type="submit" />
            </form>
        </div>
    );
};

export default UpdateProfile;