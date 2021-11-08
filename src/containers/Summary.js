import "../styles/summary.scss";
import img1 from "../assets/images/summary-img1.png";
import img2 from "../assets/images/summary-img2.png";
import img3 from "../assets/images/summary-img3.png";
import {Col, Container, Row} from "reactstrap";

export const Summary = () => {
    return(
        <Container id='summary' fluid>
            <Row>
                <Col className='position-relative pt-15vw'>
                    <div className="images-wrapper">
                        <img className="container1" src={img1} alt='ecomebli'/>
                        <img className="container2" src={img2} alt='ecomebli'/>
                        <img className="container3" src={img3} alt='ecomebli'/>
                    </div>
                    <div className="text-wrapper">
                        <div>Реалізовуємо</div>
                        <div>Ваші бажання,</div>
                        <div>Нашим вмінням та</div>
                        <div>Матеріалами</div>
                    </div>
                    <div className="fb-block-wrapper">
                        <div className="orange-bg-wrapper"></div>
                        <div className="circle-text-wrapper">
                            <div className="fb-text">FB</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}