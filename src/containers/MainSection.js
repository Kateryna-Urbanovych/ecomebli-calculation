import {Container, Row, Col} from "reactstrap";
import img1 from "../assets/images/main-section-1.png";
import img2 from "../assets/images/main-section-2.png";
import img3 from "../assets/images/signature.png";

export const MainSection = () => {
    return(
        <Container fluid className='backgroundColor'>
            <Row>
                <Col className='main-section-text-wrapper d-flex align-items-end position-relative wrapper'>
                    <h1 className='main-section-h1'>
                        Виготовлення деревяних меблів на замовлення
                    </h1>
                    <img src={img1} alt='ecomebli' className='main-section-img-1 position-absolute'/>
                    <img src={img2} alt='ecomebli' className='main-section-img-2 position-absolute'/>
                    <img src={img3} alt='ecomebli' className='main-section-img-3 position-absolute'/>
                </Col>
            </Row>
            <div className="main-categories">
                <div className="main-categories__item">Лофт</div>
                <div className="main-categories__item">Сходи</div>
                <div className="main-categories__item">Двері</div>
                <div className="main-categories__item">Ліжка</div>
                <div className="main-categories__item">Спальні</div>
                <div className="main-categories__item">Кухні</div>
            </div>
        </Container>
    )
}