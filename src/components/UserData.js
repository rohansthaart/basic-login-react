import React, { useState,useEffect } from 'react';
import { Divider, Table } from 'antd';
import { useUserContext } from '../context/userContext';
import axios from 'axios';
import EditForm from './EditUserForm';
import {
  EditOutlined,
  DeleteOutlined,
 
} from '@ant-design/icons';
import styled from 'styled-components';






const UserData = () => {
    const {users,fetchUsers,setEditUser,editUser} = useUserContext()
    
    const handleEdit = async (id)=>{
      try{
        const user = await users.find((user)=>user.id === id)
        await setEditUser(user)
        await console.log(editUser);
      }catch(err){
          console.log(err);
      }
    }
     




    const columns = [
      {
        title: 'First Name',
        dataIndex: 'fname',
        
       
      },
      {
        title: 'Last Name',
        dataIndex: 'lname',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
      },
      {
        title: 'Password',
        dataIndex: 'password',
      },
      {
        title: 'isAcive',
        dataIndex: 'isActive',
        render:(_, record)=> record.isActive?<p>active</p>:<p>inactive</p>
      },
      {
        title: 'Edit',
        key: 'operation',
        render:(_,record)=> <p><EditOutlined onClick={()=>{handleEdit(record.id)}}/></p>
      },
      {
        title: 'Delete',
        key: 'operation',
        render:(_, record)=> <p><DeleteOutlined onClick={()=>{deleteUser(record.id)}} /></p>
      },
    ];
    
    
    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
      }),
    };
    
    const deleteUser = async (id)=>{
      try{
       await axios.delete(`http://localhost:3000/posts/${id}`)
       fetchUsers(`http://localhost:3000/posts/`)
      }catch(error){
      }
    }
    
    useEffect(()=>{
      fetchUsers('http://localhost:3000/posts/')
     
  },[])
  

  const [selectionType, setSelectionType] = useState('checkbox');




 




  return (
    <Wrapper>
    <div>
      

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
          
        }}
        columns={columns}
        dataSource={users}
        pagination={{pageSize:5}}
        
      />
      <Divider />
      <p>Active Users: 20</p>
      <p>Inactive Users: 20</p>
    </div>
    {editUser?<EditForm/>:null}
    </Wrapper>
  );
};
export default UserData;










const Wrapper = styled.main`
 margin: 0;
  border: 1px solid #DFD3C3;
  box-shadow:5px 10px #F8EDE3 ;
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)`