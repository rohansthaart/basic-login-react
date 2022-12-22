import React from 'react'
import styled from 'styled-components'
import UserData from '../components/UserData'
export default function DashboradPage() {
  return (
    <Wrapper>

  
    <div className='section'>
        <h1 className='title'>Dashboard</h1>        
        <UserData/>
    </div>
    </Wrapper>
  )
}


const Wrapper = styled.main`
    .title{
        position: absolute;
        top: 10%;
        left: 45%;
        color: #85586F;
    }

`