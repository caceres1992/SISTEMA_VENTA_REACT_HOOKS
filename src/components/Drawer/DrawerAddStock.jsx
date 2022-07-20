import { Button, Drawer, Form, Input, message, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 } from 'uuid'
import { schemaAddStock } from '../../validation/ValidationAddStock'
import { InputController, InputNumberController } from '../ComponentHtml'
import { yupResolver } from '@hookform/resolvers/yup'
import { getAllProductos } from '../../services/productoService'
import { addApiStocktoProducto } from '../../services/addStcokService'
const DrawerAddStock = ({isVisible,setVisible,setRefreshApi}) => {

  const [productsData, setProductosData] = useState([])
  const {control,handleSubmit , formState:{errors},register,reset} = useForm(
    { resolver: yupResolver(schemaAddStock),

  //     defaultValues:{

  //   idProduct: '',
  //   quantity: '',
  //   provedor: '',
  //   nrGuia:v4()
  })

  const registerStock = (stock) =>{
    addApiStocktoProducto(stock).then(res => {
     message.success(`se agrego el stock de ${stock.modelName} correctamente`)
     setVisible(false)
     setRefreshApi(true)
     reset()
    }).catch(err => console.log(err));
    console.log(stock);
  }
  
  const getProductByApi = () => {
    getAllProductos().then((products) => {
      setProductosData(products.data);
    }).catch((error) => {console.log(error)});
  }


  useEffect(() => {
  
    getProductByApi();
 
  }, [0]);

  return (
    <Drawer width={350} visible={isVisible} onClose={() => setVisible(false)}
    footer={(     <Button form='formAddStock' htmlType='submit'  block  >Registrar Stock</Button>)}
    >

        <Form layout='vertical' id='formAddStock'  onSubmitCapture={handleSubmit(registerStock)}>

        <Form.Item label="Nombre del Proveedor">
            <InputController control={control} name="provider"/>
            {errors?.provider && <span className='error'>{errors?.provider?.message}</span>}

            </Form.Item>
            
            <Form.Item label="Producto">
              <select className='selectCustom' placeholder='algo' size='large' {...register("idProduct")}>
                {productsData?.map((product) => (
                   <option key={product.id}  value={product.id}>{product.modelName}</option>
                   ))
   
                }
                  
                </select>
            { errors?.idProduct && <span className='error'>{errors.idProduct.message}</span>}
            </Form.Item>
            <Form.Item label="Cantidad a registrar">
              <InputController control={control} name="quantity"/>
              {errors?.quantity && <span className='error'>{errors?.quantity?.message}</span>}

            </Form.Item>

        

            <Form.Item label="Costo del producto">
            <InputNumberController control={control} name="price"/>
            {errors?.price && <span className='error'>{errors?.price?.message}</span>}
            </Form.Item>

            <Form.Item label="Nro de guia"> 
              <InputController control={control} name="guideNumber"/>
            {errors?.guideNumber && <span className='error'>{errors?.guideNumber?.message}</span>}

              </Form.Item> 
       
        </Form>
    </Drawer>
  )
}

export default DrawerAddStock