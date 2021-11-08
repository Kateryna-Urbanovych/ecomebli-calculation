import {Col, Row, Spinner} from "reactstrap";

export const LoadingComponent = () => {
    return(
        <Row>
            <Col className='d-flex w-100 justify-content-center align-items-center h-100 p-5'>
                <Spinner style={{width: '5em', height: '5em'}} color='primary'/>
            </Col>
        </Row>
    )
}