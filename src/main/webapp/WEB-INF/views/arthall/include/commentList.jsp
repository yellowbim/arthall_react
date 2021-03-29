<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="cbox">
	<form method="post" name="frm" id="frm">
	<input type="hidden" name="post_no" value="${param.post_no}"> 
	<input type="hidden" name="table_name" value="${param.table_name}">
	<table style="border: 0px">
			<tr>

				<td colspan=2 style="font-size: 20px; font-weight: bold;">댓글</td>
			</tr>
			<tr>
				<td style="padding: 20px"><textarea id="content" name="content"
						rows="5" cols="10" style="width: 100%;"></textarea></td>
				<td style="width: 8%;">
					<button id='cbtn'
						style="height: 80px; width: 80px; margin: 10px; text-align: center;"
						type="button" onclick="saveComment();">
						<strong>등록</strong>
					</button>
				</td>
			</tr>
			<tr>
				<td>
					<div style="float: right; font-size: 10px">
						<span id='clen' > 0 </span> / <span> 300 </span>
					</div>
				</td>
				<td></td>
			</tr>
	</table>
	</form>
	<ul>
		<c:forEach var="comment" items="${list}">
			<li>
				<div style="font-size: 7px; color: grey; margin: 5px">
					<span> ${comment.writer}&nbsp; </span> <span>
						${comment.regdate} </span> <span> <a class="btns"
						href="javascript:delComment(${comment.no});"><strong>삭제</strong></a>
					</span>
				</div>
				<div style="margin: 5px; padding-bottom: 20px;">
					<p>${comment.content}</p>
				</div>
			</li>
		</c:forEach>
	</ul>
</div>