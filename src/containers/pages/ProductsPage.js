import {Container, Row} from "reactstrap";
import {Product} from "../../components/Product";
import {useProducts} from "../../hooks/useProducts";
import {LoadingComponent} from "../../components/LoadingComponent";
import {NotFoundData} from "../../components/NotFoundData";

export const ProductsPage = () => {
    const {products, loading, error} = useProducts();
    return(
        <Container>
            <Row className='justify-content-center'>
                {!loading && !error && products.map((item, key) => {
                    return(
                        <Product
                            key={key}
                            types={item.types}
                            id={item.id}
                            currency={item.currency}
                            name={item.name}
                            price={item.price}
                            img={item.img}
                        />
                    )
                })}
                {
                    loading && <LoadingComponent/>
                }
                {
                    !loading && error && <NotFoundData/>
                }
            </Row>
        </Container>
    )
}