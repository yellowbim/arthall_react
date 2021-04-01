import {BrowserRouter as Router, Route} from "react-router-dom";
import ListBoardComponent from "../components/ListBoardComponent";
import DetailContentsComponent from "../components/DetailContentsComponent.jsx";
import LinkTest from "../components/LinkTest";
import PagingHeader from "../components/PagingHeader";
import IndexMain from './../arthall/indexMain'

export default function RoutersTest() {
    return (
        <Router>
            <PagingHeader/>
            <Route path="/"                 component={IndexMain}/>
            <Route path="/List"             component={ListBoardComponent}/>
            <Route path="/Link"             component={LinkTest}/>
            <Route path="/Detail/:no"       component={DetailContentsComponent}/>   {/*이건 Detail/:no 로 key 값을 맵핑시켜서 넘겨줌 */}
        </Router>
    )
}

