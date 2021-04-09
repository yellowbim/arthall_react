import React, {Component} from "react";

// 다음 우편 라이브러리 불러오기

export default class DaumZip extends Component{

    componentDidMount() {
        // 다음 api 추가
        const script = document.createElement("script");
        // 스크립트가 나머지 페이지와 비동이로 실행됨(ex 팝업?, default:true)
        script.async = true;
        script.src   = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        document.head.appendChild(script);


    }

    render() {
        return(
            <>

            </>
        )
    }
}