import { Button, Drawer, Form, Input, Row, Select, Space } from 'antd'
import React from 'react'
import { useState } from 'react'

const DawerIngresoProducto = ({ visible, setVisible }) => {
    const [saveProducto , setSaveProducto] = useState({
        idCategoria:"",
        brandName:"",
        modelName:"",
        color:"",
        size:"",
        quantity:"",
        price:"",
    })

   const ProductColors = ["red", "blue", "green", "black","white"]
   const ProductSize = ["small", "medium", "large", "x large"]
 
    return (
        <Drawer
        width={400}
            onClose={() => setVisible(false)}
            visible={visible}
            footer={
                <Button block>Agregar</Button>
            }
        >
            <Form layout='vertical'>
                <Form.Item label="Categoria">
                    <Select   showSearch placeholder="Seleccione una categoria">
                        <Select.Option  value="1">Categoria 1</Select.Option>
                        <Select.Option value="2">Categoria 2</Select.Option>
                        <Select.Option value="3">Categoria 3</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Nombre de la Marca">
                    <Input  placeholder='Ingresar Marca' />
                </Form.Item>
                <Form.Item label="Nombre de Modelo">
                    <Input placeholder='Ingresar Modelo' />
                </Form.Item>
                <Form.Item  label="Seleccionar Color">
                    <Space>
                    {ProductColors.map((color, index) => (
                    <div title={color} key={index} style={{width:25,height:25,borderRadius:'50%',background:color,cursor:'pointer',boxShadow:'0px  1px  5px rgba(0,0,0,0.3)'}}/>
                    ))}
                    </Space>
                </Form.Item>

                <Form.Item  label="Seleccionar Talla">
                <Select showSearch placeholder="Seleccione una talla" >
                    {ProductSize.map((size, index) => (
                <Select.Option key={index}  value={size}>{size.toUpperCase()}</Select.Option>
                    ))}
                    </Select>
                </Form.Item>
                <Form.Item label="Insertar cantidad">
                    <Input placeholder='Cantidad'/>
                </Form.Item>
                <Form.Item label="Precio">
                    <Input placeholder='S/0.00'/>
                </Form.Item>
            </Form>
            </Drawer>
    )
}

export default DawerIngresoProducto