import {BrowserRouter as Router, Route} from "react-router-dom";
import INDEXMAIN from './../arthall/indexMain';
import PAGINGTEST from './../PagingTest';
import MovieApi from "../components/movie/movieApi";
import SelectMain from "../components/select";
import Book from "../components/bookapi/book";
import jquery from "../components/jquery/jquery";


export default function DevRouter () {
    return(
        <>
            <Router>
                <Route exact path="/"           component={SelectMain}/>
                {/*<Redirect to="/pagingTest"      component={PAGINGTEST}/>*/}
                <Route exact path="/pagingTest" component={PAGINGTEST}/>
                <Route exact path="/index"      component={INDEXMAIN}/>
                <Route exact path="/movie"      component={MovieApi}/>
                <Route exact path="/book"      component={Book}/>
                <Route exact path="/jquery"      component={jquery}/>
            </Router>
        </>
    )
}