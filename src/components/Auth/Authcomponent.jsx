import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AuthComponent = ({component}) => {

    const {token} = useSelector((state) => state.auth)

    if(!token) return( <Navigate to={'/login'} />);
    if(token) return component
}

export default AuthComponent
