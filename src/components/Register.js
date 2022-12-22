import React,{useState,useMemo} from 'react'
import {useNavigate ,Link} from 'react-router-dom'
import { Button, Checkbox, Form, Input,Alert  } from 'antd';
import axios from 'axios'
import { useUserContext } from '../context/userContext'



export default function Register() {
    const navigate = useNavigate()
    const {users} = useUserContext()
    const [formData,setFormData] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        phone:"",
        isAdmin:false,
    })

 
    

    const handleSubmit = async (e)=>{
      e.preventDefault()
      const alreadyExist = users.find((user)=>user.email == formData.email)
      if(alreadyExist || !formData.fname || !formData.lname || !formData.email || !formData.password || !formData.phone){
       alert('user already exist or missing data')
      }else{
      let response = await axios.post('http://localhost:3000/posts',formData);
    if(response){
       
        navigate('/dashboard')
    }else{
        alert('something went wrong')
    }
   
      }
      setFormData({
        fname:"",
        lname:"",
        email:"",
        password:"",
        phone:"",
        isAdmin:false,
       })
    }
    
  
    return (
        <div className='login-form'>
        <Form  name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: false,
      }}>
        <Form.Item
        label="First Name"
        name="firstname"
        rules={[
          {
            required: true,
            message: 'Please input your firstname!',
          },
        ]}
      >
            <Input type="text" value={formData.fname} onChange={(e)=>setFormData({...formData , fname:e.target.value})}/>
            </Form.Item>
            
            
            <Form.Item
        label="Last Name"
        name="lastname"
        rules={[
          {
            required: true,
            message: 'Please input your lastname!',
          },
        ]}
      >
            <Input type="text" value={formData.lname} onChange={(e)=>setFormData({...formData , lname:e.target.value})}/>
            </Form.Item>

            <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >



        
            <Input type="text" value={formData.email} onChange={(e)=>setFormData({...formData , email:e.target.value})}/>
            </Form.Item>


            <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone!',
          },
        ]}
      >
            <Input type="text" value={formData.phone} onChange={(e)=>setFormData({...formData , phone:e.target.value})}/>
            </Form.Item>
            <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
            <Input.Password value={formData.password} onChange={(e)=>setFormData({...formData , password:e.target.value})}/>
       </Form.Item>





        

       <Form.Item
        name="isAdmin"
        valuePropName="isAdmin"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >

            <Checkbox type="checkbox" value={formData.isAdmin} onChange={(e)=>setFormData({...formData, isAdmin:(!formData.isAdmin)})} >isAdmin</Checkbox>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >

            <Button type="primary"  style={{backgroundColor:"#D0B8A8"}} onClick={handleSubmit}> Submit data</Button>
            <p>Already have account?<br/><Link to="/">  Login </Link></p>
      </Form.Item>
        </Form>
    </div>
    )
}
