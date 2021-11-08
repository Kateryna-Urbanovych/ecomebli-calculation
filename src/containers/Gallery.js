import {Container, Row, Col} from "reactstrap";
import background from "../assets/images/gallery-background.png";
import img001 from "../assets/images/gallery-001.png";
import img002 from "../assets/images/gallery-002.png";
import img003 from "../assets/images/gallery-003.png";
import img004 from "../assets/images/gallery-004.png";
import img005 from "../assets/images/gallery-005.png";
import img006 from "../assets/images/gallery-006.png";
import img007 from "../assets/images/gallery-007.png";
import img008 from "../assets/images/gallery-008.png";
import img009 from "../assets/images/gallery-009.png";
import img010 from "../assets/images/gallery-010.png";
import arrowDown from "../assets/images/arrow-down.png";
import {ContactForm} from "../components/ContactForm";
import {AlertWrapper} from "../components/AlertWrapper";
import React from 'react';


export const Gallery = () => {
    const [isOpen, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState({ok: false, error: undefined});
    React.useEffect(() => {
        if(status.ok || status.error){
            setOpen(true);
        }
    }, [status]);
    return(
        <Container className='gallery-wrapper' fluid>
            <Row>
                <Col className='p-0'>
                    <img src={background} className='w-100' alt='ecomebli'/>
                </Col>
            </Row>
            <Row>
                <Col className='p-0 gallery-img-wrapper position-relative'>
                    <div className='gallery-item gallery-001 position-absolute'>
                        <img id='portfolio' src={img001} className='w-100' alt='ecomebli'/>
                        <span>0001</span>
                        <span>Дерево</span>
                    </div>
                    <div className='gallery-item gallery-002 position-absolute'>
                        <img src={img002} className='w-100' alt='ecomebli'/>
                        <span>0002</span>
                        <span>Дерево</span>
                    </div>
                    <div className='gallery-item gallery-003 position-absolute'>
                        <img src={img003} className='w-100' alt='ecomebli'/>
                        <span>0003</span>
                        <span>Дерево</span>
                    </div>
                    <div className='gallery-item gallery-004 position-absolute'>
                        <img src={img004} className='w-100' alt='ecomebli'/>
                        <span>0004</span>
                        <span>Дерево</span>
                    </div>
                    <div className='gallery-item gallery-005 position-absolute'>
                        <img src={img005} className='w-100' alt='ecomebli'/>
                        <span>0005</span>
                        <span>Дерево</span>
                    </div>
                    <div className='gallery-item gallery-006 position-absolute'>
                        <img src={img006} className='w-100' alt='ecomebli'/>
                        <span>0006</span>
                        <span>Дерево</span>
                    </div>
                    <div className='gallery-item gallery-007 position-absolute'>
                        <img src={img007} className='w-100' alt='ecomebli'/>
                        <span>0007</span>
                        <span>Дерево</span>
                    </div>
                    <div className='gallery-item gallery-008 position-absolute'>
                        <img src={img008} className='w-100' alt='ecomebli'/>
                        <span>0008</span>
                        <span>Дерево</span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='p-0'>
                    <div className='gallery-text'>
                        сосна дуб<br/>
                        <span>ясен ольха</span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className='p-0'>
                    <img src={img009} alt='ecomebli' className='gallery-009'/>
                </Col>
            </Row>
            <Row>
                <Col md={8} xs={8} className='d-flex justify-content-center align-items-center'>
                    <div className="make-order-wrapper">
                        <div className="make-order-text">
                            <div className="make-order__title">Робіть замовлення та запитуйте</div>
                            <div className="make-order-social">
                                <div className="make-order__social">Facebook</div>
                                <div className="make-order__social">Viber</div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} xs={4} className='p-0 position-relative'>
                    <img src={img010} alt='ecomebli' className='gallery-010 w-100'/>
                    <div className='position-absolute arrowWrapper d-flex justify-content-center align-items-center'>
                        <img src={arrowDown} alt='arrow'/>
                        <img src={arrowDown} alt='arrow'/>
                        <img src={arrowDown} alt='arrow'/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col id='contacts' className='d-flex flex-column align-items-start form-wrapper form-padding'>
                    <div className='w-100 pb-4vw'>
                        <h1 className='w-100 m-0'>
                            Маєте запитання?
                        </h1>
                        <h3 className='w-100 m-0'>
                            Залиште ваші контакти, та очікуйте на дзвінок
                        </h3>
                    </div>
                    <ContactForm setStatus={setStatus} isHome/>
                </Col>
                {isOpen ? <AlertWrapper setOpen={setOpen} isOpen={isOpen} status={status}/> : <div/>}
            </Row>
        </Container>
    )
}