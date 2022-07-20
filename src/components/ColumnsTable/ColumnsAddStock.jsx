import { Avatar, Button, Tag } from "antd";
import { AiOutlineEdit } from "react-icons/ai";

export const columnsAddStock = [

  {
    title: "Proveedor",
    dataIndex: "provider",
    key: "provider",
  },
    {
      title: "Producto registrado",
      dataIndex: "modelName",
      key: "modelName",
    },
    {
      title: "Costo",
      dataIndex: "price",
      key: "price",
      render: (price) => (<span>$ {price}</span>)
    },
    {
      title: "Cantidad",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title:"Registrado",
      key:'createAt',
      dataIndex:'createAt',
      render:(createAt)=> (
        <Tag>
          {createAt}
        </Tag>
      )
    },

  
    {
      title:'acciones',
      key:"acciones",
      render:(value)=>(
        <button type={"submit"}  className="btnDetails" onClick={() => {alert(JSON.stringify(value))}}><AiOutlineEdit size={20}/></button>
      )
    }
  
  ];