import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Shortener from "./Shortener";
import Resolver from "./Resolver";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path="/">
                    <Shortener/>
                </Route>

                <Route path="/:slug" component={Resolver}>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
