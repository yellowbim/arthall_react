// 페이지 이동을 위한 Router 설정
import {BrowserRouter as Router, Route} from "react-router-dom";

// 가운데 변경할 페이지 import
import TOP from './../arthall/common/top'
import FOOTER from './../arthall/common/footer'
import MAIN from './../arthall/main/main';
import LOGIN from '../arthall/mbr/login';
import JOIN from '../arthall/mbr/join';
import PLAY from '../arthall/play/play';


export default function Routers(){
    return(
        <>
            <Router>
                <TOP/>

                <Route exact path="/"                             component={MAIN} />
                <Route exact path="/member/loginForm"             component={LOGIN}/>
                <Route exact path="/member/joinForm"              component={JOIN}/>
                <Route exact path="/play/performList"             component={PLAY}/>

                <FOOTER/>
            </Router>
        </>
    )
}