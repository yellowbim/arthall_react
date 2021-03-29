<%@ page contentType="text/html; charset=utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <%@ include file="/WEB-INF/view/include/headHtml.jsp"%>
    <title>충무아트센터 | 나의 예매 내역</title>
    <link rel="icon" sizes="16x16" type="image.png" href="<%=request.getContextPath() %>/img/favicon.png">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">
    <link rel="stylesheet" href="<%=request.getContextPath() %>/css/ticketHistory.css">
    <script src="<%=request.getContextPath() %>/js/forEachPolyfill.js" defer></script>
    <script src="<%=request.getContextPath() %>/js/header.js" defer></script>
    <script src="<%=request.getContextPath() %>/js/topBtn.js" defer></script>
    <script src="<%=request.getContextPath() %>/js/footerSiteOpen.js" defer></script>
    <script src="<%=request.getContextPath() %>/js/ticketHistoryDayCount.js" defer></script>
    <script>
    function cancle(reservNo){
    	if (confirm("예매 취소하시겠습니까?")){
    		location.href="cancle.do?reservNo="+reservNo;
    	}
    }
    </script>
</head>

<body>
    <div id="wrap">
        <header>
			<%@ include file="/WEB-INF/view/include/top.jsp" %>
		</header>
        <div class="sub__tit">
            <h2>나의 예매 내역</h2>
        </div>
        <div class="sub__container cf">
            <aside class="container__subClass">
                <h3 class="subClass__tit"><i class="fas fa-id-card-alt"></i><br>마이페이지</h3>
                <nav class="subClass__list">
                    <ul>
                        <li><a href="mypage.html">내 정보 조회</a></li>
                        <li><a href="ticketHistory.html">나의 예매내역</a></li>
                        <li><a href="inquiry.html">나의 문의내역</a></li>
                    </ul>
                </nav>
            </aside>
            <main id="main">
                <div class="main__content">
                    <section class="content__innerConts">
                        <h3 class="innerConts__tit">나의 예매 내역</h3>
                        <p>예매하신 공연&middot;전시&middot;행사 내역 입니다.</p>
                        <div class="innerConts__cont">
                            <section class="cont__reserve">
                                <h4 class="reserve__tit">예매한 공연&middot;전시&middot;행사</h4>
                                <c:forEach var="reservMy" items="${reservMy}">
                                <div class="reserve__ticket cf">
                                    <figure class="ticket__imgContainer">
                                        <img src='/upload/play/${reservMy.filename}'/>
                                    </figure>
                                    <article class="ticket__infoContainer">
                                        <h5 class="infoContainer__tit">${reservMy.playName}</h5>
                                        <ul class="infoContainer__listContainer">
                                            <li class="listContainer__listInfo cf">예매번호 <span>${reservMy.reservNo}</span></li>
                                            <li class="listContainer__listInfo cf">장소 <span>${reservMy.hallName}</span></li>
                                            <li class="listContainer__listInfo cf">관람일 <span class="dDayBox">${reservMy.playDate}</span></li>
                                            <li class="listContainer__listInfo cf">관람시간 <span>${reservMy.time}</span></li>
                                            <li class="listContainer__listInfo cf">입장권 <span>${reservMy.seat}</span></li>
                                            <li class="listContainer__listInfo cf">가격 <span>${reservMy.price}</span></li>
                                            <li class="listContainer__listInfo cf">파일명 <span>${reservMy.filename}</span></li>
                                        </ul>
                                        <p class="infoContainer__timerContainer"><i class="fas fa-sync-alt fa-spin"></i><span class="timerContainer__timer">D-53</span></p>
                                        <p class="infoContainer__btnContainer"><a class="cancleBtn" onclick="cancle('${reservMy.reservNo}');">예매취소</a></p>
                                    </article>
                                </div>
                                </c:forEach>
                            </section>
                            <section class="cont__watched">
                                <h4 class="watched__tit">관람한 공연&middot;전시&middot;행사</h4>
                                <c:forEach var="reservMyPass" items="${reservMyPass}">
	                                <div class="watched__ticket cf">
	                                    <figure class="ticket__imgContainer">
	                                        <img src="<%=request.getContextPath() %>/img/per/sub-pos-8.jpg" alt="지젤 포스터">
	                                    </figure>
	                                    <article class="ticket__infoContainer">
	                                        <h5 class="infoContainer__tit">${reservMyPass.playName}</h5>
	                                        <ul class="infoContainer__listContainer">
	                                           <li class="listContainer__listInfo cf">예매번호 <span>${reservMyPass.reservNo}</span></li>
	                                            <li class="listContainer__listInfo cf">장소 <span>${reservMyPass.hallName}</span></li>
	                                            <li class="listContainer__listInfo cf">관람일 <span>${reservMyPass.playDate}</span></li>
	                                            <li class="listContainer__listInfo cf">관람시간 <span>${reservMyPass.time}</span></li>
	                                            <li class="listContainer__listInfo cf">입장권 <span>${reservMyPass.seat}</span></li>
	                                            <li class="listContainer__listInfo cf">가격 <span>${reservMyPass.price}</span></li>
	                                        </ul>
	                                    </article>
	                                </div>
                                </c:forEach>
                    		</section>
                    		<section class="cont__watched">
                                <h4 class="watched__tit">예매취소 내역&middot;전시&middot;행사</h4>
                                <c:forEach var="reservMyCancle" items="${reservMyCancle}">
	                                <div class="watched__ticket cf">
	                                    <figure class="ticket__imgContainer">
	                                        <img src="<%=request.getContextPath() %>/img/per/sub-pos-8.jpg" alt="지젤 포스터">
	                                    </figure>
	                                    <article class="ticket__infoContainer">
	                                        <h5 class="infoContainer__tit">${reservMyCancle.playName}</h5>
	                                        <ul class="infoContainer__listContainer">
	                                           <li class="listContainer__listInfo cf">예매번호 <span>${reservMyCancle.reservNo}</span></li>
	                                            <li class="listContainer__listInfo cf">장소 <span>${reservMyCancle.hallName}</span></li>
	                                            <li class="listContainer__listInfo cf">관람일 <span>${reservMyCancle.playDate}</span></li>
	                                            <li class="listContainer__listInfo cf">관람시간 <span>${reservMyCancle.time}</span></li>
	                                            <li class="listContainer__listInfo cf">입장권 <span>${reservMyCancle.seat}</span></li>
	                                            <li class="listContainer__listInfo cf">가격 <span>${reservMyCancle.price}</span></li>
	                                        </ul>
	                                    </article>
	                                </div>
                                </c:forEach>
                    		</section>
                		</div>
                	</section>
                </div>
            </main>
            <a href="javascript:;" class="topBtn">TOP</a>
        </div>
        <footer>
            <div class="footerinner">
                <div class="footerinner__top cf">
                    <h2><a href="index.html"><img src="<%=request.getContextPath() %>/img/logo.png" alt="로고"></a></h2>
                    <div class="top__links">
                        <div class="links__sns cf">
                            <a href="https://ko-kr.facebook.com/chungmuartscenter/" target="_blank"><i class="fab fa-facebook-f fa-2x"></i></a>
                            <a href="https://twitter.com/chungmuholic" target="_blank"><i class="fab fa-twitter fa-2x"></i></a>
                            <a href="https://www.instagram.com/chungmu2016/" target="_blank"><i class="fab fa-instagram fa-2x"></i></a>
                            <a href="https://blog.naver.com/cmah_arthall" target="_blank"><i class="xi-naver xi-2x"></i></a>
                            <a href="https://www.youtube.com/channel/UC4UWAAwSsT4O3hcLjFL8kXQ" target="_blank"><i class="fab fa-youtube fa-2x"></i></a>
                        </div>
                        <ul class="links__list cf">
                            <li><a href="#">이용약관</a></li>
                            <li><a href="#">행정정보공개</a></li>
                            <li><a href="#">이메일수집거부</a></li>
                            <li><a href="#">개인정보취급방침</a></li>
                            <li><a href="#">사이트맵</a></li>
                            <li>
                                <select name="siteBox" id="siteBox">
                                    <option value="">관련사이트 바로가기</option>
                                    <option value="http://www.beautifulmindcharity.org/">뷰티풀마인드</option>
                                    <option value="http://www.chimff.com/2019/">충무로 뮤지컬 영화제</option>
                                    <option value="https://www.e-junggulib.or.kr/SJGL/">서울중구 통합 전자도서관</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footerinner__bottom cf">
                    <div class="bottom__left">
                        <address>
                            사업자등록번호 : 201-82-06405 <br>
                            통신판매번호 : 제2008-서울중구-1218호 <br>
                            주소 : 서울시 중구 퇴계로 387(흥인동 131)
                        </address>
                        <p>COPY &copy; CHUNGMU ARTS CENTER</p>
                    </div>
                    <div class="bottom__right">
                        <a href="tel:02-2230-6600">02.2230.6600</a>
                        <p>
                            상담시간 : 월~금 09:30~18:30 <br>
                            점심시간 : 12:00~13:00 <br>
                            주말 및 공휴일 휴무
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</body>

</html>
