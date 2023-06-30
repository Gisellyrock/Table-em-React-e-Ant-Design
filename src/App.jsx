import './App.css';
import { Button, Table, Modal } from 'antd';
import { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function App() {
  const [isEditing, setIsEditing] = useState(false);
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
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: 'red', marginLeft: 12 }}
            />
          </>
        );
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

  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: 'Are you sure, you want to delete this student record?',
      okText: 'Yes',
      okType: 'danger',
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
    setDataSource((pre) => {
      return pre.filter((student) => student.id !== record.id);
    });
  };

  const onEditStudent = (record) => {
    setIsEditing(true);
  };
  return (
    <>
      <Button onClick={onAddStudent}> Add a New Student </Button>
      <Table columns={columns} dataSource={dataSource}></Table>
      <Modal
        title="Edit Student"
        open={isEditing}
        onCancel={() => {
          setIsEditing(false);
        }}
        onOk={() => {
          setIsEditing(false);
        }}
      ></Modal>
    </>
  );
}

export default App;
