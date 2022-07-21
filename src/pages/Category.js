import { Button, Card, Table } from 'antd';
import React, { useEffect, useState } from 'react'
import { columnsCategory } from '../components/ColumnsTable/ColumnsCategory';
import DrawerCategory from '../components/Drawer/DrawerCategory'
import { getAllCategories, getCategoryById } from '../services/categoryService';

const Category = () => {

    const [visible, setVisible] = useState(false);
    const [dataProducts, setDataProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    useEffect(() => {
        const getAllCategoriesByApi = () => {
            getAllCategories().then(res => {
                setDataProducts(res.data);
            }).catch(err => { console.log(err) })
        }
        if (!visible) {
            getAllCategoriesByApi();
        }
    }, [visible])


    const _getCategoryById = (idCategory) => {
        console.log(idCategory);
        getCategoryById(idCategory).then(res => {
            setSelectedCategory(res.data);
            console.log(res.data);
        setVisible(true);
        }).catch(err => { console.log(err) })
    }



    
    return (
        <Card
        bordered={false}
        className="criclebox tablespace mb-24"
        title="Tabla de Categorias"
        extra={
          
               <Button onClick={()=> setVisible(true)}>Agregar Producto</Button>
          
        }>
        
            <Table showHeader={true} dataSource={dataProducts} columns={columnsCategory(_getCategoryById)}  />
            <DrawerCategory visible={visible} setVisible={setVisible} selectedCategory={selectedCategory} />
        </Card>
    )
}

export default Category