import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Navigation } from './nav';
import { Infection } from './view/infection';
import { Container } from 'react-bootstrap';

const history = createBrowserHistory();

export const App = () => (
    <HashRouter history={history}>
        <Navigation />
        <Container fluid>
            <Switch>
                <Route exact path="/infection">
                    <Infection />
                </Route>
                <Route exact path="/player-cards">
                    <div>todo</div>
                </Route>
            </Switch>
        </Container>
    </HashRouter>
);
