import { Button, Card, Col, Drawer, Row, Table } from 'antd'
import React, { useEffect } from 'react'
import { AiOutlineEdit, AiOutlineUserDelete } from 'react-icons/ai'
import DawerCliente from '../components/Drawer/DrawerCliente'
import { getAllClientes } from '../services/clienteService'

const Cliente = () => {
  const [visible, setVisible] = React.useState(false)
  const [data, setData] = React.useState([])

  useEffect(() => {
   if(!visible){
      getAllClientes().then((response) => {
        setData(response)
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    }

  }, [visible])

  const columns = [
    {
      title: "Nro Documento",
      dataIndex: "dni",
      key: "dni",
    },
    {
      title: "Nombre completo",
      dataIndex: "name",
      key: "name",
      render: (_, record) => <span className='uppercase'>{record.lastName +", "+ record.name}</span>
    },
    {
      title: "Direccion",
      dataIndex: "address",
      key: "address",
      render: (_,value) => <span className='uppercase'>{value.address == null?"No registrado ":value.address}</span>

    },
    {
      title: "Correo electronico",
      dataIndex: "email",
      key: "email",
    },
    {
      title:"Acciones",
      key: "action",
      render: (text, record) => (
        <div key={record.id}>
          <Row gutter={6}>
            <Col span={12}>
            <Button block  type="primary" className='text-blue-500  justify-center flex items-center p-0' icon={<AiOutlineEdit size={20}/>} onClick={() => {}}/>
            </Col>
            <Col span={12}>
            <Button block   type="primary" className='text-red-400 hover:bg-red-400 focus:bg-red-400 focus:border-red-400 hover:border-red-400 border-red-400 justify-center flex items-center' icon={<AiOutlineUserDelete size={20}/>} onClick={() => {}}/>
            </Col>
          </Row>
        </div>
      )
    }

  ]
  return (
    <Card
      title="Tabla de Clientes"
      extra={
        <Button type="default" onClick={() => setVisible(true)}>Agregar Nuevo Cliente</Button>}>

      <Table dataSource={data} columns={columns} />
      <DawerCliente setVisible={setVisible} visible={visible} />
    </Card>
  )
}

export default Cliente