import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import BoardListPage from '~/routes/board/page';
import MainPage from '~/routes/page';
import BoardLayout from '~/routes/board/layout'; 
import BoardWritePage from '~/routes/board/write/page';
import BoardDetailPage from '~/routes/board/detail/page';
import Userlayout from '~/routes/user/layout';
import Login from '~/routes/user/login/page';
import Signup from '~/routes/user/signup/page';
import Layout from '~/components/Layout/Layout';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children : [
            {
                path : '',
                index : true,
                element : <MainPage/>
        }
        ]
    },
    {
        path:'/users',
        element : <Userlayout />,
        children :[
            {
                path:'login',
                index: true,
                element : <Login/>
            },
            {
                path:'signup',
                index:true,
                element : <Signup/>
            }
        ]
    }
    ,
    {
        path: '/board',
        element: <BoardLayout />,
        // index:true,
        children: [
            {
                path: '',
                index: true,
                element: <BoardListPage />,

            },
            {
                path: ':boardId',
                index: true,
                element: <BoardDetailPage />,
            }
            ,
            {
                path:'write',
                index:true,
                element:<BoardWritePage />,
            }
        ]

    }
]);

export default router;
