
import {
  Row,
  Col,
  Card,
  Button,
  Table,
} from "antd";
import DrawerVenta from "../components/Drawer/DrawerVenta";
import { useEffect, useState } from "react";
import { getAllProductos } from "../services/productoService";
import { getAllSales } from "../services/SaleService";
import { columnsAllSale } from "../components/ColumnsTable/ColumnnsAllSale";

const  Venta=()=> {


const [visible, setVisible] = useState(false);

const [dataProducts, setDataProducts] = useState([]);

useEffect(() => {
  const getAllSalesByApi = () => {
      getAllSales().then(res => {
          setDataProducts(res.data);
      }).catch(err => { console.log(err) })
  }

  if (!visible) {
    getAllSalesByApi();
  }
}, [visible]);

  return (
    <>
         <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col  xs={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Tabla de Ventas"
              extra={
                <>
                  <Button type="default" onClick={()=> setVisible(true)}>Generar Nueva Venta </Button>
                </>
              }
            >
              <div className="table-responsive">
               
                <Table className="ant-border-space" dataSource={dataProducts} columns={columnsAllSale}
                />
              </div>
           <DrawerVenta visible={visible} setVisible={setVisible}/>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Venta;
