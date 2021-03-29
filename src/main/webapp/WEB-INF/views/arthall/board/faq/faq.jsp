<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html lang="ko">
<%@ include file="/WEB-INF/view/include/headHtml.jsp"%>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>충무아트센터 | 자주하는 질문</title>
    <link rel="icon" sizes="16x16" type="image/png" href="img/favicon.png">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/faq.css">
    <script src="<%=request.getContextPath()%>/js/forEachPolyfill.js" defer></script>
    <script src="<%=request.getContextPath()%>/js/header.js" defer></script>
    <script src="<%=request.getContextPath()%>/js/topBtn.js" defer></script>
    <script src="<%=request.getContextPath()%>/js/footerSiteOpen.js" defer></script>
    <script src="<%=request.getContextPath()%>/js/faqOpenClose.js" defer></script>
</head>

<body>
    <div id="wrap">
        <a href="#main" id="gomain">본문바로가기</a>
        <header>
           <%@ include file="/WEB-INF/view/include/top.jsp" %>
        </header>

        <div class="sub__tit">
            <h2>자주하는 질문</h2>
        </div>
        <div class="sub__container cf">
            <aside class="container__subClass">
                <h3 class="subClass__tit"><i class="fas fa-info-circle"></i><br>고객센터</h3>
                <nav class="subClass__list">
                    <ul>
                        <li><a href="faq.html">자주하는 질문</a></li>
                        <li><a href="inquiry.html">1:1 문의</a></li>
                        <li><a href="etiquette.html">관람예절</a></li>
                        <li><a href="benefits.html">회원혜택</a></li>
                    </ul>
                </nav>
            </aside>
            <main id="main">
                <div class="main__content">
                    <section class="content__innerConts">
                        <h3 class="innerConts__tit">자주하는 질문</h3>
                        <p>고객님이 자주 하시는 질문을 모아 놓은 공간입니다. <br>보다 상세하고 신속한 답변이 필요하신 경우 1:1문의를 이용하시거나 전화문의 바랍니다. <br>충무아트센터 ARS : 02-2230-6600 (월~금 09:30~18:30 / 점심시간 12:00~13:00) <br>* 주말 및 공휴일 휴무</p>
                        <div class="innerConts__cont fqaBox">
                            <ul>
                            	<c:forEach var="faq" items="${list}">
									<li class="fqaBox__list">
	                                    <a href="#" class="list__tit">
	                                        <i class="far fa-question-circle"></i>
	                                        <span>${faq.title}</span>
	                                        <i class="fas fa-chevron-down arrow"></i>
	                                    </a>
	                                    <div class="list__answer">
	                                        <p class="answer__text">${faq.content}</p>
	                                    </div>
	                                </li>
                                </c:forEach>
                             </ul>

                        </div>
                    </section>
                </div>
            </main>
            <a href="javascript:;" class="topBtn">TOP</a>
        </div>
        <footer>
            <%@ include file="/WEB-INF/view/include/footer.jsp" %>
        </footer>
    </div>
</body></html>
