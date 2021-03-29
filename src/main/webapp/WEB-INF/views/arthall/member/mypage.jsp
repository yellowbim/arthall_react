<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<%@ include file="/WEB-INF/view/include/headHtml.jsp"%>

<title>충무아트센터 | 내 정보 조회</title>
<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
	integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
	crossorigin="anonymous">
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/mypage.css">
<script>
	// 내 정보 조회_비밀번호 확인
	function check() {
		if ($('#pw').val().trim() != '') {
			$.ajax({
				url : 'confirmPw.do?pw='+ $('#pw').val(),
				type : 'html',
				async : false,
				success : function(data) {
					if (data.trim() != "true") {
						alert("비밀번호가 일치하지 않습니다.");
						$("#pw").val("");
						$("#pw").focus();
					} else {
						$("#passwordCheck").submit();
					}
					
				}
			});
		} else {
			alert("비밀번호를 입력해 주세요.");
		}
		return false;
	}
</script>
</head>
<body>
	<div id="wrap">
		<a href="#" id="gomain">본문바로가기</a>
		
		<!-- S T A R T :: headerArea-->
		<header>
			<%@ include file="/WEB-INF/view/include/top.jsp"%>
		</header>
		<!-- E N D :: headerArea-->

		<div class="sub__tit">
            <h2>내 정보 조회</h2>
        </div>
        <div class="sub__container cf">
            <aside class="container__subClass">
                <h3 class="subClass__tit"><i class="fas fa-id-card-alt"></i><br>마이페이지</h3>
                <nav class="subClass__list">
                    <ul>
                        <li><a href="<%=request.getContextPath()%>/member/mypage.do">내 정보 조회</a></li>
                        <li><a href="#">나의 예매내역</a></li>
                        <li><a href="#">나의 문의내역</a></li>
                    </ul>
                </nav>
            </aside>
            <main id="main">
                <div class="main__content">
                    <section class="content__innerConts">
                        <h3 class="innerConts__tit">내 정보 조회</h3>
                        <p>충무가족의 소중한 정보를 한 눈에 보고 수정할 수 있습니다. <br>
                       		 원하시는 메뉴를 선택해 편리하게 이용해보세요.</p>
                        <div class="innerConts__cont">
							<form method="post" action="/member/myInfoLoad.do" name="passwordCheck" id="passwordCheck">
							    <fieldset>
							        <legend>비밀번호 확인</legend>
							        <p><i class="fas fa-lock fa-3x"></i>비밀번호를 한 번 더 입력해주세요.</p>
							        <ul>
							            <li>
							                <label for="password">비밀번호 확인</label><input type="password" id="pw" name="pw" value="eodud123" required>
							            </li>
							            <li>
							                <input type="submit" value="확인" onclick="return check();">
							                <input type="reset" value="취소">
							            </li>
							        </ul>
							        <span class="bar barTop"></span>
							        <span class="bar barRight"></span>
							        <span class="bar barLeft"></span>
							        <span class="bar barBottom"></span>
							    </fieldset>
							</form>
                        </div>
                    </section>
                </div>
            </main>
            <a href="javascript:;" class="topBtn">TOP</a>
        </div>
	</div>
	
	<!-- S T A R T :: footer area  -->
	<footer>
		<%@ include file="/WEB-INF/view/include/footer.jsp"%>
	</footer>
	<!-- E N D :: footer area  -->
	
</body>
</html>