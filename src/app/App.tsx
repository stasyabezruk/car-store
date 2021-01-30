import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Layout } from "@/components/hoc";
import { Loader } from "@/components/UI";
import { ROUTE_MODELS, ROUTE_MODEL_STEP } from "@/utils/constants/URL";

const CarsList = lazy(() => import("@/views/CarsList"));
const CarModel = lazy(() => import("@/views/CarModel"));

const history = createBrowserHistory();

const App = () => {
    return (
        <Layout>
            <Router history={history}>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Redirect exact from="/" to={ROUTE_MODELS} />
                        <Route exact path={ROUTE_MODELS} component={CarsList} />
                        <Route path={ROUTE_MODEL_STEP} component={CarModel} />
                    </Switch>
                </Suspense>
            </Router>
        </Layout>
    )
}

export default App;