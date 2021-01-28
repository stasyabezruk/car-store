import React, { Suspense, lazy } from 'react';
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Layout } from "@/components/hoc";
import { Loader } from "@/components/UI";
import { ROUTE_MODELS, ROUTE_MODEL_TRIM } from "@/utils/constants/URL";

const CarsList = lazy(() => import("@/components/CarsList/CarsList"));
const Configurator = lazy(() => import("@/components/Configurator/Configurator"));


const history = createBrowserHistory();

const App = () => {
    return (
        <Layout>
            <Router history={history}>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route exact path={ROUTE_MODELS} component={CarsList} />
                        <Route path={ROUTE_MODEL_TRIM} component={Configurator} />
                        <Redirect from="*" to={ROUTE_MODELS} />
                    </Switch>
                </Suspense>
            </Router>
        </Layout>
    )
}

export default App;