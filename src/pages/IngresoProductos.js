import { Button, Card, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { columnsAddStock } from '../components/ColumnsTable/ColumnsAddStock'
import { columnsproducto } from '../components/ColumnsTable/ColumnsProducto'
import DrawerAddStock from '../components/Drawer/DrawerAddStock'
import { getListStockAdd } from '../services/addStcokService'
import { getAllProductos } from '../services/productoService'

const IngresoProductos = () => {

  const [productosData,setProductosData]=useState([])
  const [refreshApi,setRefreshApi]=useState(true)
  const [visible,setVisible]=useState(false)
  

const getProductByID=async(id)=>{
  // const producto=await getAllProductos()
  // const productoById=producto.data.filter(producto=>producto.id===id)
  // return productoById[0]
}

    useEffect(() => {
      const getProductoList =  () => {
        getListStockAdd().then((productos) => {
          setProductosData(productos.data);
          console.log(productos);
        }).catch((error) => {console.log(error)});
      }
      if(refreshApi){
        getProductoList()
        setRefreshApi(false)
      }
   
    }, [refreshApi]);

  return (
    <Card
    bordered={false}
    className="criclebox tablespace mb-24"
    title="Ingresar Stock a Productos"
    extra={<Button onClick={()=>setVisible(true)}>Registrar Stock a Producto</Button>}
   >

      <Table dataSource={productosData} columns={columnsAddStock}/>
      <DrawerAddStock isVisible={visible} setVisible={setVisible} setRefreshApi={setRefreshApi} />
    </Card>
  )
}

export default IngresoProductos