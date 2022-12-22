import React,{useState} from 'react'
import styled from 'styled-components';
import Register from '../components/Register';
function RegisterPage() {
   
  
    return (
        <Wrapper>
        <div className='section'>
        <h1 className='title'>
        Admin Register

        </h1> 
       <Register/>
     
    </div>
    </Wrapper>
    )
  }
const Wrapper = styled.main`
    .title{
        position: absolute;
        top: 15%;
        left: 45%;
        color: #85586F;
    }

`


export default RegisterPage
