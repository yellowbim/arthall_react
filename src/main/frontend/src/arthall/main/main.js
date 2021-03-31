import React, {Component} from "react";
import './../CSS/main.css';
import './../CSS/reset.css';
import img from "../../img/footer.jpg";


export default class main extends  Component{

    constructor(props) {
        super(props);
        this.state = {
            bg1:false,
            bg2:false,
            bg3:false,
            bg4:false,
            bg5:false
        }
    }


    render(){
        // visual.js
        const onMouseEnter = (e) =>{
            let value = [false,false,false,false,false];
            value[e] = true;

            console.log('마우스 들어올때 bg',e);

            this.setState({
                bg1:value[0],
                bg2:value[1],
                bg3:value[2],
                bg4:value[3],
                bg5:value[4],
            })
            console.log(this.state);
        }

        const onMouseLeave = (e) =>{
            this.setState({
                bg1:false,
                bg2:false,
                bg3:false,
                bg4:false,
                bg5:false
            })
            // alert('마우스 떠남');
        }

        function changeDefault(){
            let {style} = this.state;

        }


        return(
            <div id="wrap">
                <a href="/index.do" id="gomain">본문바로가기</a>

                <section className="mainVisual">
                    <div className="visualView">
                        <div className={"bg1 " + (this.state.bg1 ? "show" : "")} style={{width:this.state.bg1 ? "100%":"20%"}}>
                        </div>

                        <div className={"bg2 " + (this.state.bg2 ? "show" : "")} style={{width:this.state.bg2 ? "100%":"20%", left:this.state.bg2 ? "0%":"20%"}}>
                        </div>

                        <div className={"bg3 " + (this.state.bg3 ? "show" : "")} style={{width:this.state.bg3 ? "100%":"20%", left:this.state.bg3 ? "0%":"40%"}}>
                        </div>

                        <div className={"bg4 " + (this.state.bg4 ? "show" : "")} style={{width:this.state.bg4 ? "100%":"20%", left:this.state.bg4 ? "0%":"60%"}}>
                        </div>

                        <div className={"bg5 " + (this.state.bg5 ? "show" : "")} style={{width:this.state.bg5 ? "100%":"20%", left:this.state.bg5 ? "0%":"80%"}}>
                        </div>
                    </div>
                    <button type="buton"  onClick={this.changeDefault}>길이 변경하기</button>
                    <div className="visual cf">
                        <div className="bg1" onMouseEnter={() => onMouseEnter(0)} onMouseLeave={onMouseLeave}>
                            <div className={"textView " + (this.state.bg1 ? "on" : "")}>
                                <span>돌아온 창작뮤지컬의 전설!</span>
                                <h2>뮤지컬 프랑켄슈타인</h2>
                                <p>공연기간 : <span>2020.07.10~2020.09.13</span><br/>공연장소 : <span>충무아트센터 대극장</span></p>
                                <p className="cf"><a className="ticketingBtn" >예매하기</a><a
                                    href="#">상세정보</a></p>
                            </div>
                        </div>
                        <div className="bg2" onMouseEnter={() => onMouseEnter(1)} onMouseLeave={onMouseLeave}>
                            <div className={"textView " + (this.state.bg2 ? "on" : "")}>
                                <span>4연에 빛나는 웰메이드 창작뮤지컬</span>
                                <h2>뮤지컬 팬레터</h2>
                                <p>공연기간 : <span>2020.07.05~2020.08.31</span><br/>공연장소 : <span>충무아트센터 중극장 블랙</span></p>
                                <p className="cf"><a href="" className="ticketingBtn">예매하기</a><a
                                    href="#">상세정보</a></p>
                            </div>
                        </div>
                        <div className="bg3" onMouseEnter={() => onMouseEnter(2)} onMouseLeave={onMouseLeave}>
                            <div className={"textView " + (this.state.bg3 ? "on" : "")}>
                                <span>마음을 울리는 감성뮤지컬</span>
                                <h2>뮤지컬 스토리오브마이라이프</h2>
                                <p>공연기간 : <span>2020.09.01~2020.10.25</span><br/>공연장소 : <span>충무아트센터 중극장 블랙</span></p>
                                <p className="cf"><a href="" className="ticketingBtn">예매하기</a><a
                                    href="#">상세정보</a></p>
                            </div>
                        </div>
                        <div className="bg4" onMouseEnter={() => onMouseEnter(3)} onMouseLeave={onMouseLeave}>
                            <div className={"textView " + (this.state.bg4 ? "on" : "")}>
                                <span>낭만의 르네상스가 만들어낸 골때리는 역작</span>
                                <h2>뮤지컬 썸씽로튼</h2>
                                <p>공연기간 : <span>2020.08.14~2020.10.01</span><br/>공연장소 : <span>충무아트센터 대극장</span></p>
                                <p className="cf"><a href="" className="ticketingBtn">예매하기</a><a
                                    href="#">상세정보</a></p>
                            </div>
                        </div>
                        <div className="bg5" onMouseEnter={() => onMouseEnter(4)} onMouseLeave={onMouseLeave}>
                            <div className={"textView " + (this.state.bg5 ? "on" : "")}>
                                <span>드라마 발레의 정수</span>
                                <h2>발레 오네긴</h2>
                                <p>공연기간 : <span>2020.10.02~2020.11.01</span><br/>공연장소 : <span>충무아트센터 대극장</span></p>
                                <p className="cf"><a href="" className="ticketingBtn">예매하기</a><a
                                    href="#">상세정보</a></p>
                            </div>
                        </div>
                    </div>
                </section>


                <main id="main">
                    <section className="icons">
                        <div className="icons__wrap section__wrap">
                            <ul className="cf">
                                <li>
                                    <a href="/reserv/reserv.do">
                                        <i className="fas fa-ticket-alt fa-3x"></i>예매안내
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><i className="fas fa-route fa-3x"></i>오시는길</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fas fa-parking fa-3x"></i>주차안내</a>
                                </li>
                                <li>
                                    <a href="/board/faq/index.do"><i className="far fa-question-circle fa-3x"></i>자주하는 질문</a>
                                </li>
                                <li>
                                    <a href="/board/qna/index.do"><i className="far fa-comment-dots fa-3x"></i>1대1 문의</a>
                                </li>
                                <li>
                                    <a href="etiquette.html">
                                        <i className="fas fa-theater-masks fa-3x"></i>극장예절</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fas fa-binoculars fa-3x"></i>오페라글래스 대여</a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className="showInfo">
                        <div className="showInfo__wrap section__wrap">
                            <h2 className="showInfo__tit">공연·전시 정보</h2>
                            <p>문화와 예술이 숨쉬는 행복한 문화공간 충무아트센터에서 진행되는 다양한 공연·전시</p>
                            <div className="showInfo__slide">
                                <div className="slide__btns btns">
                                    <button type="button" className="btns__leftBtn">
                                        <i className="fas fa-chevron-left fa-3x"></i>
                                    </button>
                                    <button type="button" className="btns__rightBtn">
                                        <i className="fas fa-chevron-right fa-3x"></i>
                                    </button>
                                </div>
                                <div className="slide__show">
                                    <ul className="show__showList cf">
                                        {/*<c:forEach var="play" items="${playList}" varStatus="vs" begin="1" end="11">*/}
                                        {/*    <li className="showList__cont slide${vs.count}">*/}
                                        {/*        <div className="cont__wrap">*/}
                                        {/*            <div className="wrap__inner">*/}
                                        {/*                <h3>${play.playName}</h3>*/}
                                        {/*                <p>${play.hallName}<br/>${play.startDate}~${play.endDate}<br/>매주 월요일*/}
                                        {/*                    공연 없음</p>*/}
                                        {/*                <a href="#" className="ticketingBtn"*/}
                                        {/*                   onClick="reservForm('${play.playName}', '${play.playType}')">예매하기</a>*/}
                                        {/*                <a href="#">상세정보</a>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </li>*/}
                                        {/*</c:forEach>*/}
                                        <li className="showList__cont slide1">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide2">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide3">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn" >예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide4">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn" >예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide5">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide6">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide7">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide8">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide9">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="showList__cont slide10">
                                            <div className="cont__wrap">
                                                <div className="wrap__inner">
                                                    <h3>공연이름</h3>
                                                    <p>홀이름<br/>공연 기간<br/>매주 월요일 공연 없음</p>
                                                    <a href="#" className="ticketingBtn">예매하기</a>
                                                    <a href="#">상세정보</a>
                                                </div>
                                            </div>
                                        </li>
                                    {/*  공연/전시 정보 이미지로 박아넣음. 추후에 정보 가져와서 보여줘야함  */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="news cf">
                        <div className="news__wrap section__wrap">
                            <article className="news__notice cf">
                                <div className="text">
                                    <span>Notice</span>
                                    <h2>최신소식</h2>
                                    <p>충무아트센터의 <br/> 최신소식을 알려드립니다.</p>
                                    <a href="/board/notice/index.do" className="notice__more"><i
                                        className="fas fa-plus fa-2x"></i></a>
                                </div>
                                <div className="cont">
                                    <table className="notice">
                                        <tbody>

                                        {/*<c:if test="${noticeVo.totalCount ==0}">*/}
                                        {/*    <tbody>*/}
                                        {/*    <tr align="center" bgcolor="white">*/}

                                        {/*        <td colSpan="100%">게시글이 없습니다.</td>*/}
                                        {/*    </tr>*/}
                                        {/*    </tbody>*/}
                                        {/*</c:if>*/}
                                        {/*<c:if test="${noticeVo.totalCount > 0}">*/}
                                        {/*    <c:forEach var="notice" items="${noticeList}" varStatus="status">*/}
                                        {/*        <c:if test="${status.count <= 5}">*/}
                                        {/*            <tr>*/}
                                        {/*                <td className="title">*/}

                                        {/*                    <a href="/board/notice/notice_view.do?no=${notice.no}&page=${noticeVo.page}">*/}
                                        {/*                        <c:out value="${notice.title}"/>*/}
                                        {/*                    </a>*/}
                                        {/*                </td>*/}
                                        {/*                <td>${notice.regDate}</td>*/}
                                        {/*            </tr>*/}
                                        {/*        </c:if>*/}
                                        {/*    </c:forEach>*/}
                                        {/*</c:if>*/}


                                        </tbody>
                                    </table>
                                </div>
                            </article>
                            <article className="news__event cf">
                                <div className="text">
                                    <span>Event</span>
                                    <h2>이벤트</h2>
                                    <p>충무아트센터에서 진행되는 이벤트를 알려드립니다.</p>
                                    <div className="event__btns">
                                        <a href="" className="left">
                                            <i className="fas fa-chevron-left fa-2x"></i>
                                        </a>
                                        <a href="" className="right">
                                            <i className="fas fa-chevron-right fa-2x"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="cont">
                                    <ul className="cf">
                                        <li><a href="#"><img src="/event/event-1.jpg" alt="이벤트1"/></a></li>
                                        <li><a href="#"><img src="/event/event-2.jpg" alt="이벤트2"/></a></li>
                                        <li><a href="#"><img src="/event/event-3.jpg" alt="이벤트3"/></a></li>
                                        <li><a href="#"><img src="/event/event-4.jpg" alt="이벤트4"/></a></li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </section>
                    <a href="" className="topBtn">TOP</a>
                </main>



            </div>
        )
    }


}