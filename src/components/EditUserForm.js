import axios from 'axios'
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form, Input,Alert  } from 'antd';
import { useUserContext } from '../context/userContext'
function EditForm() {
   
    const {
            editUser,
            fetchUsers,
            setEditUser,
            isAdmin,id,
            fetchSingleUser,
            setIsEdited
        } = useUserContext()

        const [formData,setFormData] = useState({
            fname:editUser.fname,
            lname:editUser.lname,
            email:editUser.email,
            password:editUser.password,
            phone:editUser.phone,
            isAdmin:editUser.isAdmin,
            isActive:editUser.isActive
        })
console.log(formData.isActive);

    const submitEdit =async (e)=>{
        e.preventDefault()
        try{
            await axios.patch(`http://localhost:3000/posts/${editUser.id}`,formData)
        fetchUsers(`http://localhost:3000/posts`)
            setEditUser()
            setIsEdited(true)
        }catch(error){  
            console.log(error);
        }
    }
  return (
    <div> 
        <h3>{`Edit user with id: ${editUser.id}`}</h3>
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
        name="edit"
        valuePropName="edit"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >

    

            <Button type="primary"  style={{backgroundColor:"#D0B8A8"}} onClick={submitEdit}>Edit Data</Button>
      </Form.Item>
        </Form>
   
   </div>
  )
}

export default EditForm