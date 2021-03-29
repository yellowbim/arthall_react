<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@ include file="/WEB-INF/view/include/headHtml.jsp" %>
<script>
function reservForm(playName, playType) {
	alert(playType);
	if (playType == 1) {
    	window.open('performReservForm.do?playName=${play.playName}', 'ticketing', 'toolbar = no, location = no, status = no, menubar = no, resizable = no, scrollbars = no, width = 1060, height = 845');
	} else if (playType == 2) {
		window.open('exhibitReservForm.do?playName=${play.playName}', 'ticketing', 'toolbar = no, location = no, status = no, menubar = no, resizable = no, scrollbars = no, width = 1060, height = 845');
	}
// 	window.open('reservForm.do?playName=${play.playName}', 'ticketing', 'toolbar = no, location = no, status = no, menubar = no, resizable = no, scrollbars = no, width = 1060, height = 845');
// 	return false;
}
</script>
</head>
<body>
<div id = "wrap">
		<a href="<%=request.getContextPath()%>/index.do" id="gomain">본문바로가기</a>
		<!-- S T A R T :: headerArea-->
		<header>
			<%@ include file="/WEB-INF/view/include/top.jsp" %>
		</header>
		<!-- E N D :: headerArea--> 
		<!-- S T A R T :: section area-->
		<section class="mainVisual">
            <div class="visualView">
                <div class="bg1">
                </div>

                <div class="bg2">
                </div>

                <div class="bg3">
                </div>

                <div class="bg4">
                </div>

                <div class="bg5">
                </div>
            </div>

            <div class="visual cf">
                <div class="bg1">
                    <div class="textView">
                        <span>돌아온 창작뮤지컬의 전설!</span>
                        <h2>뮤지컬 프랑켄슈타인</h2>
                        <p>공연기간 : <span>2020.07.10~2020.09.13</span><br>공연장소 : <span>충무아트센터 대극장</span></p>
                        <p class="cf"><a class="ticketingBtn" onclick="reservForm('프랑켄슈타인', 1);">예매하기</a><a href="#">상세정보</a></p>
                    </div>
                </div>
                <div class="bg2">
                    <div class="textView">
                        <span>4연에 빛나는 웰메이드 창작뮤지컬</span>
                        <h2>뮤지컬 팬레터</h2>
                        <p>공연기간 : <span>2020.07.05~2020.08.31</span><br>공연장소 : <span>충무아트센터 중극장 블랙</span></p>
                        <p class="cf"><a href="javascript:;" class="ticketingBtn">예매하기</a><a href="#">상세정보</a></p>
                    </div>
                </div>
                <div class="bg3">
                   <div class="textView">
                        <span>마음을 울리는 감성뮤지컬</span>
                        <h2>뮤지컬 스토리오브마이라이프</h2>
                        <p>공연기간 : <span>2020.09.01~2020.10.25</span><br>공연장소 : <span>충무아트센터 중극장 블랙</span></p>
                        <p class="cf"><a href="javascript:;" class="ticketingBtn">예매하기</a><a href="#">상세정보</a></p>
                    </div>
                </div>
                <div class="bg4">
                    <div class="textView">
                        <span>낭만의 르네상스가 만들어낸 골때리는 역작</span>
                        <h2>뮤지컬 썸씽로튼</h2>
                        <p>공연기간 : <span>2020.08.14~2020.10.01</span><br>공연장소 : <span>충무아트센터 대극장</span></p>
                        <p class="cf"><a href="javascript:;" class="ticketingBtn">예매하기</a><a href="#">상세정보</a></p>
                    </div>
                </div>
                <div class="bg5">
                    <div class="textView">
                        <span>드라마 발레의 정수</span>
                        <h2>발레 오네긴</h2>
                        <p>공연기간 : <span>2020.10.02~2020.11.01</span><br>공연장소 : <span>충무아트센터 대극장</span></p>
                        <p class="cf"><a href="javascript:;" class="ticketingBtn">예매하기</a><a href="#">상세정보</a></p>
                    </div>
                </div>
            </div>
        </section>
		<!-- E N D :: section area-->
		<!-- S T A R T :: main area -->
		 <main id="main">
            <section class="icons">
                <div class="icons__wrap section__wrap">
                    <ul class="cf">
                        <li><a href="<%=request.getContextPath()%>/reserv/reserv.do"><i class="fas fa-ticket-alt fa-3x"></i>예매안내</a></li>
                        <li><a href="#"><i class="fas fa-route fa-3x"></i>오시는길</a></li>
                        <li><a href="#"><i class="fas fa-parking fa-3x"></i>주차안내</a></li>
                        <li><a href="<%=request.getContextPath()%>/board/faq/index.do"><i class="far fa-question-circle fa-3x"></i>자주하는 질문</a></li>
                        <li><a href="<%=request.getContextPath()%>/board/qna/index.do"><i class="far fa-comment-dots fa-3x"></i>1대1 문의</a></li>
                        <li><a href="etiquette.html"><i class="fas fa-theater-masks fa-3x"></i>극장예절</a></li>
                        <li><a href="#"><i class="fas fa-binoculars fa-3x"></i>오페라글래스 대여</a></li>
                    </ul>
                </div>
            </section>
            <section class="showInfo">
                <div class="showInfo__wrap section__wrap">
                    <h2 class="showInfo__tit">공연·전시 정보</h2>
                    <p>문화와 예술이 숨쉬는 행복한 문화공간 충무아트센터에서 진행되는 다양한 공연·전시</p>
                    <div class="showInfo__slide">
                        <div class="slide__btns btns">
                            <a href="javascript:;" class="btns__leftBtn"><i class="fas fa-chevron-left fa-3x"></i></a>
                            <a href="javascript:;" class="btns__rightBtn"><i class="fas fa-chevron-right fa-3x"></i></a>
                        </div>
                        <div class="slide__show">
                            <ul class="show__showList cf">
                            	<c:forEach var="play" items="${playList}" varStatus="vs" begin="1" end="11">
	                                <li class="showList__cont slide${vs.count}">
	                                    <div class="cont__wrap">
	                                        <div class="wrap__inner">
	                                            <h3>${play.playName}</h3>
	                                            <p>${play.hallName}<br>${play.startDate}~${play.endDate}<br>매주 월요일 공연 없음</p>
	                                            <a href="#" class="ticketingBtn" onclick="reservForm('${play.playName}', '${play.playType}')">예매하기</a>
	                                            <a href="#">상세정보</a>
	                                        </div>
	                                    </div>
	                                </li>
	                            </c:forEach>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="news cf">
                <div class="news__wrap section__wrap">
                    <article class="news__notice cf">
                        <div class="text">
                            <span>Notice</span>
                            <h2>최신소식</h2>
                            <p>충무아트센터의 <br> 최신소식을 알려드립니다.</p>
                            <a href="/board/notice/index.do" class="notice__more"><i class="fas fa-plus fa-2x"></i></a>
                        </div>
                        <div class="cont">
                            <table class="notice">
                            	<tbody>
								
									<c:if test="${noticeVo.totalCount ==0}">
									<tbody>
										<tr align="center" bgcolor="white">
									
											<td colspan="100%">게시글이 없습니다.</td>
										</tr>
									</tbody>
									</c:if>
									<c:if test="${noticeVo.totalCount > 0}">
									<c:forEach var="notice" items="${noticeList}" varStatus="status">
									<c:if test="${status.count <= 5}">
									<tr>
											<td class="title">

												<a href="/board/notice/notice_view.do?no=${notice.no}&page=${noticeVo.page}">
													<c:out value="${notice.title}"/>
												</a>
											</td>
											<td>${notice.regDate}</td>
										</tr>
									</c:if>
									</c:forEach>
									</c:if>
							
						
								</tbody>
                            </table>
                        </div>
                    </article>
                    <article class="news__event cf">
                        <div class="text">
                            <span>Event</span>
                            <h2>이벤트</h2>
                            <p>충무아트센터에서 진행되는 이벤트를 알려드립니다.</p>
                            <div class="event__btns">
                                <a href="javascript:;" class="left"><i class="fas fa-chevron-left fa-2x"></i></a>
                                <a href="javascript:;" class="right"><i class="fas fa-chevron-right fa-2x"></i></a>
                            </div>
                        </div>
                        <div class="cont">
                            <ul class="cf">
                                <li><a href="#"><img src="<%=request.getContextPath()%>/img/event/event-1.jpg" alt="이벤트1"></a></li>
                                <li><a href="#"><img src="<%=request.getContextPath()%>/img/event/event-2.jpg" alt="이벤트2"></a></li>
                                <li><a href="#"><img src="<%=request.getContextPath()%>/img/event/event-3.jpg" alt="이벤트3"></a></li>
                                <li><a href="#"><img src="<%=request.getContextPath()%>/img/event/event-4.jpg" alt="이벤트4"></a></li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
            <a href="javascript:;" class="topBtn">TOP</a>
        </main>
		<!-- E N D :: main area -->
		
	
	<!-- S T A R T :: footer area  -->
	<footer>
		<%@ include file="/WEB-INF/view/include/footer.jsp" %>
	
	</footer>
	
	<!-- E N D :: footer area  -->
</div>
</body>
</html>