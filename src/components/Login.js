import React ,{useState} from 'react'
import axios from 'axios'
import { Button, Checkbox, Form, Input } from 'antd';
const Login = () => {

    const [formData,setFormData] = useState({
        name:"",
        password:'',
        rememberMe:false
    })


const handleSubmit = async (e)=>{
e.preventDefault()
    let response = await axios.post('http://localhost:3000/posts',formData);
    if(response){
        alert('data submitted sucessfully')
    }else{
        alert('something went wrong')
    }
    setFormData({
        email:"",
        password:'',
        rememberMe:false
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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
            <Input type="text" value={formData.email} onChange={(e)=>setFormData({...formData , email:e.target.value})}/>
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
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >

            <Checkbox type="checkbox" value={formData.rememberMe} onChange={(e)=>setFormData({...formData, rememberMe:(!formData.rememberMe)})} >Remember me</Checkbox>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >

            <Button type="primary" style={{backgroundColor:"#D0B8A8"}} onClick={handleSubmit}> Submit data</Button>
      </Form.Item>
        </Form>
    </div>
  )
}

export default Login