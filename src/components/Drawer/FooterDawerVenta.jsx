import { Button, Col, Input, Row, Space } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/fashoown.png'

const FooterDawerVenta = ({ selectedProducts, clientSelected, setVisible }) => {
    const [paywith, setPaywith] = useState(0)

    const sumarTodal = (prev, curr) => {
        return prev + curr
    }

    const total = selectedProducts.map(product => product.total).reduce(sumarTodal, 0)
    const subTotal = total - (total * 0.18)
    const IGV = parseFloat((total * 0.18).toFixed(2))

    const generarVenta = () => {
        const productos = selectedProducts.map(product => ({ idProduct: product.idProducto, stock: product.quantity, price: product.price }))
        const ventaDetalle = {
            idCliente: clientSelected?.id,
            idVendedor: 1,
            requestProducto: productos,
            subTotal: subTotal,
            total: total
        }
        console.log(ventaDetalle)
        agregarVenta(ventaDetalle)

    }
    const agregarVenta = (ventaDetalle) => {

        if (ventaDetalle.requestProducto.length > 0) {
            axios.post('http://localhost:8080/api/productoventas', ventaDetalle)
                .then(res => {
                    console.log(res)
                    setVisible(false)

                }).catch(err => {
                    console.log(err)
                })
        } else {
            alert('No hay productos para vender')
        }

    }
    return (
        <>
            <Row>
                <Col span={12}>
                    <img src={Logo} className="h-40" alt="" />
                    <h2 className='uppercase py-2 text-gray-500 font-bold'><strong>Usuario : </strong>  Jasson Caceres</h2>
                </Col>
                <Col span={12}>
                    <Space direction='vertical'>
                        {/* <p>SUB TOTAL {selectedProducts.length>0? selectedProducts.map(item=> item.total).reduce(sumarTodal) :0}</p> */}
                        <Row><Col span={12}> SUB TOTAL : </Col> <Col span={12}>S/ {subTotal.toFixed(2)}</Col></Row>
                        <Row><Col span={12}> IGV : </Col> <Col span={12}>S/ {IGV}</Col></Row>
                        <Row><Col span={12}> TOTAL : </Col> <Col span={12}>S/ {total.toFixed(2)}</Col></Row>
                        <Row><Col span={12}> PAGA CON  : </Col> <Col span={12}><Input placeholder='S/100' onPressEnter={(e) => setPaywith(e.target.value)} onBlur={(e) => setPaywith(e.target.value)} /></Col></Row>
                        <Row><Col span={12}> VUELTO : </Col> <Col span={12}>S/{(paywith - total) > 0 ? (paywith - total).toFixed(2) : 0}</Col></Row>



                    </Space>
                </Col>
            </Row>
            <Button block type='primary' size='large' className='text-blue-500' onClick={generarVenta} >Generar Venta</Button>
        </>

    )
}

export default FooterDawerVenta