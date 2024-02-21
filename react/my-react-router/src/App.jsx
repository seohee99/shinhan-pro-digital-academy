import React from 'react'
import { RouterProvider } from 'react-router-dom'
import mainRouter from './routers/main-router'
import { Provider } from 'react-redux'
import store from './store'
import AuthProvider from './components/AuthProvider'

function App() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <RouterProvider router={mainRouter}></RouterProvider>
        </AuthProvider>
      </Provider>
    </>
  )
}

export default App
