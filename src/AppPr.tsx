import React, { useState} from 'react';
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  {ProtectedLayout}  from './componentes/ProtectedLayout';
import { Login } from './componentes/Login';
import Homepage from './HomePage';
import { Signup } from './componentes/Signup';





function AppPr() {

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <Homepage />
                    }>
                    </Route>
                    <Route path='/profile' element={
                         <ProtectedLayout>
                            <h2>Aceso Concedido</h2>
                        </ProtectedLayout>
                    }>     
                    </Route>

                    <Route path='/login' element={
                        <Login />
                    }>
                        
                    </Route>
                    <Route path='/signup' element={
                         <Signup />
                    }>
                       
                    </Route>
                </Routes>
            </BrowserRouter>
        
        </AuthProvider>
    )

}

export default AppPr

// Talvez criar um about 


