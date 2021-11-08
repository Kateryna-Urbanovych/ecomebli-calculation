import {Col, Row} from "reactstrap";
import logo from "../assets/images/logo.png";

export const LogoWrapper = () => {
    return(
        <Row>
            <Col md={4} xs={4} className='logo-wrapper'>
                <img alt='ecomebli logo' src={logo} className='w-100'/>
            </Col>
        </Row>
    )
}