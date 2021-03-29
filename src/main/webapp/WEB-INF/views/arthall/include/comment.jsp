<%@ page contentType="text/html; charset=utf-8"%>
<script>

	$(function() {
		listComment();
		$('textarea[name=content]').keyup(function(){
			var count = $(this).val().length;
			$('#clen').text(count)
		})
		
	});
	function saveComment() {
		var data = $("#frm").serialize();
		console.log(data);
		$.ajax({
			url:'${pageContext.request.contextPath}/comment/comment.do',
			method:'post',
			async:false,
			data:data,
			success : function(data) {
				if (data.trim() == 'true') {
					$('textarea[name=content]').val('');
					listComment();
				} else {
				}
			},
			error:function() {
				alert("서버 에러");
			}
		});
	}
	function listComment() {
		$.ajax({
			url:"${pageContext.request.contextPath}/comment/commentList.do?table_name=${table_name}&post_no=${data.no}",// data: ê²ìê¸VOê°ì²´
			cache: false,
			async:false,
			dataType:'HTML',
			success : function(data) {
				var cmts = data.trim();
				$('#cbox').html(cmts);
			}
	    
		});
	}
	function delComment(no) {
		$.ajax({
			url:'${pageContext.request.contextPath}/comment/deleteComment.do',
			method:'post',
			async:true,
			data:{no:no},
			success : function(data) {
				if (data.trim() == "true") {
					listComment();
				} else {
					alert("서버에러");
				}
			}
		});
	}
</script>