<%@ page contentType="text/html; charset=utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>충무아트센터 | 예매하기</title>
    <link rel="icon" sizes="16x16" type="image.png" href="<%= request.getContextPath() %>/img/favicon.png">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous">
    <link rel="stylesheet" href="<%= request.getContextPath() %>/css/ticketing.css">
    <script src="<%= request.getContextPath() %>/js/forEachPolyfill.js" defer></script>
    <script src="<%= request.getContextPath() %>/js/calrendar.js" defer></script>
    <script src="<%= request.getContextPath() %>/js/ticketing.js" defer></script>
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
	<script>
	function check() {
		if ($("#resultBox__date").val() == ""){
			alert("날짜를 선택하세요");
		} else if ($("#resultBox__price").val() == "" || $("#resultBox__price").val() == "0원"){
			alert("좌석을 선택하세요");
		} else {
			alert($('input[name=priceAll]').val());
			if ($('#resultBox__vipClass').val() != ""){
				$('input[name=seatType]').val('성인/'+$('#resultBox__vipClass').val());
			}
			if ($('#resultBox__rClass').val() != "") {
				$('input[name=seatType1]').val('청소년/'+$('#resultBox__rClass').val());
			}
			if ($('#resultBox__sClass').val() != "") {
				$('input[name=seatType2]').val('어린이/'+$('#resultBox__sClass').val());
			}
			if (typeof($('#resultBox__price').val()) == 'string') {
				$('input[name=priceAll]').val($('#resultBox__price').val().replace('원', '').replace(/[^\d]+/g, ''));
			}
			$("#ticket__form").submit();
		}
	}
	</script>
</head>

<body>
    <div id="wrap">
        <main id="main">
            <section class="content__innerConts ticketBox">
                <div class="ticketBox__titArea cf">
                    <h1><img src="<%= request.getContextPath() %>/img/logo-b.png" alt="충무아트센터 로고"></h1>
                    <article class="ticketBox__ticketBoxInner ticketInfo cf">
                        <h2 class="ticketBoxInner__tit">예매하기</h2>
                        <p>
                            <strong class="ticketInfo__showName">전시&lt;${play.playName}&gt;</strong>
                            <span class="ticketInfo__showInfo">충무아트센터 play.hallNo관
                                <span id="period">${play.startDate}~${play.endDate}</span>
                            </span>
                        </p>
                    </article>
                </div>
                <article class="ticketBox__ticketBoxInner dateInfo">
                    <h2 class="ticketBoxInner__tit">날짜선택</h2>
                    <div id="calendarContainer">
                        <div class="calendarContainer__calendars cf">
                            <div class="calendars__prevContainer">
                                <table class="calendars__prevMonth">
                                    <thead class="prevMonth__days">
                                        <tr class="month">
                                            <th colspan="7"><span class="month__text">2020년 7월</span></th>
                                        </tr>
                                        <tr class="days">
                                            <th class="sun">SUN</th>
                                            <th>MON</th>
                                            <th>TUE</th>
                                            <th>WED</th>
                                            <th>THU</th>
                                            <th>FRI</th>
                                            <th class="sat">SAT</th>
                                        </tr>
                                    </thead>
                                    <tbody class="prevCalBody calBody">
                                    
                                    </tbody>
                                </table>
                            </div>
                            <div class="calendars__nextContainer">
                                <table class="calendars__nextMonth">
                                    <thead class="nextMonth__days">
                                        <tr class="month">
                                            <th colspan="7"><span class="month__text">2020년 8월</span></th>
                                        </tr>
                                        <tr class="days">
                                            <th class="sun">SUN</th>
                                            <th>MON</th>
                                            <th>TUE</th>
                                            <th>WED</th>
                                            <th>THU</th>
                                            <th>FRI</th>
                                            <th class="sat">SAT</th>
                                        </tr>
                                    </thead>
                                    <tbody class="nextCalBody calBody">
                                    
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="calBtn">
                            <a href="#" class="calBtn__prev disable"><i class="fas fa-chevron-left fa-3x"></i></a>
                            <a href="#" class="calBtn__next"><i class="fas fa-chevron-right fa-3x"></i></a>
                        </div>
                    </div>
                </article>
                <div class="ticketBox__choose cf">
                <article class="ticketBox__ticketBoxInner timeInfo">
                        <h2 class="ticketBoxInner__tit">전시 시간</h2>
                        <ol class="timeInfo__timeTable">
							<li class="exhibitTimeTable">
                                <span class="list__Time">10:00am ~ 8:00pm</span>
                                <p>마지막 입장 시간은 7:30pm입니다.</p>
							</li>
                        </ol>
                    </article>
                    <article class="ticketBox__ticketBoxInner classInfo">
                        <h2 class="ticketBoxInner__tit">연령 선택</h2>
                        <ul class="classInfo__classTable">
                            <li class="classTable__classList vipClass cf">
                                <span class="classList__seatClass">성인</span>
                                <span class="classList__seatPrice">10,000원</span>
                                <input type="number" value="1" min="1" max="10" step="1" class="classList__seatNumber">
                            </li>
                            <li class="classTable__classList rClass cf">
                                <span class="classList__seatClass">청소년</span>
                                <span class="classList__seatPrice">8,000원</span>
                                <input type="number" value="1" min="1" max="10" step="1" class="classList__seatNumber">
                            </li>
                            <li class="classTable__classList sClass cf">
                                <span class="classList__seatClass">어린이</span>
                                <span class="classList__seatPrice">6,000원</span>
                                <input type="number" value="1" min="1" max="10" step="1" class="classList__seatNumber">
                            </li>
                        </ul>
                    </article>
                    <article class="ticketBox__ticketBoxInner ticketInfo">
                        <h2 class="ticketBoxInner__tit">나의 예매현황</h2>
                        <form method="post" action="payment.do" name="ticket__form" id="ticket__form" class="ticketInfo__form">
                            <input type="hidden" name="playNo" value="${play.no}">
                            <input type="hidden" name="playName" value="${play.playName}">
                            <input type="hidden" name="seatType" value="">
                            <input type="hidden" name="seatType1" value="">
                            <input type="hidden" name="seatType2" value="">
                            <fieldset>
                                <legend>예매현황</legend>
                                <ul class="form__resultBox">
                                    <li class="cf">
                                        <label for="resultBox__date">날짜</label><input type="text" name="reservDate" id="resultBox__date" value="" required readonly>
                                    </li>
                                    <c:if test="${play.playType != 2}" >
                                    <li class="cf" >
                                        <label for="resultBox__time">시간</label><input type="text" name="time" id="resultBox__time" value="" required readonly>
                                    </li>
                                    </c:if>
                                    <li class="resultBox__classList cf" id="resultBox__classList">
                                        <label for="resultBox__vipClass">성인</label>
                                        <input type="text" id="resultBox__vipClass" class="resultBox__class" value="" readonly>
                                    </li>
                                    <li class="resultBox__classList cf">
                                        <label for="">청소년</label><input type="text" id="resultBox__rClass" class="resultBox__class" value="" readonly>
                                    </li> 
                                    <li class="resultBox__classList cf">
                                        <label for="">어린이</label><input type="text" id="resultBox__sClass" class="resultBox__class" value="" readonly>
                                    </li>
                                    <li class="cf">
                                        <label for="resultBox__price">가격</label><input type="text" name="priceAll" id="resultBox__price" value="" required readonly>
                                    </li>
                                </ul>
                                <input type="button" class="form__submit" value="다음 단계로" onclick="check();">
                            </fieldset>
                        </form>
                    </article>
                </div>
            </section>
        </main>
    </div>
</body>

</html>
