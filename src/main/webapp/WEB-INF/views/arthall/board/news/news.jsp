<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>

<html lang="ko">
<%@ include file="/WEB-INF/view/include/headHtml.jsp"%>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>충무아트센터 | 뉴스&middot;이슈</title>
    <link rel="icon" sizes="16x16" type="image.png" href="<%=request.getContextPath()%>/img/favicon.png">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/notice.css">
    <script src="<%=request.getContextPath()%>/js/forEachPolyfill.js" defer></script>
    <script src="<%=request.getContextPath()%>/js/header.js" defer></script>
    <script src="<%=request.getContextPath()%>/js/topBtn.js" defer></script>
    <script src="<%=request.getContextPath()%>/js/footerSiteOpen.js" defer></script>
 <!--  <script src="<%=request.getContextPath()%>/js/pagenation.js" defer></script>-->
    <script src="<%=request.getContextPath()%>/js/jquery-1.11.3.min.js" defer></script>
    <script src="<%=request.getContextPath()%>/js/notice.js" defer></script>
</head>

<body>
    <div id="wrap">
        <a href="#main" id="gomain">본문바로가기</a>
        <header>
			<%@ include file="/WEB-INF/view/include/top.jsp" %>
        </header>

        <div class="sub__tit">
        
        <!--   <h2>뉴스&middot;이슈</h2>-->
        <h2>뉴스&middot;소식</h2>
        </div>
        <div class="sub__container cf">
            <aside class="container__subClass">
                <h3 class="subClass__tit"><i class="far fa-newspaper"></i><br>뉴스&middot;소식</h3>
                <nav class="subClass__list">
                    <ul>
                        <li><a href="<%=request.getContextPath()%>/board/notice/index.do">공지사항</a></li>
                        <li><a href="<%=request.getContextPath()%>/board/news/index.do">뉴스&middot;이슈</a></li>
                    </ul>
                </nav>
            </aside>
            <main id="main">
                <div class="main__content">
                    <section class="content__innerConts">
                        <h3 class="innerConts__tit">뉴스&middot;소식</h3>
                        <p>충무아트센터 회원 가입하시면 충무아트센터 뉴스소식을 메일로 받아보실 수 있습니다.</p>
                        <div class="innerConts__cont">
                            <div class="cont__noticeContainer">
                                <table class="noticeContainer__notice notice">
                                    <thead>
                                        <tr>
                                            <th class="numTit">번호</th>
                                            <th class="titTit">제목</th>
                                            <th class="dateTit">작성일</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <c:if test="${vo.totalCount == 0}">
									<tbody>
									<tr align="center" bgcolor="white">
								
										<td colspan="100%">게시글이 없습니다.</td>
									</tr>
									</tbody>
									</c:if>
                                    
                                    <c:if test="${vo.totalCount > 0}">
                                    <c:forEach var="news" items="${list}">
                                        <tr>
                                            <td class="notice__num"><c:out value="${news.no}"/></td>
                                            <td class="notice__tit">
                                            <a href="<%=request.getContextPath()%>/board/notice/news_view.do?no=${news.no}&page=${vo.page}">
                                            	<c:out value="${news.title}"/>
                                            </a></td>
                                            <td class="notice__date">${news.regDate}</td>
                                        </tr>
                                    </c:forEach>
                                    </c:if>
                          
                                     
                                    </tbody>
                                </table>
                                <!-- <a href="notice_submit.html" class="writeBtn"><i class="fas fa-edit"></i>문의하기</a> -->
                              	<div class="pagenation">
                               		
                            		  
                            	   <c:if test="${vo.startPage > 10}">
                                    <a href="index.do?page=${vo.startPage - 10}" class="pageBtn doublePrevBtn"><i class="fas fa-angle-double-left"></i></a>
                              		</c:if>
                              		<c:if test="${vo.startPage > 5}">
                                    <a href="index.do?page=${vo.startPage - 5}" class="pageBtn prevBtn"><i class="fas fa-angle-left"></i></a>
                              		</c:if>
                              		
                              		
                               		<c:forEach var="pNo" begin="${vo.startPage}"
									end="${vo.endPage}">
									<a href="index.do?page=${pNo}&stype=${vo.stype}&sval=${vo.sval}">${pNo}</a>
									</c:forEach>
                               		
                               		<c:if test="${vo.endPage < vo.totalPage}">
                                    <a href="index.do?page=${vo.startPage+5}" class="pageBtn nextBtn"><i class="fas fa-angle-right"></i></a>
                                    
                                    <a href="index.do?page=${vo.startPage+10}" class="pageBtn doubleNextBtn"><i class="fas fa-angle-double-right"></i></a> 
                                	</c:if>
                                	</div>
                                
                                	
                              
                                   
                                   	<form class="search_notice" action="index.do" method="post">
                                   	<select name="stype" title="검색을 선택해주세요">
										<option value="all" <c:if test="${vo.stype=='all'}">selected</c:if>>전체</option>
										<option value="title" <c:if test="${vo.stype=='title'}">selected</c:if>>제목</option>
										<option value="content" <c:if test="${vo.stype=='content'}">selected</c:if>>내용</option>
									</select>
                                    <input type="text" name="sval"  value="${vo.sval}" class="search_nt" placeholder="검색어를 입력해주세요"><br>
                                    <button type="submit" class="submit"><i class="fa fa-search"></i></button>
                                    
                                	</form>
                                	
									
                                    
                               
                                
                                
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <a href="javascript:;" class="topBtn">TOP</a>
        </div>
        <footer>
            <div class="footerinner">
                <div class="footerinner__top cf">
                    <h2><a href="index.html"><img src="<%=request.getContextPath()%>/img/logo.png" alt="로고"></a></h2>
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
</body></html>
