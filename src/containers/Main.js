import {useProducts} from "../hooks/useProducts";
import React from "react";
import {Router} from "../navigation/router";
import {Col, Container, Row} from "reactstrap";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export const Main = () => {
    const {fetchProducts} = useProducts();
    React.useEffect(() => {
        fetchProducts()
    }, [])
    return(
        <>
            <Container fluid>
                <Row className='backgroundColor'>
                    <Col className='p-0 m-0 wrapper'>
                        <Header/>
                    </Col>
                </Row>
            </Container>
            <Router/>
            <Container fluid>
                <Row>
                    <Col className='position-relative pt-5'>
                        <Footer/>
                    </Col>
                </Row>
            </Container>
        </>

    )
}