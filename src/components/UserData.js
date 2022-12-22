import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import { useUserContext } from '../context/userContext';
import styled from 'styled-components';


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
  },
  {
    title: 'Edit',
    key: 'operation',
    render:()=> <p>;:</p>
  },
];
const data = [
  {
    key: '1',
    fname: 'John ',
    lname: 'Brown',
   email:'rohanstha000@gmail.com',
   phone:'9843686191',
   password:'test'
  },
  {
    key: '2',
    fname: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    fname: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    fname: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },{
    key: '5',
    fname: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '6',
    fame: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
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
const UserData = () => {
    const {users} = useUserContext()
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