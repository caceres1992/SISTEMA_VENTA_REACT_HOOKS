import { Button } from "antd"
import { AiOutlineEdit } from "react-icons/ai"

export function columnsCategory (_getCategoryById){

return[ {
        title: 'Nombre de Categoria',
        dataIndex: 'name',
        key: 'name',
        width: '50%',
        render: text => <span key={text} className="uppercase text-gray-800">{text}</span>,

    }, {
        title: 'descripcion',
        dataIndex: 'description',
        key: 'description',
        width: '40%',
        render: text => <p key={text} className="uppercase text-gray-400 line-clamp-1 sm:text-xs" >{text==null?"Sin descripcion":text}</p>,

    },{
        title: 'Acciones',
        key: 'acciones',
        width: 50,
        render: (text, record) => (<div>
            <button type={"submit"}  className="btnDetails" onClick={() => _getCategoryById(record.id)}><AiOutlineEdit size={20}/></button>
        </div>)
    },
]
}
