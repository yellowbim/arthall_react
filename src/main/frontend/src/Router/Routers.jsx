import {BrowserRouter as Router, Route} from "react-router-dom";
import ListBoardComponent from "../components/ListBoardComponent";
import DetailContentsComponent from "../components/DetailContentsComponent.jsx";
import LinkTest from "../components/LinkTest";
import PagingHeader from "../components/PagingHeader";
import GoBack from "../components/GoBack";

export default function Routers() {
    return (
        <Router>
            <PagingHeader/>
            <Route path="/List"         component={ListBoardComponent}/>
            <Route path="/Detail"       component={DetailContentsComponent}/>
            <Route path="/Link"         component={LinkTest}/>
            <Route path="/history"      component={GoBack}/>
        </Router>
    )
}

