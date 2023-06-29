import './App.css';
import { Button, Table } from 'antd';
import { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function App() {
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: 'Giselly',
      email: 'giselly@gmail',
      address: 'Giselly Rocha',
    },
    {
      id: 2,
      name: 'Giselly',
      email: 'giselly@gmail',
      address: 'Giselly Rocha',
    },
    {
      id: 3,
      name: 'Giselly',
      email: 'giselly@gmail',
      address: 'Giselly Rocha',
    },
    {
      id: 4,
      name: 'Giselly',
      email: 'giselly@gmail',
      address: 'Giselly Rocha',
    },
  ]);

  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: '2',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: '3',
      title: 'Email',
      dataIndex: 'email',
    },
    {
      key: '4',
      title: 'Address',
      dataIndex: 'adress',
    },
    {
      key: '5',
      title: 'Actions',
      render: (record) => {
        return;
      },
    },
  ];

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: 'Name ' + randomNumber,
      email: randomNumber + '@gmail.com',
      address: 'Address ' + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };
  return (
    <>
      <Button onClick={onAddStudent}> Add a New Student </Button>
      <Table columns={columns} dataSource={dataSource}></Table>
    </>
  );
}

export default App;
