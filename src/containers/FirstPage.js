import {Container, Row, Col} from "reactstrap";
import image from "../assets/images/ecomebli1.png";
import {LogoWrapper} from "../components/LogoWrapper";
import React from 'react';

export const FirstPage = () => {
    return(
        <Container fluid>
            <Row>
                <Col className='p-0 m-0'>
                    <h1 className='w-90 ml-2 ml-10p firstPage-h1 pb-md-5 pb-3 position-relative'>
                        ВИГОТОВЛЕННЯ ДЕРЕВ’ЯНИХ<br/> МЕБЛІВ НА ЗАМОВЛЕННЯ
                        <div className='position-absolute firstPage-popper-top h-100 w-100'/>
                    </h1>
                    <Container fluid className='w-100 p-0 m-0 pt-1 pb-2 tree-wrapper'>
                        <div className='w-100 d-flex'>
                            <Col md={6} xs={6}>
                                <img alt='ecomebli example' src={image} className='w-100'/>
                            </Col>
                            <Col className='d-flex' md={6} xs={6}>
                                <div className='align-self-end italic firstPage-italic-wrapper position-relative'>
                                    <div className='position-absolute firstPage-popper-bottom h-100 w-13'/>
                                    <p className='m-0 p-0 w-100'>
                                        Реалізовуємо
                                    </p>
                                    <p className='m-0 p-0 fontSize-2_7em'>
                                        ваші бажання, нашим вмінням
                                        та матеріалами
                                    </p>
                                </div>
                            </Col>
                        </div>
                    </Container>
                </Col>
            </Row>
            <LogoWrapper/>
        </Container>
    )
}