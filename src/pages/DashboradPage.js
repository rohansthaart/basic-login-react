import React from 'react'
import styled from 'styled-components'
import { useUserContext } from '../context/userContext'
import {Link} from 'react-router-dom'
import UserData from '../components/UserData'
export default function DashboradPage() {
  const {isLogin} = useUserContext()
  if(isLogin){
    return(<Wrapper>

  
      <div className='section'>
          <h1 className='title'>Dashboard</h1>        
          <UserData/>
      </div>
      </Wrapper>)
  }
  
  return (
    <Wrapper>
    <div className='title'>
      <h1>Please login</h1>
      <h3><Link to='/'>Login</Link></h3>
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