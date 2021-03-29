<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@ include file="/WEB-INF/view/include/headHtml.jsp" %>
    <link rel="stylesheet" href="<%=request.getContextPath()%>/css/findPassword.css">
</head>
<div id = "wrap">
	<a href="<%=request.getContextPath()%>/index.do" id="gomain">본문바로가기</a>
	<!-- S T A R T :: headerArea-->
	<header>
		<%@ include file="/WEB-INF/view/include/top.jsp" %>
	</header>
	<!-- E N D :: headerArea--> 
	<!-- S T A R T :: mainArea--> 
	
	 <div class="sub__tit">
            <h2>아이디 &#183; 비밀번호 찾기</h2>
        </div>
        <div class="sub__container cf">
            <main id="main">
                <div class="main__content">
                    <section class="content__innerConts">
                        <h3 class="innerConts__tit">비밀번호 찾기</h3>
                        <p>회원정보에 등록한 이메일과 입력한 이메일이 같아야 비밀번호를 확인 할 수 있습니다. <br>개인정보는 확인용으로만 처리되며 본인확인 외 다른 용도로 사용되지 않습니다.</p>
                        <div class="innerConts__cont">
                            <div class="cont__find">
                                <ul class="find__list cf">
                                    <li><a href="<%=request.getContextPath()%>/member/findIDForm.do">아이디 찾기</a></li>
                                    <li class="on"><a href="<%=request.getContextPath()%>/member/findPasswordForm.do">비밀번호 찾기</a></li>
                                </ul>
                               <table class="pwResult">
                                   <tr>
                                       <td>회원님의 임시 비밀번호를 입력하신 이메일로 발송하였습니다.<br>임시 비밀번호로 로그인 후 비밀번호 변경을 해주세요.</td>
                                   </tr>                              
                               </table>
                               <div class="pwResultBtn">
                                   <a href="<%=request.getContextPath()%>/member/loginForm.do" class="form__loginBtn">로그인</a>
                               </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <a href="javascript:;" class="topBtn">TOP</a>
        </div>
	<!-- E N D :: mainArea--> 
		
	<!-- S T A R T :: footer area  -->
	<footer>
		<%@ include file="/WEB-INF/view/include/footer.jsp" %>
	
	</footer>
	
	<!-- E N D :: footer area  -->
</div>
</body>
</html>