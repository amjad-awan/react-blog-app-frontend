import { Container } from '@mui/material'
import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'

const Login = () => {
  return (
    <Container sx={{height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
    <LoginForm/>
   </Container>
  )
}

export default Login