import React from 'react'
import Login from '../components/Login'
import styled from 'styled-components'
export default function LoginPage() {
  return (
    <Wrapper>

  
    <div className='section'>
        <h1 className='title'>
        Admin Login

        </h1>        
        <Login/>
    </div>
    </Wrapper>
  )
}


const Wrapper = styled.main`
    .title{
        position: absolute;
        top: 20%;
        left: 45%;
        color: #85586F;
    }

`