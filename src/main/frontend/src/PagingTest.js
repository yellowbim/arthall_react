import React from "react";
import PayTest from "./components/pay/payTest";

export default function PagingTest() {
    return (
        <>
            {/* 결제 api */}
            {/*
                import PayTest from "./components/pay/payTest";
            */}
            <PayTest/>


            {/* 카카오, 구글, 페북 로그인 */}
            {/*
                import KaKaoLogin from "./components/kkaoLogin/kakaoLogin";
                import LoginSuccess from './components/kkaoLogin/loginSuccess';
            */}
            {/*<Router>*/}
            {/*    <Route exact path="/" component={KaKaoLogin}/>*/}
            {/*    <Route exact path="/loginSuccess" component={LoginSuccess}/>*/}
            {/*</Router>*/}

            {/* 엑셀 다운로드 */}
            {/*
                import SpringExcelUpload from './components/excelUpload/springExcelUpload';
            */}
            {/*<SpringExcelUpload/>*/}

            {/* 페이지 크기 구하기 */}
            {/*
                import PageSize from "./components/topPage/pageSize";
            */}
            {/*<PageSize/>*/}

            {/* 이미지, 동영상 업로드 / 엑셀 다운로드 */}
            {/*
                import ImgTest from './components/upload/imgTest';
            */}
            {/*<Router>*/}
            {/*    <Route exact path="/" component={ImgTest} />*/}
            {/*    <Route exact path="/:page/:rowSize" component={ImgTest} />*/}
            {/*</Router>*/}
            {/*<ImgTest/>*/}

            {/* 카카오 지도 테스트 */}
            {/*
                import FunctionKaKaoMap from './components/kakaoMapApi/kakaoMapApi'
                import KaKaoMapApi from "./components/kakaoMapApi/kakaoMapApi";

            */}
            {/*<FunctionKaKaoMap/>*/}
            {/*<KaKaoMapApi/>*/}

            {/* 라우터(페이지 이동) 테스트 */}
            {/*<RoutersTest/>*/}
            {/*<PagingFooter/>*/}

            {/* 폼 양식 전송 테스트 */}
            {/*
                import FormTest from "./components/formTest";
            */}
            {/*<FormTest/>*/}
        </>
    )
}




