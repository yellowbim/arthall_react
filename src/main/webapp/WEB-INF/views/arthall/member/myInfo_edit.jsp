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
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/myInfo_edit.css">

<script>
	$(document).ready(function(){
		
		// 성별 체크
		$("input:radio[name='sex']:radio[value='${vo.gender}']").prop('checked', true);		
		
		// 이메일 광고 체크
		if ('${vo.ad_email}' == 1){
			$("input:checkbox[id='chk1']").attr("checked", true);
		} else {
			$("input:checkbox[id='chk1']").attr("checked", false);
		}
		
		// sms 광고 체크
		if ('${vo.ad_tel}' == 1){
			$("input:checkbox[id='chk2']").attr("checked", true);
		} else {
			$("input:checkbox[id='chk2']").attr("checked", false);
		}	
		
	});

	// 이메일 선택 이벤트
	$(document).ready(function(){
		$('#email_sel').on('change',function(){
			$('#email_add').val(this.value);
		});
	});
	
	// 이메일 인증번호 발송
	var certiCode=''; 
	function sendMail(){
		if ($('#email_id').val().trim() != '' && $('#email_add').val().trim() != '') {
			$.ajax({
				url : 'sendMail.do?email='+ $('#email_id').val()+'@'+$('#email_add').val(),
				type : 'html',
				async : false,
				success : function(data) {
					certiCode=data;
					alert("메일을 발송하였습니다.");
				}
			});
		} else {
			alert("이메일을 입력해 주세요");
		}
		return false;
	}
	
	//인증번호 확인
	function email_Conf(){
		if ($('#emailConfirm').val().trim() != '') {
			if ($('#emailConfirm').val().trim() != certiCode) {
					alert("인증번호가 일치하지 않습니다");
					$("#emailConfirm").val("");
					$("#emailConfirm").focus();
			} else {
				alert("인증이 완료되었습니다");
				document.getElementById('emailConfirm').disabled = true;
				document.getElementById('mailFuncConf').disabled = true;
			}
		} else {
			alert("인증번호를 입력해 주세요");
		}
		return false;
	}
	
	// 회원정보수정_확인버튼
	function regist() {
		
	 	var pattern_pw = /^[a-zA-Z][a-zA-Z0-9+]{3,11}$/;
	 	var pattern_birth = /^[0-9+]{8}$/;
	 	var pattern_tel = /^[0-9+]{9,11}$/;
	 	
	 	/^[a-zA-Z][a-zA-Z0-9+]{3,11}$/;
	 	
	 	if ($('input:checkbox[id="chk1"]').is(":checked") == true ) {
	 		$("#ad_email").val(1);
	 	} else {
	 		$("#ad_email").val(0);
	 	}
	 	
	 	if ($('input:checkbox[id="chk2"]').is(":checked") == true ) {
	 		$("#ad_tel").val(1);
	 	} else {
	 		$("#ad_tel").val(0);
	 	}
	 	
	 	if ($("#pw").val().trim() == '' || $("#pw").val().trim() == null) {
			alert("비밀번호를 입력해 주세요.");
			$("#pw").focus();
		} else if (pattern_pw.test($('#pw').val().trim()) != true) {
			alert("비밀번호의 첫글자는 영문이며 4~12자의 영문 대소문자와 숫자로만 입력해주세요.");
			$("#pw").focus();
		} else if ($("#pw2").val().trim() == '' || $("#pw2").val().trim() == null) {
			alert("비밀번호 확인을 입력해 주세요.");
			$("#pw2").focus();
		} else if ($("#pw").val().trim() != $("#pw2").val().trim()) {
			alert("비밀번호가 일치하지 않습니다.");
			$("#pw").focus();
		} else if ($("#name").val().trim() == '' || $("#name").val().trim() == null) {
			alert("이름을 입력해 주세요.");
			$("#name").focus();
		} else if ($("#birth").val().trim() == '' || $("#birth").val().trim() == null) {
			alert("생년월일을 입력해 주세요.");
			$("#birth").focus();
		} else if (pattern_birth.test($('#birth').val().trim()) != true) {
			alert("생년월일을 형식에 맞게 작성해 주세요.");
			$("#birth").focus();
		} else if ($("#tel").val().trim() == '' || $("#tel").val().trim() == null) {
			alert("연락처를 입력해 주세요.");
			$("#tel").focus();
		} else if (pattern_tel.test($('#tel').val().trim()) != true) {
			alert("연락처를 형식에 맞게 작성해 주세요.");
			$("#tel").focus();
		} else if ($("#sample4_postcode").val().trim() == '' || $("#sample4_postcode").val().trim() == null){
			alert("우편번호찾기를 눌러 주소를 검색해주세요.");
			$("#sample4_detailAddress").focus();
		} else if ($("#sample4_detailAddress").val().trim() == '' || $("#sample4_detailAddress").val().trim() == null){
			alert("상세주소를 입력해 주세요.");
			$("#sample4_detailAddress").focus()
		} else if ($("#email_id").val().trim() == '' || $("#email_id").val().trim() == null) {
			alert("이메일을 입력해 주세요.");
			$("#email_id").focus();
		} else if ($("#email_add").val().trim() == '' || $("#email_add").val().trim() == null) {
			alert("이메일을 입력해 주세요.");
			$("#email_add").focus();			
		} else if ($("#emailConfirm").val().trim() == '' || $("#emailConfirm").val().trim() == null) {
			alert("인증번호를 입력 후 인증번호 확인 버튼을 눌러주세요.");
			$("#emailConfirm").focus();			
		} else {
			var gender = $('input[name="sex"]:checked').val();
		 	$("#gender").val(gender);
			
			alert("수정이 완료되었습니다.");
			$("#myInfoEdit_form").submit();
		}
	 	return false;
	}
