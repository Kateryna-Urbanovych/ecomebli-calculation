import {Container, Row, Col} from "reactstrap";
import React from 'react';
import {LogoWrapper} from "../components/LogoWrapper";
import img1 from "../assets/images/fourthPage1.png";
import img2 from "../assets/images/fourthPage2.png";
import img3 from "../assets/images/fourthPage3.png";
import img4 from "../assets/images/fourthPage4.png";
import img5 from "../assets/images/fourthPage5.png";
import img6 from "../assets/images/fourthPage6.png";
import locationIcon from "../assets/images/location.png";
import clickIcon from "../assets/images/click.png";
import youtubeIcon from "../assets/images/youtube.png";
import facebookIcon from "../assets/images/facebook.png";


export const FourthPage = () => {
    return(
        <Container fluid>
            <LogoWrapper/>
            <Row>
                <Col className='m-0 fourthPage-images-wrapper position-relative'>
                    <img src={img1} className='fourthPage1 position-absolute' alt='ecomebli'/>
                    <img src={img2} className='fourthPage2 position-absolute' alt='ecomebli'/>
                    <img src={img3} className='fourthPage3 position-absolute' alt='ecomebli'/>
                    <img src={img4} className='fourthPage4 position-absolute' alt='ecomebli'/>
                    <img src={img5} className='fourthPage5 position-absolute' alt='ecomebli'/>
                    <img src={img6} className='fourthPage6 position-absolute' alt='ecomebli'/>
                </Col>
            </Row>
            <Row className='fourthPage-footer'>
                <Col md={4} xs={4} className='fourthPage-footer-left'>
                    <p>
                        <img src={locationIcon} alt='location' className='icon'/>
                        <span>м. Житомир</span>
                    </p>
                    <p>
                        <a className='d-block footer-link' href='tel:0931826235'>(093) 182 62 35</a>
                        <a className='d-block footer-link' href='tel:0987554178'>(098) 755 41 78</a>
                    </p>
                    <p>
                        <a className='d-block footer-link'
                           href='https://ecomebli.com.ua/' rel="noreferrer" target='_blank'>ecomebli.com.ua</a>
                    </p>
                </Col>
                <Col md={8} xs={8} className='m-0 p-0'>
                    <p>
                        <span>Вживу ще краще... Клікай на посилання</span>
                        <br/>
                        <span>
                            <img src={clickIcon} alt='click' className='icon'/>і дивись на відео
                        </span>
                    </p>
                    <p>
                        <img src={youtubeIcon} alt='youtube' className='icon'/>
                        <span>посилання на відео</span>
                    </p>
                    <p>
                        <img src={facebookIcon} alt='facebook' className='icon'/>
                        <a className='footer-link'
                           href='https://www.facebook.com/profile.php?id=100010979947511'
                           target='_blank' rel="noreferrer" >facebook.com/100010979947511</a>
                    </p>
                </Col>
            </Row>
        </Container>
    )
}