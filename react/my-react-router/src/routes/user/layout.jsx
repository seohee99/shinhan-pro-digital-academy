import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import MyFooter from '~/components/MyFooter/MyFooter';
import MyNavbar from '~/components/MyNavbar/MyNavbar';
import {AuthContext} from '~/components/AuthProvider';


export default function Userlayout() {
  return (
    <>
        <MyNavbar brandTitle='My-React-Board' />
        <Container className='min-vh-100'>
            <Outlet />
        </Container>
        <MyFooter brandTitle='My-React-Board' />
    </>
  )
}
