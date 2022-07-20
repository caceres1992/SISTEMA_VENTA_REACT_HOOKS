import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid';
import { getAllClientes,getClienteByDniByApi } from '../../services/clienteService';
import { getAllProductos, getProductoById } from '../../services/productoService';
import TableVenta from '../Table/TableVenta'
import FooterDawerVenta from './FooterDawerVenta';
const DrawerVenta = ({ visible, setVisible }) => {


    const [productsData, setProductsData] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({
        idProducto: null,
        quantity: 1,
        modelName: null,
        size: null,
        price: 0,
        total: 0,
    });

    const [clientData, setClientData] = useState([]);
    
    const [clientSelected, setClientSelected] = useState({});
    const [generateDetalleVenta, setGenerateDetalleVenta] = useState({
    });

    const { quantity, price, idProducto } = selectedProduct;
   




    const addSelectedProduct = (idProduct) => {
        console.log(idProduct)
        getProductoById(idProduct).then(res => {
            setSelectedProduct({
                ...selectedProduct, price: res.data.price, idProducto: res.data.id, modelName: res.data.modelName, size: res.data.size
            })
        }).catch(err => { console.log(err) })
    }


    const addProductVenta = (e) => {
        e.preventDefault();
        const price = parseInt(selectedProduct.price)
        const quantity = parseInt(selectedProduct.quantity)
        const total = price * quantity
        const idVentaProducto = v4();
        setSelectedProducts([...selectedProducts, {
            ...selectedProduct, price, quantity, idVentaProducto: idVentaProducto, total: total
        }]);
    }

    const onchangeHandle = (e) => {
        setSelectedProduct({
            ...selectedProduct,
            [e.target.name]: e.target.value
        })
    }

    const plusProducto = (idVentaProducto) => {
        const newArrayProdcuctos = selectedProducts.map((product) => {
            if (product.idVentaProducto === idVentaProducto) {
                product.quantity += 1
                product.total = product.price * product.quantity
                return product
            }
            return product
        })
        setSelectedProducts(newArrayProdcuctos)

    }


    const lessProducto = (idVentaProducto) => {
        const newArrayProdcuctos = selectedProducts.map((product) => {
            if (product.idVentaProducto === idVentaProducto) {
                product.quantity -= 1
                product.total = product.price * product.quantity
                return product
            }
            return product
        })
        setSelectedProducts(newArrayProdcuctos)

    }
    const getClienteByDni = (clientDni) => {
        getClienteByDniByApi(clientDni).then(res => {
           setClientSelected(res);
        }).catch(err => { console.log(err) })
    }

    const deleteProducto = (idVentaProducto) => {
        const newArrayProdcuctos = selectedProducts.filter((product) => product.idVentaProducto !== idVentaProducto)
        setSelectedProducts(newArrayProdcuctos)
    }

    useEffect(() => {

        const getDataByApa = async () => {
            getAllProductos().then((products) => {
                setProductsData(products.data);
            }).catch((error) => { console.log(error) });
            getAllClientes().then((clientes) => {
                console.log(clientes)
                setClientData(clientes);
            })
                .catch((error) => { console.log(error) });
        }



        if (visible) {
            getDataByApa();
        }

    }, [visible, generateDetalleVenta])


    return (
        <Drawer
            width={950}
            visible={visible}
            onClose={() => setVisible(false)}
            footer={
                <FooterDawerVenta setVisible={setVisible} clientSelected={clientSelected} selectedProducts={selectedProducts} />
            }
        >
            <Row gutter={16} style={{ marginBottom: 18 }}>

                <Col span={15}>

                    <Form layout='vertical'>

                        <Col >
                            <Row gutter={12}>
                                <Col md={12}>
                                    <Form.Item label="DNI">
                                        <Select placeholder="BUSCAR CLIENTE POR DNI" showSearch  onChange={(value)=>getClienteByDni(value)}>
                                            {clientData?.map((client) => {
                                                return (
                                                    <Select.Option key={client.id} value={client.dni}>{client.dni}</Select.Option>
                                                )
                                            })}
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col md={12}>
                                    <Form.Item label="Nombre">
                                        <Button block type='primary'>Buscar online</Button>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row gutter={6}>
                                <Col md={12}>
                                    <Form.Item label="Nombres">
                                        <Input placeholder="Jhon " value={clientSelected?.nombre} />
                                    </Form.Item>
                                </Col>
                                <Col md={12}>
                                    <Form.Item label="Apellidos">
                                        <Input placeholder='Doe' value={clientSelected?.apellidoPaterno+ clientSelected?.apellidoMaterno} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item label="Direccion">
                                <Input placeholder='av la paz 123' value={clientSelected?.direccion !=null  ? clientSelected.direccion:"NO TIENE"} />
                            </Form.Item>
                        </Col>
                    </Form>
                </Col>
                <Col span={9}>
                    <Form layout='vertical' onSubmitCapture={addProductVenta}>
                        <Form.Item label="Producto">
                            <Select onChange={addSelectedProduct}  size='large' showSearch placeholder="Producto">
                                {productsData?.map((product) =>
                                    <Select.Option className='text-sm' key={product.id} value={product.id}>{product.modelName + ""}
                                        <Row className='items-center'> talla <span className='text-cyan-700 mx-3 '>{product.size.toUpperCase()}</span>   </Row>
                                    </Select.Option>
                                )}
                            </Select>
                        </Form.Item>

                        <Form.Item label="cantdiad">
                            <Input onChange={onchangeHandle} name="quantity" size='large' min={0} max={100} type={"number"}  placeholder="cantidad" />
                        </Form.Item>

                        <Form.Item label="Precio">
                            <Input onChange={onchangeHandle} name="price" size='large' type={"number"} value={price} placeholder="Producto" />


                        </Form.Item>
                        <Button className='text-blue-400' type='primary' htmlType='submit' block>Agregar producto</Button>
                    </Form>

                </Col>

            </Row>
            <TableVenta selectedProducts={selectedProducts} lessProducto={lessProducto} plusProducto={plusProducto} deleteProducto={deleteProducto} />
        </Drawer>
    )
}

export default DrawerVenta