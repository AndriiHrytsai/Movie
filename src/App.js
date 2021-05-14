import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Movie from "./components/movie/Movie";
import Home from "./components/home/Home";

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path={"/"} render={() => {
                        return <Home/>
                    }}/>
                    <Route path={"/movie"} render={() => {
                        return <Movie/>
                    }}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
