import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {GridLoader} from "react-spinners";
import {Colors} from "./web/constants/colors";


const App = lazy(() => import('./App'));
const CookiePage = lazy(() => import('./web/views/cookie_page'));
const TermsPage = lazy(() => import('./web/views/terms_page'));
const AboutUsPage = lazy(() => import('./web/views/aboutUs_page'));
const WhyUsPage = lazy(() => import('./web/views/whyUs_page'));


ReactDOM.render(
    <React.StrictMode>
        <Suspense
            fallback={
                <div className="page-loader">
                    <GridLoader color={Colors.red} size={'30px'}/>
                </div>
            }
        >
            <BrowserRouter>
                <Switch>
                    <Route path={'/aboutUs'} component={AboutUsPage}/>
                    <Route path={'/whyUS'} component={WhyUsPage}/>
                    <Route path={'/tAndC'} component={TermsPage}/>
                    <Route path={'/cookie'} component={CookiePage}/>
                    <Route exact path={'/'} component={App}/>
                </Switch>
                <Redirect to={'/#home'} from={'/'}/>
            </BrowserRouter>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
