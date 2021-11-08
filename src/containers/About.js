import {Col, Container, Row} from "reactstrap";
import React from "react";
import "../styles/about.scss";

export const About = () => {
    return(
        <Container fluid>
            <Row>
                <Col id='about' className='d-flex w-90 flex-wrap text-uppercase align-items-center space-between'>
                    <div className="cell cell-1 basic-text-big">
                        10<sup className="sup-text">+</sup><span className="mobile-break"/><sub
                        className="sub-text">років досвіду</sub>
                    </div>
                    <div className="cell cell-2 basic-text-big">
                        5<sup className="sup-text">&nbsp;</sup><span className="mobile-break"/><sub
                        className="sub-text">досвідчених столярів</sub>
                    </div>
                    <div className="cell cell-3 large-text">Cтудія</div>
                    <div className="cell cell-4 large-text">
                        Ecomebl<span className="small-inner-letter">i</span>
                    </div>
                    <div className="cell cell-5 basic-text-small">
                        Базується в місті Житомир, спеціалізується на виготовленні дерев'яних
                        меблів на замовлення
                    </div>
                    <div className="cell cell-6 basic-text-big">
                        2000<sup className="sup-text">+</sup><span className="mobile-break"/><sub
                        className="sub-text">тисячі створеної продукції</sub>
                    </div>
                    <div className="cell cell-7 basic-text-big">
                        ∞<sup className="sup-text">&nbsp;</sup><span className="mobile-break"/><sub
                        className="sub-text">любов до створення предметів</sub>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}