import {Container, Row, Col, Table} from "reactstrap";
import React from 'react';
import {LogoWrapper} from "../components/LogoWrapper";


export const ThirdPage = () => {
    return(
        <Container fluid>
            <LogoWrapper/>
            <Row>
                <Col className='p-0 m-0'>
                    <Table id='prices-table' borderless={true} hover>
                        <tbody>
                        <tr>
                            <td className='prices-table-td-color-left w-75'>Сходи</td>
                            <td className='prices-table-td-color-right w-25'/>
                        </tr>
                        <tr>
                            <td className='prices-table-td-color-left'>Кухні</td>
                            <td className='prices-table-td-color-right'/>
                        </tr>
                        <tr>
                            <td className='prices-table-td-color-left prices-table-context'>корпус ДСП, фасади з дерева</td>
                            <td className='prices-table-td-color-right'>від 12500 грн м/п</td>
                        </tr>
                        <tr>
                            <td className='prices-table-td-color-left prices-table-context'>корпус дерево і фасади з дерева</td>
                            <td className='prices-table-td-color-right'>від 14500 грн м/п</td>
                        </tr>
                        <tr>
                            <td className='prices-table-td-color-left'>
                                Столи <span className='prices-table-context'>(в тому числі трансформери)</span>
                            </td>
                            <td className='prices-table-td-color-right'>від 5500 грн/шт</td>
                        </tr>
                        <tr>
                            <td className='prices-table-td-color-left'>Табуретки</td>
                            <td className='prices-table-td-color-right'>від 350 грн/шт</td>
                        </tr>
                        <tr>
                            <td className='prices-table-td-color-left'>Стільці</td>
                            <td className='prices-table-td-color-right'>від 1800 грн/шт</td>
                        </tr>
                        <tr>
                            <td className='prices-table-td-color-left'>Підвіконня</td>
                            <td className='prices-table-td-color-right'>від 2500 грн/м2</td>
                        </tr>
                        <tr>
                            <td className='prices-table-td-color-left'>
                                Ліжка <span className='prices-table-context'>(одно-, двоспальні, двоярусні, ліжка-будинкі)</span>
                            </td>
                            <td className='prices-table-td-color-right'>від 5500 грн/шт</td>
                        </tr>
                        <tr>
                            <td className='prices-table-td-color-left'>Приліжкові тумби</td>
                            <td className='prices-table-td-color-right'>від 3500 грн/шт</td>
                        </tr>
                        <tr>
                            <td className='prices-table-td-color-left'>Комоди</td>
                            <td className='prices-table-td-color-right'>від 8500 грн/шт</td>
                        </tr>
                        <tr>
                            <td className='prices-table-td-color-left'>Шафи</td>
                            <td className='prices-table-td-color-right'>від 22000 грн/шт</td>
                        </tr>
                        <tr>
                            <td className='prices-table-td-color-left'>
                                Двері <span className='prices-table-context'>(вхідні, міжкімнатні)</span>
                            </td>
                            <td className='prices-table-td-color-right'/>
                        </tr>
                        <tr>
                            <td className='prices-table-td-color-left prices-table-context'>
                                в ціну входить: полотно, коробка, наличники, замок, завіси, монтаж
                            </td>
                            <td className='prices-table-td-color-right'>від 10000 грн/шт</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul className='list'>
                        <li>У каталозі вказані орієнтовні ціни на популярні категорії.</li>
                        <li>
                            Кінцева вартість виробів залежіть від обраних матеріалів, фурнітури, покриття та складності проєкту.
                        </li>
                        <li>
                            Зв'яжіться з нами будь-яким зручним способом і ми допоможемо підібрати оптимальне саме для вас поєднання.
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}