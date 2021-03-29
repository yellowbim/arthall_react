<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>    
<!DOCTYPE html>
<html lang="UTF-8">
<%@ include file="/WEB-INF/view/include/headHtml.jsp"%>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>충무아트센터 | 공지사항</title>
    <link rel="icon" sizes="16x16" type="image.png" href="<%=request.getContextPath()%>/img/favicon.png">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/notice_view.css">
    <script src="<%=request.getContextPath()%>/js/forEachPolyfill.js" defer></script>
    <script src="<%=request.getContextPath()%>/js/header.js" defer></script>
    <script src="<%=request.getContextPath()%>/js/topBtn.js" defer></script>
    <script src="<%=request.getContextPath()%>/js/footerSiteOpen.js" defer></script>
</head>

<body>
    <div id="wrap">
        <a href="#main" id="gomain">본문바로가기</a>
        <header>
            <%@ include file="/WEB-INF/view/include/top.jsp" %>
        </header>

        <div class="sub__tit">
            <h2>공지사항</h2>
        </div>
        <div class="sub__container cf">
            <aside class="container__subClass">
                <h3 class="subClass__tit"><i class="far fa-newspaper"></i><br>뉴스&middot;이슈</h3>
                <nav class="subClass__list">
                    <ul>
                        <li><a href="<%=request.getContextPath()%>/board/notice/index.do">공지사항</a></li>
                        <li><a href="<%=request.getContextPath()%>/board/news/index.do">뉴스&middot;이슈</a></li>
                         
                    </ul>
                </nav>
            </aside>
       
            <main id="main">
                 <div class="main__content">
                    <article class="content__cont">
                  
                        <h3 class="cont__tit">
                        <c:out value="${data.title}"/> 
                   		</h3>
                        <span class="cont__tit_date">
                                                     등록날짜 : <c:out value="${data.regDate}"/>
                        </span>
                   		<tbody>   
                      <tr>
										
						<th scope="row"></th>
						<td colspan="10">${data.content }</td>
	 					
					 </tr>
					
					 <tr>
						<c:if test="${data.filename != null}">
						<th scope="row"><label for="">이미지</label></th>
						<td><img src="/upload/board/notice/${data.filename}" width="200px"></td>
						</c:if>
					</tr>
			 													
					<tr>
						<c:if test="${data.filename != null}">	
						<th scope="row"><label for="">첨부파일</label></th>
						
						
						<td colspan="10">
						<div class="weidtFile">
							<p>
							<c:if test="${data.filename == null}">
							첨부파일 없음
							</c:if>
							<c:if test="${data.filename != null}">
							<a href="/include/file_down.jsp?path=upload/board/notice/&file_name=${data.filename}&file_name_org=${data.filename_org}"> 
							<target="_blank">${data.filename_org}</a><br />
							</c:if>
						</div>
						</td>
						</c:if>
							</tr>
					  	
					</tbody>
					
						
                        
                    </article>
					
                    <div class="paging_view">
                    	
                     	<c:if test="${data.no != null}" >
                     	
                        <a href="notice_view.do?no=${data.no-1}&page=${vo.page}" class="paging_view_prev">
                            <strong><i class="fas fa-caret-up"></i> 이전글 </strong><span></span>
                        </a>
                       
                        </c:if>
                       
                      	<c:if test="${data.no != null}" >
                        <a href="notice_view.do?no=${data.no+1}&page=${vo.page}" class="paging_view_next">
                            <strong><i class="fas fa-caret-down"></i> 다음글 </strong><span></span>
                        </a>
                      	</c:if>
                    </div>
                    <div class="paging_prev">
                        <a href="<%=request.getContextPath()%>/board/notice/index.do"><i class="fa fa-bars" aria-hidden="true"></i>목록으로</a>
                    </div>
                </div>
            </main>
            <a href="#" class="topBtn">TOP</a>
        </div>
        <footer>
     		<%@ include file="/WEB-INF/view/include/footer.jsp"%>
        </footer>
    </div>
</body></html>