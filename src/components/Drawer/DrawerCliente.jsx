import { Button, Col, Divider, Drawer, Form, Input, message, Row, Select, Space } from 'antd'
import React from 'react'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { AiOutlineSearch } from 'react-icons/ai'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaClient } from '../../validation/ValidationClient'
import { addClient } from '../../services/clienteService'
const DawerCliente = ({ visible, setVisible }) => {
  


    const {control,handleSubmit,formState:{errors}} = useForm({
        resolver: yupResolver(schemaClient)
    })

   
   

    const onSubmitCliente = (data) => {
     
        addClient(data).then(res => {
            
            setVisible(false)
        }).catch(err => {  
            if(err.response.status === 422){
                message.warning("Porfavor El DNI ya existe, intente con otro DNI")
            }else{
                message.error("Error al agregar el cliente")
            }
           })
       
    }
    return (
        <Drawer
            width={450}
            onClose={() => setVisible(false)}
            visible={visible}
            footer={
                <Button block form='formClient' htmlType='submit'>Agregar</Button>
            }
        >
            <Form layout='vertical' id='formClient' onSubmitCapture={handleSubmit(onSubmitCliente)}>
            <Divider ><span className='text-sm'>Datos Personales</span></Divider>

                <Form.Item label="DNI">
                    <Row gutter={6}>
                        <Col span={12}>
                         <InputControl control={control} name="dni"/>
                            {errors?.dni && <span className='text-red-500'>{errors.dni.message}</span>}
                            {}
                        </Col>
                        <Col span={12}>
                            <Button block className='flex items-center  justify-center' icon={<AiOutlineSearch />}>buscar</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Row gutter={6}>

                    <Col span={12}>
                        <Form.Item label="Nombres">
                        <InputControl control={control} name="name"/>
                        {errors?.name && <span className='text-red-500'>{errors.name.message}</span>}

                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item label="Apellidos">
                        <InputControl control={control} name="lastName"/>
                        {errors?.lastName && <span className='text-red-500'>{errors.lastName.message}</span>}

                        </Form.Item>
                    </Col>
                    
                    <Col span={24}>
                        <Divider ><span className='text-sm'>Informacion de contacto</span></Divider>
                        <Form.Item label="Domicilio">
                        <InputControl control={control} name="address"/>
                        {errors?.address && <span className='text-red-500'>{errors.address.message}</span>}
                        </Form.Item>

                        <Form.Item label="Telefono celular">
                        <InputControl control={control} name="phone"/>
                        {errors?.phone && <span className='text-red-500'>{errors.phone.message}</span>}
                        </Form.Item>
                        <Form.Item label="Email">
                        <InputControl control={control} name="email"/>
                        {errors?.email && <span className='text-red-500'>{errors.email.message}</span>}
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Drawer>
    )
}

export default DawerCliente


export const InputControl=( {control,name})=>{

    return <Controller 
        control={control}
        name={name}
        render={({field})=> <Input {...field}/>}
      />
}
