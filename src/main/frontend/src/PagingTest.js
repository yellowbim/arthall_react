import React from "react";
import KaKaoLogin from "./components/kkaoLogin/kakaoLogin";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginSuccess from './components/kkaoLogin/loginSuccess';

export default function PagingTest() {
    return (
        <>
            {/* 카카올 로그인 */}
            <Router>
                <Route exact path="/" component={KaKaoLogin}/>
                <Route exact path="/loginSuccess" component={LoginSuccess}/>
            </Router>


            {/* 엑셀 다운로드 */}
            {/*<SpringExcelUpload/>*/}

            {/* 페이지 크기 구하기 */}
            {/*<PageSize/>*/}

            {/* 이미지, 동영상 업로드 / 엑셀 다운로드 */}
            {/*<Router>*/}
            {/*    <Route exact path="/" component={ImgTest} />*/}
            {/*    <Route exact path="/:page/:rowSize" component={ImgTest} />*/}
            {/*</Router>*/}
            {/*<ImgTest/>*/}

            {/* 카카오 지도 테스트 */}
            {/*<FunctionKaKaoMap/>*/}
            {/*<KaKaoMapApi/>*/}

            {/* 라우터(페이지 이동) 테스트 */}
            {/*<RoutersTest/>*/}
            {/*<PagingFooter/>*/}

            {/* 폼 양식 전속ㅇ 테스트 */}
            {/*<FormTest/>*/}
            {/*<br/>*/}
        </>
    )
}




