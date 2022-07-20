import { Avatar, Button, Tag } from "antd";
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";

export function columnsproducto (_getProductoById) {
  return[
    {
      title: "Producto",
      dataIndex: "modelName",
      key: "modelName",
      render: (text,dato) => <button onClick={()=>console.log(dato)}>{dato?.urlImage?<Avatar size={50} shape="square" src={dato.urlImage}/>:<Avatar size={50} shape="square">{text[0]}</Avatar>}{"  "}{ text}</button>,
      width: "32%",
    },
  
    {
      title:"Tamaño",
      key:'size',
      dataIndex:'size',
      render:(size)=> (
        <Tag color={
         size =="M" && 'geekblue' || size=="L" && 'cyan' || size =="XL" && 'magenta' || size =="S" && 'yellow' || size &&'purple'
        } >
          {size}
        </Tag>
      )
    },
  
    {
      title: "Cantidad",
      key: "stock",
      dataIndex: "stock"
    },
    {
      title: "Precio",
      key: "price",
      dataIndex: "price"
    },
    {
      title: "Estado",
      key: "status",
      dataIndex: "status",
      render:(status,index)=>  <Tag style={{cursor:"pointer"}} onClick={()=>console.log(status,index)}  color={status?'cyan':'error'} className="">{status?"Enable":"Disable"}</Tag>
    },
    {
      title:'acciones',
      key:"acciones",
      render:(value)=>(
        
        <button type={"submit"}  className="btnDetails" onClick={() => _getProductoById(value)}><AiOutlineEdit size={20}/></button>

      )
    }
  
  ];}