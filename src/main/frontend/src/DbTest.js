import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ListBoardComponent from './components/ListBoardComponent';
import DetailContentsComponent from './components/DetailContentsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function DbTest (){
    return (
        <div>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Route path = "/detailContents/:no" exact component = {DetailContentsComponent}></Route>
                        <Route path = "/test" exact component = {ListBoardComponent}></Route>
                        <Route path = "/" exact component = {ListBoardComponent}></Route>
                    </Switch>
                </div>
                <FooterComponent/>
            </Router>
        </div>
    );
}

export default DbTest;