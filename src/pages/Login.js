import React from 'react'
// {} bina bracket ke work kar rhi hai imagee
import loginImg from './assets/login.png'
import Template from '../components/Template'

// hame bej hi nhi rhe hai iskooooooooo
// as we just opening the data , how we will get this , we didn't using thiss
const Login = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Welcome Back"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
    image={loginImg}
    formType="login"
    setIsLoggedIn={setIsLoggedIn}
  />
  )
}

export default Login
