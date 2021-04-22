import ImgTest from './components/upload/imgTest';
import {BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";

export default function PagingTest() {
    return (
        <>
            {/* 이미지, 동영상 업로드 */}
            <Router>
                <Route exact path="/imgTest/:page/:rowSize" component={ImgTest} />
            </Router>
            {/*<ImgTest/>*/}
            {/*<FunctionKaKaoMap/>*/}
            {/*<KaKaoMapApi/>*/}
            {/*<RoutersTest/>*/}
            {/*<PagingFooter/>*/}
            {/*<FormTest/>*/}
            {/*<br/>*/}
        </>
    )
}




