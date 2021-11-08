import {Container, Row, Col, Table} from "reactstrap";
import React from 'react';
import image from "../assets/images/ecomebli2.png";
import blumImage from "../assets/images/blum.png";
import hafeleImage from "../assets/images/hafele.png";
import gtvImage from "../assets/images/gtv.png";
import {Rating} from "../components/Rating";


export const SecondPage = () => {
    return(
        <Container fluid>
            <Row>
                <Col className='p-0 m-0'>
                    <Container fluid className='w-100 p-0 m-0 pt-1 pb-2 tree-wrapper'>
                        <div className='w-100 d-flex'>
                            <Col md={6} xs={6}>
                                <img alt='ecomebli example' src={image} className='w-100'/>
                            </Col>
                            <Col className='px-3 px-md-5 py-2 py-md-4 MazzardLRegular secondPage-right-font' md={6} xs={6}>
                                <div className='p-0 m-0'>
                                    Наші вироби:
                                    <ul id='secondPage-list' className='px-2 px-md-4 m-0'>
                                        <li>екологічно чисті</li>
                                        <li>ексклюзивні</li>
                                        <li>довговічні</li>
                                    </ul>
                                </div>
                                <div className='hr my-0'/>
                                <p className='p-0 m-0'>
                                    Ми використовуємо
                                    фурнітуру провідних
                                    виробників
                                </p>
                                <div className='d-flex'>
                                    <Col className='px-1' md={3} xs={3}>
                                        <img alt='blum' src={blumImage} className='w-100'/>
                                    </Col>
                                    <Col className='px-1' md={4} xs={3}>
                                        <img alt='hafele' src={hafeleImage} className='w-100'/>
                                    </Col>
                                    <Col className='px-1' md={3} xs={3}>
                                        <img alt='blum' src={gtvImage} className='w-100'/>
                                    </Col>
                                </div>
                                <div className='hr my-0'/>
                                <p className='p-0 m-0'>
                                    Готові вироби за
                                    бажанням замовника
                                    покриваються лаком
                                    або фарбуються
                                </p>
                            </Col>
                        </div>
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col className='px-2 px-md-5 py-1'>
                    <Table id='rating-table' striped borderless={true}>
                        <thead>
                        <tr>
                            <th></th>
                            <th>Текстура</th>
                            <th>Твердість</th>
                            <th>Довговічність</th>
                            <th>Ціна</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Вільха</td>
                            <td><Rating quantity={1}/></td>
                            <td><Rating quantity={3}/></td>
                            <td><Rating quantity={3}/></td>
                            <td><Rating quantity={3}/></td>
                        </tr>
                        <tr>
                            <td>Сосна</td>
                            <td><Rating quantity={3}/></td>
                            <td><Rating quantity={3}/></td>
                            <td><Rating quantity={3}/></td>
                            <td><Rating quantity={3}/></td>
                        </tr>
                        <tr>
                            <td>Ясен</td>
                            <td><Rating quantity={5}/></td>
                            <td><Rating quantity={5}/></td>
                            <td><Rating quantity={5}/></td>
                            <td><Rating quantity={4}/></td>
                        </tr>
                        <tr>
                            <td>Дуб</td>
                            <td><Rating quantity={5}/></td>
                            <td><Rating quantity={5}/></td>
                            <td><Rating quantity={5}/></td>
                            <td><Rating quantity={5}/></td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}