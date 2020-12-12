import {Route} from "react-router-dom";
import './App.css';
import Shortener from "./Shortener";
import Redirector from "./Redirector";

function App() {
    return (
        <div className="App">
            <Route exact path="/">
                <Shortener/>
            </Route>

            <Route path="/:slug">
                <Redirector/>
            </Route>

        </div>
    );
}

export default App;
