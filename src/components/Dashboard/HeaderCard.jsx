import { Col, Row, Space, Tag, Typography } from 'antd'
import moment from 'moment'
import React from 'react'
import ImageVector from '../../assets/images/undraw_empty_cart_co35.svg'

const HeaderCard = () => {
    return (
        <Row gutter={24} style={{ height: 250, backgroundColor: '#1890ff', borderRadius: 10, overflow: 'hidden' }}>
            <Col span={12}>
                <Row style={{flexDirection:'column',height:'100%'}} justify="space-between">

                <Col>
                    <Tag style={{ padding: 5, borderRadius: 10, marginTop: '1rem' }}>{moment().format('LLL')}</Tag>
                </Col>
                <Col style={{marginBottom: '1rem'}}>
                <h1 style={{color:"#3D4646",fontSize:24,lineHeight:"26px",padding:0,margin:0}}>Bienvenido usuario Jasson </h1>
                <Typography.Text  style={{color:"#3D4646"}}>codigo: F345V4 </Typography.Text>
                </Col>
                </Row>
                
            </Col>
            <Col span={12}  style={{ alignContent:'end',textAlign:'center',marginTop:'auto',marginBottom:10 }}>
                <img style={{height:'170px'}} src={ImageVector} alt="" />
            </Col>

        </Row>
    )
}

export default HeaderCard