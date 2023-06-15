import { render } from "react-dom"
import { Router, Switch, Route } from "wouter"

import Index from "./com"
import None from "./com/none"
import { Container } from "./style/style"

function App() {
    return <>
        <Container>
            <Router>
                <Switch>
                    <Route path="/" component={Index}/>
                    <Route component={None}/>
                </Switch>
            </Router>
        </Container>
    </>
}

render(<App/>, document.getElementById("root")!)
