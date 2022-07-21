import { Popconfirm, Tag } from "antd"
import { IoBagRemoveOutline } from "react-icons/io5"

export const columnsAllSale = (deleteVenta)=>[
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
        render: (text, record) =>   record.status &&  <Popconfirm key={record?.idVenta} title="Si se anula, No podra ser restaurando" okButtonProps={
            {color:'cyan',className:'text-xs bg-blue-500 text-white py-0 px-2 h-6'}
        } cancelButtonProps={{ className:'text-xs py-0 px-3  h-6'} } onConfirm={()=>deleteVenta(record.idVenta)}> <button type={"submit"}  className="btnDelete" ><IoBagRemoveOutline size={20}/></button> </Popconfirm>
    },

    
]