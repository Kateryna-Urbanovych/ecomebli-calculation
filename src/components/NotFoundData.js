import {Col, Row} from "reactstrap";
import {FaDatabase} from "react-icons/all";

export const NotFoundData = () => {
    return(
        <Row>
            <Col className='d-flex w-100 justify-content-center align-items-center not-found-wrapper'>
                <div className='d-flex flex-column text-center m-5 font-weight-bold not-found-data'>
                    <FaDatabase className='align-self-center'/>
                    <span className='p-3'>Дані не знайдено</span>
                </div>
            </Col>
        </Row>
    )
}