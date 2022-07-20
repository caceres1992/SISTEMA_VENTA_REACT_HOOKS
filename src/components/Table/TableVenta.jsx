import { Button, Card, Row, Table } from 'antd'
import { MdRemoveShoppingCart } from 'react-icons/md'
import React, { useEffect } from 'react'

const TableVenta = ({selectedProducts,plusProducto,deleteProducto,lessProducto}) => {



const columns = [
    {
        title: 'Producto',
        dataIndex: 'modelName',
        key: 'modelName',
        width: '40%'
    },

    {
        title: 'Talla',
        dataIndex: 'size',
        key: 'size',
        width: '10%'
    },

    {
        title: 'precio',
        dataIndex: 'price',
        key: 'price',
        width: '10%'
    },
    {
        title: 'cantidad',
        dataIndex: 'quantity',
        key: 'quantity',
        width: '10%',
        render: (quantity,record) =><div key={record.idVentaProducto}> <Button disabled={quantity <=1} onClick={()=> lessProducto(record.idVentaProducto)}> - </Button> {quantity} <Button onClick={()=>plusProducto(record.idVentaProducto)}>+</Button> </div> 
    },   {
        title: 'subtotal',
        dataIndex: 'subtotal',
        key: 'subtotal',
        width: '10%',
        render: (_, record) => <div key={record.idVentaProducto}>
            {record.price * record.quantity}
        </div>
    },
    {
        title: '',
        width: '10%',
        render:(text,i)=><MdRemoveShoppingCart color='red' style={{cursor:'pointer'}} onClick={()=> deleteProducto(i.idVentaProducto)}/>
    },
]
useEffect(()=>{
    console.log(selectedProducts)
},[selectedProducts])

  return (
    <Row>
        <Card style={{width:'100%'}}>
            <div className='table-responsive'>
            <Table   pagination={false} className="ant-border-space color-gr"  dataSource={selectedProducts} columns={columns} />
            </div>
        </Card>
    </Row>
  
  )
}

export default TableVenta