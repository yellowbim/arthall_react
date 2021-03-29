<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@ include file="/WEB-INF/view/include/headHtml.jsp" %>
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/login.css">
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script>
function check() {
	if($("#id").val().trim() == '') {
		alert("아이디를 입력해 주세요");
		$("#id").focus();
		
	} else if($("#pw").val() == '') {
		alert("비밀번호를 입력해 주세요");
		$("#pw").focus();
	} else {
		$("#loginForm").submit();
	}
}

</script>
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
            <h2>로그인 &#183; 회원가입</h2>
        </div>
        <div class="sub__container cf">
            <main id="main">
                <div class="main__content">
                    <section class="content__innerConts">
                        <h3 class="innerConts__tit">충무아트센터<br> 멤버십 로그인</h3>
                        <p>로그인으로 충무아트센터의 멤버십혜택을 이용하실 수 있습니다.</p>
                        <div class="innerConts__cont">
                            <div class="cont__login">
                                <form method="post" action="/member/login.do" name="loginForm" id="loginForm">
                                    <fieldset>
                                        <legend>로그인</legend>
                                        <div class="form__loginInfo">
                                            <ul class="loginInfo__inputs">
                                                <li class="cf">
                                                    <label for="id">
                                                        <span class="hidden">이름</span>
                                                        <i class="fas fa-user"></i>
                                                    </label>
                                                    <input type="text" id="id" name="id" value="kdy7710" placeholder="아이디 / ID">
                                                </li>
                                                <li class="cf">
                                                    <label for="pw">
                                                        <i class="fas fa-unlock"></i>
                                                    </label>
                                                    <input type="password" id="pw" name="pw" value="eodud123" placeholder="비밀번호 / Password">
                                                </li>
                                            </ul>
                                        </div>
                                        <p class="form__findBtns">
                                            <a href="<%=request.getContextPath()%>/member/findIDForm.do">아이디 찾기</a>
                                            <a href="<%=request.getContextPath()%>/member/findPasswordForm.do">비밀번호 찾기</a>
                                        </p>
                                        <input type="button" value="로그인" class="form__submit" onclick="check();">
                                        <a href="<%=request.getContextPath()%>/member/joinForm.do" class="form__joinBtn">회원가입</a>
                                    </fieldset>
                                </form>
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