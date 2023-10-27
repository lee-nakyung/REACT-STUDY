import { BrowserRouter, Switch, Route } from "react-router-dom";

function Router(){
    return <BrowserRouter>
    <Switch>
        <Route path="/:coinId">
            <Route path="/"></Route>
        </Route>
>    </Switch>
    </BrowserRouter>
}

export default Router;