import { Button, Col, Drawer, Form, Input, InputNumber, message, Radio, Row, Select, Space, Tag, Upload } from 'antd'
// import { Listbox } from '@headlessui/react'
import React, { useEffect } from 'react'
import NumberFormat from 'react-number-format';
import { useState} from 'react'
import { UploadOutlined } from '@ant-design/icons'
import axios from 'axios'
import { addProducto, updateProductById } from '../../services/productoService'
import { getAllCategories } from '../../services/categoryService'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaProduct } from '../../validation/ValidationProduct'
import { v4 } from 'uuid'


const ProductSize = ["small", "medium", "large", "xlarge"]
const DawerProducto = ({ visible, onchangeVisibility ,setRefreshApi,selectedProduct}) => {
 
const {control,formState:{errors},handleSubmit,register,setValue,reset} = useForm({
    resolver: yupResolver(schemaProduct),
    defaultValues:{
        idCategory: 1,
        brandName: "",
        modelName: "",
        color: "",
        urlImage:null,
        size: "",
        stock: 0,
        price: 0
    }
})



 
    const [categoryData, setCategoryData] = useState([]);
  
    const ProductColors = ["Rojo", "Azul", "Verde", "Negro", "blanco"]

   
    const updateProduct = (product) =>{
        console.log(product)
    const {id}= selectedProduct;
        updateProductById(id,product).then(res => {
            message.info(`se actualizo el producto ${res.data.modelName} correctamente`)
            setRefreshApi(true)
        }).catch(err => console.log(err));
    }


    const submitProducto = (e) => {
        if(selectedProduct){
            updateProduct(e)
        }else{

        addProducto(e).then(res => {
            console.log(res)
            setRefreshApi(true)
            reset();
            onchangeVisibility()
           
        }).catch(err => {console.log(err)})
    }
    }



   const updaloadImage = async(file) => {
       console.log(file)

       let body = new FormData();
       body.set('key', 'a72713895d6d3f7f2f96c80887471995');
       body.append('image',file );
        const url =await  axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload',
            data: body,
            headers: { "Content-Type": "multipart/form-data" }
        })

      setValue("urlImage",url.data.data.url)

    }


    const setValuesToForm = () => {
        setValue("idCategory",selectedProduct?.category?.id,{shouldValidate:true})
        setValue("brandName",selectedProduct.brandName,{shouldValidate:true})
        setValue("modelName",selectedProduct.modelName,{shouldValidate:true})
        setValue("color",selectedProduct.color,{shouldValidate:true})
        setValue("urlImage",selectedProduct.urlImage)
        setValue("size",selectedProduct.size,{shouldValidate:true})
        setValue("stock",selectedProduct.stock,{shouldValidate:true})
        setValue("price",selectedProduct.price,{shouldValidate:true})
    }

useEffect(() => {
    const getCategoryList = async ( ) => {
    
    getAllCategories().then((res) => {
        setCategoryData(res.data)
        console.log(res.data)
    }).catch((err) => {console.log(err)})
    }

    if(selectedProduct){
        setValuesToForm()
        console.log(selectedProduct)
    }

    getCategoryList()
}, [selectedProduct])

    return (
        <Drawer
            width={400}
            onClose={() =>{ onchangeVisibility()
            reset()
            }}
            visible={visible}
            footer={
                <Button form='formularioProducto' block htmlType='submit'>{selectedProduct?.id?"Editar":"Agregar"}</Button>
            }
        >
            <Form id='formularioProducto' layout='vertical' onSubmitCapture={handleSubmit(submitProducto)}>
                <Form.Item label="Categoria">
                    <select className="selectCustom"
                     {...register("idCategory")}  >
                        {categoryData?.map((cat, index) => (
                            <option key={index} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                    {errors?.idCategory && <span className='text-red-400 font-semibold text-xs'>{errors.idCategory?.message}</span>}
                </Form.Item>
                <Form.Item label="Imagen del Producto">
                <Upload
                    name='urlProducto'
                    listType="picture"                  
                    maxCount={1}
                    beforeUpload={(file) => {
                    
                        updaloadImage(file)
                        return false
                    }}
                >
                    <Button icon={<UploadOutlined />}>cargar una imagen</Button>
                    </Upload>
                </Form.Item>
           
          
                <Form.Item label="Nombre de la Marca" required>
                    <InputControler name='brandName' control={control} />
                    {errors?.brandName && <span className='text-red-400 font-semibold text-xs'>{errors.brandName?.message}</span>}

                </Form.Item>
                <Form.Item label="Nombre de Modelo" required>
                <InputControler name='modelName' control={control} />
                    {errors?.modelName && <span className='text-red-400 font-semibold text-xs'>{errors.modelName?.message}</span>}

                </Form.Item>
                <Form.Item label="Seleccionar Color">
                    <Space>
                    <RadioControler control={control} options={ProductColors} name="color"  />
                    </Space>
                </Form.Item>

                <Form.Item label="Seleccionar Talla">
                    <select className='selectCustom' placeholder="Seleccione una talla" {...register("size")}>
                        {ProductSize.map((size, index) => (
                            <option key={index} value={size}>{size.toUpperCase()}</option>
                        ))}
                    </select>
                    {errors?.size && <span className='text-red-400 font-semibold text-xs'>{errors.size?.message}</span>}

                </Form.Item>
                <Form.Item label="Insertar cantidad">
                <InputControler name='stock' control={control} />
                    {errors?.stock && <span className='text-red-400 font-semibold text-xs'>{errors.stock?.message}</span>}

                </Form.Item>
                <Form.Item label="Precio">
      
                    <InputCurrency name={"price"} control={control} />
                    {errors?.price && <span className='text-red-400 font-semibold text-xs'>{errors.price?.message}</span>}

            
                {/* <InputControler name='price' control={control} /> */}
                

                </Form.Item>
            </Form>
        </Drawer>
    )
}

export default DawerProducto





const InputControler = ({ control,name }) => {
    return (
        <Controller 
        control={control}
        name={name}
        
        render={({field})=> <Input {...field} />}
       />
    )
}

const RadioControler = ({ control,name,options }) => {
    return (
        <Controller 
        control={control}
        name={name}
        render={({field})=> <Radio.Group {...field} options={options}  optionType="button"     buttonStyle="solid"/>}
       />
    )
}


const InputCurrency= ({control,name})=>{
    return <Controller
    name={name}
    control={control}
    render={({field})=> <InputNumber  size='large' className='w-full' {...field} 
    formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
    />}
    />
}