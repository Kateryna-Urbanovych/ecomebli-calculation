import {Col} from "reactstrap";
import {NavLink} from "react-router-dom";
import "../styles/products.scss";

export const Product = ({id, name, img}) => {
    return(
        <Col md={4} className='pt-5'>
            <NavLink to={'/product/' + id} className='products-item-link'>
                <img alt='ecomebli' src={img} className='w-100 p-3'/>
                <h3 className='text-center'>{name}</h3>
            </NavLink>
        </Col>
    )
}