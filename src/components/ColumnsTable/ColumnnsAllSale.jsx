import { Tag } from "antd"
import { AiOutlineEdit } from "react-icons/ai"

export const columnsAllSale = [
    {
        title: 'Cliente',
        dataIndex: 'fullNameClient',
        key: 'fullNameClient',
    },
    {
        title: 'Nro DNI',
        dataIndex: 'documentDniClient',
        key: 'documentDniClient',
    },
    {
        title: 'Nro RUC',
        dataIndex: 'documentRucClient',
        key: 'documentRucClient',
    },
    {
        title: 'Fecha Generada',
        dataIndex: 'creatAt',
        key: 'creatAt',
        render:(createAt)=> (
            <Tag>
              {createAt}
            </Tag>
          )
    },
    {
        title: 'estado',
        dataIndex: 'status',
        key: 'status',
        render: (text, record) =>( <div key={record?.idVenta}>
            <Tag color={text?'cyan':'red'}>{text?"REALIZADO":"ANULADO"}</Tag>
        </div>)
    },
    {
        title: 'Acciones',
        dataIndex: 'Acciones',
        fixed: 'right',
        key: 'Acciones',
        render: (text, record) =>( <div key={record?.idVenta}>
                     <button type={"submit"}  className="btnDetails" onClick={() => {alert("editando")}}><AiOutlineEdit size={20}/></button>

        </div>)
    },

    
]