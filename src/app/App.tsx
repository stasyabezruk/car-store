import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Loader } from "@/components/UI";
import { ROUTE_MODELS, ROUTE_MODEL_STEP, ROUTE_MODEL_CHECKOUT } from "@/utils/constants/URL";

const CarsList = lazy(() => import("@/views/CarsList"));
const CarModel = lazy(() => import("@/views/CarModel"));
const CheckoutView = lazy(() => import("@/views/CheckoutView"));

export const history = createBrowserHistory();

const App = () => {
    return (
        <Router history={history}>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Redirect exact from="/" to={ROUTE_MODELS} />
                    <Route exact path={ROUTE_MODELS} component={CarsList} />
                    <Route exact path={ROUTE_MODEL_CHECKOUT} component={CheckoutView} />
                    <Route path={ROUTE_MODEL_STEP} component={CarModel} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App;