</script>

<!-- 다음API -->
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script>
    function zipcode() {
    	document.getElementById("sample4_postcode").value = '';
    	document.getElementById("sample4_roadAddress").value = '';
    	document.getElementById("sample4_jibunAddress").value = '';
    	
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr1 = ''; // 도로명 주소 변수
                var addr2 = ''; // 지번 주소 변수
                var extraAddr = ''; // 참고항목 변수

                addr1 = data.roadAddress;
                addr2 = data.jibunAddress;

				if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
					extraAddr += data.bname;
				}
				// 건물명이 있고, 공동주택일 경우 추가한다.
				if(data.buildingName !== '' && data.apartment === 'Y'){
				    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
				}
				// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
				if(extraAddr !== ''){
				    extraAddr = ' (' + extraAddr + ')';
				}
				// 조합된 참고항목을 해당 필드에 넣는다.
				document.getElementById("sample4_postcode").value = data.zonecode;
				document.getElementById("sample4_roadAddress").value = addr1;
				document.getElementById("sample4_jibunAddress").value = addr2;

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                //document.getElementById('sample6_postcode').value = data.zonecode;
                //document.getElementById("sample6_address").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("sample4_detailAddress").focus();
            }
        }).open();
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
                        <h3 class="innerConts__tit">내 정보 수정</h3>
                        <p>충무가족의 소중한 정보를 한 눈에 보고 수정할 수 있습니다. <br>
                      		 원하시는 메뉴를 선택해 편리하게 이용해보세요.</p>
                        <div class="innerConts__cont">
                            <form class="myInfoEdit_form" method="post" action="" id="myInfoEdit_form" name="myInfoEdit_form">
                                <fieldset>
                                    <legend>내 정보 수정</legend>
                                    <div class="form_list">
                                        <span class="star">*필수기입항목</span>
                                        <ul>
                                            <li class="pw_area">
                                                <label for="pw"><span>&nbsp;&nbsp;</span>비밀번호</label>
                                                <input type="password" name="pw" id="pw" placeholder="4~12자의 영문 대소문자와 숫자로만 입력해주세요">
                                            </li>
                                            <li class="checkpw_area">
                                                <label for="checkpw"><span>&nbsp;&nbsp;</span>비밀번호확인</label>
                                                <input type="password" name="pw2" id="pw2" placeholder="비밀번호를 다시 한 번 입력해주세요">
                                            </li>
                                            <li class="name_area">
                                                <label for="name"><span>&nbsp;&nbsp;</span>이름</label>
                                                <input type="text" name="name" id="name" value="${vo.name }" placeholder="이름을 입력해 주세요">
                                            </li>
                                            <li class="sex_area">
                                                <label for="sex"><span>&nbsp;&nbsp;</span>성별</label>
                                                <div class="sex" id="sex">
                                                    <input type="radio" name="sex" id="sex_man" value="1"><label for="sex_man">남성</label>
                                                    <input type="radio" name="sex" id="sex_women" value="2"><label for="sex_women">여성</label>
                                                    <input type="radio" name="sex" id="sex_three" value="3"><label for="sex_three">제 3의성</label>
                                                    <input type="radio" name="sex" id="sex_none" value="4"><label for="sex_none">기재원치않음</label>
                                                    <input type="hidden" name="gender" id="gender">
                                                </div>
                                            </li>
                                            <li class="date_area">
                                                <label for="birth"><span>&nbsp;&nbsp;</span>생년월일</label>
                                                <input type="text" class="birth" id="birth" value="${vo.birth }" placeholder="년도 / 월 / 일을 입력해주세요 (ex: 19920510)" numberOnly maxlength="8">
                                            </li>
                                            <li class="tel_area">
                                                <label for="tel"><span>&nbsp;&nbsp;</span>연락처</label>
                                                <input type="text" name="tel" id="tel" value="${vo.tel }" placeholder="숫자만 입력해주세요" numberOnly maxlength="11">
                                            </li>
                                            <li class="add_area">
                                                <label for="sample4_postcode"><span>&nbsp;&nbsp;</span>주소</label>
                                                <input type="text" id="sample4_postcode" value="${vo.sample4_postcode }" placeholder="우편번호" readonly>
                                                <input type="button" onclick="zipcode();" value="우편번호 찾기" id="post_btn">
                                                <input type="text" id="sample4_roadAddress" value="${vo.sample4_roadAddress }" placeholder="도로명주소" readonly>
                                                <input type="text" id="sample4_jibunAddress" value="${vo.sample4_jibunAddress }" placeholder="지번주소" readonly>
                                                <span id="guide" style="color:#999;display:none"></span>
                                                <input type="text" id="sample4_detailAddress" value="${vo.sample4_detailAddress }" placeholder="상세주소">
                                            </li>
                                            <li class="email_area">
                                                <label for="email"><span>&nbsp;&nbsp;</span>이메일</label>
                                                <input type="text" name="email_id" id="email_id" value="${vo.email_id }" >
                                                <span>@</span>
                                                <input type="text" name="email_add" id="email_add" value="${vo.email_add }">
                                                <select class="email_sel" name="email_sel" id="email_sel" onchange="change_email();">
                                                   <option value="" selected>직접입력</option>
                                                    <option value="naver.com">네이버</option>
                                                    <option value="hanmail.com">다음</option>
                                                    <option value="gmail.com">구글</option>
                                                </select>
                                                <button onclick="email_send();">인증번호 발송</button>
                                            </li>
                                            <li class="email_conf_area">
                                                <label for="emailConfirm">이메일 인증 확인</label>
                                                <input type="text" name="emailConfirm" id="emailConfirm" placeholder="인증번호를 입력하신 후 확인을 눌러주세요">
                                                <button onclick="email_sm();">인증번호 확인</button>
                                            </li>
                                            <li class="chk-1 chk_area">
                                                <input type="checkbox" name="chk1" id="chk1">
                                                <label for="chk1">충무아트센터에서 제공하는 정보를 메일로 받아보시겠습니까? (선택)</label>
                                            </li>
                                            <li class="chk-2 chk_area">
                                                <input type="checkbox" name="chk2" id="chk2">
                                                <label for="chk2">충무아트센터에서 제공하는 정보를 SMS로 받아보시겠습니까? (선택)</label>
                                            </li>
                                        </ul>
                                        <div class="btn_yn">
                                            <button type="button" onclick="return regist();">확인</button>
                                            <button type="button" id="cancle" onclick="cancel()">취소</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </section>
                </div>
            </main>
            <a href="#" class="topBtn">TOP</a>
        </div>
	</div>
	<!-- S T A R T :: footer area  -->
	<footer>
		<%@ include file="/WEB-INF/view/include/footer.jsp"%>
	</footer>
	<!-- E N D :: footer area  -->
	
</body>
</html>