import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Drawer, Form, Input, message } from 'antd'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { addApiCategory, updateCategoryById } from '../../services/categoryService'
import { schemaCategory } from '../../validation/ValidationCategory'

const DrawerCategory = ({visible,setVisible,selectedCategory}) => {

    const {control,formState:{errors},handleSubmit,reset,setValue} = useForm({
       resolver: yupResolver(schemaCategory),
    defaultValues:{
        name:null,
        description:""
    }
    })

const addProduct = (data)=>{
    
    if(selectedCategory){
        updateCategory(data)
    }else{
        addApiCategory(data).then(res=>{
            message.success(`se agrego la categoria ${res.data.name} correctamente`)
            reset()
            setVisible(false)
        }).catch(err=>{console.log(err)})
    }
} 



const updateCategory = (data)=>{
    const {id} = selectedCategory
    updateCategoryById(id,data).then(res=>{
        message.info(`se actualizo la categoria ${res.data.name} correctamente`)
        reset()
        setVisible(false)
    }).catch(err=>{console.log(err)})
}
const setValueCategory = ()=>{
    setValue("name",selectedCategory.name,{shouldValidate:true})
    setValue("description",selectedCategory.description,{shouldValidate:true})
}

useEffect(() => {
    
    if(selectedCategory){
        setValueCategory()
    }
}, [selectedCategory])
  return (
    <Drawer
    
    onClose={()=>{
        setVisible(false)
        reset()
    }}
    visible={visible}
    width={400}
    title="Add Category"
    footer={<Button block size='large' type='primary' className='bg-blue-500 hover:bg-blue-400 text-white uppercase ' form='formCategory' htmlType='submit'>Agregar Prdocuto</Button>}
    
    >
        <Form id='formCategory' layout='vertical' onSubmitCapture={handleSubmit(addProduct)}>
            <Form.Item
                label="Nombre de Categoria"
                required
            >
                <InputControler control={control} name="name" placeholder='nombre'/>
                {errors?.name && <span className='text-red-400 font-semibold text-xs'>{errors.name.message}</span>}
            </Form.Item>

            <Form.Item
                label="Descripcion"
                
            >
               <InputControler control={control} name="description" placeholder="Alguna descripcion"/>
            </Form.Item>
        </Form>
    </Drawer>
  )
}

export default DrawerCategory

const InputControler = ({control,name,placeholder})=>{
   return( <Controller
    control={control}
    key={name}
    name={name}
    render={({field})=> (<Input className='uppercase' placeholder={placeholder} {...field}/>)}
    />)
}