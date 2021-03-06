import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ productList, ...rest }) => {

    return (
        <article className="Item-Card">
            <h2 className="Item-Name">
                {productList.producto}
            </h2>
            <img src={productList.imagen} alt={productList.producto} className="Item-Img" />
            <p className="Item-Precio">
                Precio: $ {productList.precio}
            </p>
            <Link className="Item-Name" to={`/detail/${productList.id}`} >Ver detalle</Link>
        </article>

    )
}
export default Item