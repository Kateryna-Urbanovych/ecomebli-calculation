import {productsActions as actions} from "../redux/products/actions";
import {useDispatch, useSelector} from "react-redux";
import {baseUrl} from "../constants/baseUrl";


export const useProducts = () => {
    const selector = (state) => state.products;
    const products = useSelector(selector);
    const dispatch = useDispatch();
    const fetchProducts = () => {
        dispatch(actions.loadingProducts());
        fetch(baseUrl + '/api/database/products.php')
            .then(response => {
                    if(response.ok){
                        return response;
                    } else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    throw new Error(error.message);
                })
            .then(response => response.json())
            .then(response => {
                const products = response.filter((value, index, self) => {
                    return self.findIndex(
                        item =>
                            parseInt(item.product_id, 10) === parseInt(value.product_id, 10)) === index;
                }).map((item) => {
                    return({
                        name: item.product_name,
                        id: parseInt(item.product_id, 10),
                        types: [],
                        img: item.image_src,
                    })
                })
                response.forEach((item) => {
                    products.find(product => product.id === parseInt(item.product_id, 10)).types.push({
                        name: item.type_name,
                        price: item.price,
                        currency: item.currency,
                    })
                })
                dispatch(actions.saveProducts(products));
            })
            .catch(e => dispatch(actions.failedProducts(new Error(e).message)))
    }
    return {
        products: products.products,
        fetchProducts,
        loading: products.isLoading,
        error: !Boolean(products.products) || !!products.error,
    };
}