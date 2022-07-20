
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Typography,
  Tag,
} from "antd";

import {HiOutlinePencilAlt} from 'react-icons/hi'

import { useEffect, useState } from "react";
import { ProductoData } from "../data/ProductoData";
import DrawerWrapper from "antd/lib/drawer";
import DawerProducto from "../components/Drawer/DawerProducto";
import { columnsproducto } from "../components/ColumnsTable/ColumnsProducto";
import { getAllProductos, getProductoById } from "../services/productoService";




function Producto() {
const [productosData,setProductosData]=useState([])
const [refreshApi,setRefreshApi]=useState(true)
const [visible,setVisible]=useState(false)
const [selectedProduct,setSelectedProduct]=useState(null)
  useEffect(() => {
    const getProductoList =  () => {
      getAllProductos().then((productos) => {
        setProductosData(productos.data);
        console.log(productos);
      }).catch((error) => {console.log(error)});
    }
    if(refreshApi){
      getProductoList()
      setRefreshApi(false)
    }
 
  }, [refreshApi]);

  const _getProductoById=(product)=>{

    const {id}=product;
    getProductoById(id).then((res)=>{
      setSelectedProduct(res.data);
      setVisible(true);
    })
    .catch((error)=>{console.log(error)})
  }

const onchangeVisibility=()=>{
  setVisible(!visible);
  setSelectedProduct(null)
}

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Tabla de Productos"
              extra={
                <>
                  <Button type="default" onClick={()=>setVisible(true)}>Agregar Nuevo Producto </Button>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                
                  columns={columnsproducto(_getProductoById)}
                  dataSource={productosData.length>0?productosData:[]}
                  className="ant-border-space"
                
                />
              </div>
          
            </Card>
          </Col>
        </Row>
      </div>
         <DawerProducto  setRefreshApi={setRefreshApi} visible={visible} onchangeVisibility={onchangeVisibility}  selectedProduct={selectedProduct}/>   
    </>
  );
}

export default Producto;
