import {Provider} from "react-redux";
import {store} from "./redux/init/store";
import {Main} from "./containers/Main";
import {BrowserRouter} from 'react-router-dom';

export const App = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </Provider>
    )
}