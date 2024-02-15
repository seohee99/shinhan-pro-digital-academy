import instance from "./base";
import React from 'react'

export async function login({email, password}) {
    const response = await instance.post('/users/login',{
        email,
        password
    });
    console.log(response);
    localStorage.setItem('user', JSON.stringify(response));
    return response;
}

export async function signup({email, password, nickname}) {
    const response = await instance.post('/users/signup',{
        email,
        password,
        nickname
    });
    console.log(response);
    return response;
}

export async function logout(){
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    }
    const response = await instance.get('/users/logout');
    localStorage.removeItem('user');
    return response;
}
