import React ,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import { useUserContext } from '../context/userContext';
const Login = () => {
const {users,setIsLogin} = useUserContext()
const navigate = useNavigate()
console.log(users);
    const [formData,setFormData] = useState({
        name:"",
        password:'',
     
    })


const handleSubmit = async (e)=>{
e.preventDefault()
  const isUser =  users.find((user)=>user.email == formData.email && user.password == formData.password && user.isAdmin == true)
  if(isUser){
    alert('login sucessful')
    setIsLogin(true)
    navigate('/dashboard')
  }else{
    alert('invalid username or password or user is not admin')
    setFormData({
      name:"",
      password:'',
    
  })

  }
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
        label="Email"
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

            <Button type="primary" style={{backgroundColor:"#D0B8A8"}} onClick={handleSubmit}>Login</Button>
            <p>Don't have an account?<br/><Link to='/register'>Register </Link></p>
      </Form.Item>
        </Form>
    </div>
  )
}

export default Login