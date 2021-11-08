import {Redirect, Route, Switch} from "react-router";
import {Homepage} from "../containers/pages/Homepage";
import {ProductsPage} from "../containers/pages/ProductsPage";
import {ProductDetailsPage} from "../containers/pages/ProductDetailsPage";
import {AdminPage} from "../containers/pages/AdminPage";

export const Router = () => {
    return(
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/products' component={ProductsPage}/>
            <Route exact path='/product/:id' component={ProductDetailsPage}/>
            <Route exact path='/admin' component={AdminPage}/>
            <Redirect to='/' />
        </Switch>
    )
}