import React from "react";
//Biblioteca
import { BrowserRouter, Switch, Route, } from "react-router-dom";
//page rotas
import LandingPage from "./page/LandingPage";
import LandingPage1 from "./page/LandingPage1";
import LandingPage2 from "./page/LandingPage2";
import LandingPage3 from "./page/LandingPage3";
import LandingPage4 from "./page/LandingPage4";
import NotErro from "./page/NotErro";

function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/LandingPage1"  component={LandingPage1} />
                <Route path="/LandingPage2"  component={LandingPage2} />
                <Route path="/LandingPage3"  component={LandingPage3} />
                <Route path="/LandingPage4"  component={LandingPage4} />
                <Route path="*" component={NotErro} />
            </Switch>
        </BrowserRouter>
    );
}
export default routes;