import {useParams} from "react-router";
import {useProducts} from "../../hooks/useProducts";
import {Col, Container, Row} from "reactstrap";
import {LoadingComponent} from "../../components/LoadingComponent";
import {NotFoundData} from "../../components/NotFoundData";
import "../../styles/product.scss";
import React from 'react';
import {ContactForm} from "../../components/ContactForm";
import {AlertWrapper} from "../../components/AlertWrapper";

export const ProductDetailsPage = () => {
    const [isOpen, setOpen] = React.useState(false);
    const {id} = useParams();
    const {loading, products, error} = useProducts();
    const product = !loading && !error && products && products.find(
        (item) => item.id === parseInt(id, 10));
    const [radio, setRadio] = React.useState(0);
    const [status, setStatus] = React.useState({ok: false, error: undefined});
    React.useEffect(() => {
        if(status.ok || status.error){
            setOpen(true);
        }
    }, [status]);
    return(
        <Container className="product-wrapper">
            {
                !loading && product && (
                    <>
                        <Row className='p-4'>
                            <Col>
                                <h1 className='text-center'>{product.name}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <img alt='ecomebli' className='w-100' src={product.img}/>
                            </Col>
                            <Col md={6} className='d-flex align-items-center justify-content-center form-wrapper'>
                                <div className='d-flex flex-column w-100'>
                                    <ul className='w-100 p-0'>
                                        {
                                            product.types && product.types.map((item, key) => {
                                                return (
                                                    <li key={key} onClick={() => setRadio(key)} className="py-1 my-1 px-2">
                                                        <div className='w-50 text-capitalize'>
                                                            <input
                                                                id={'radio_' + item}
                                                                checked={radio === key}
                                                                name="radio"
                                                                type="radio"
                                                                value={item}
                                                                className='mx-2'
                                                            />
                                                            <span>{item.name}</span>
                                                        </div>
                                                        <div className='w-50 text-end'>
                                                            {item.price + ' ' + item.currency}
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <ContactForm setStatus={setStatus} product_id={id} product={product.name + ' ' + product.types[radio].name}/>
                                    {isOpen ? <AlertWrapper setOpen={setOpen} isOpen={isOpen} status={status}/> : <div/>}
                                </div>
                            </Col>
                        </Row>
                    </>
                )
            }
            {
                loading && <LoadingComponent/>
            }
            {
                !loading && !product && <NotFoundData/>
            }
        </Container>
    )
}