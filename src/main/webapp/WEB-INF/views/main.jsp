<%--
  Created by IntelliJ IDEA.
  User: kbnc
  Date: 2021-03-15
  Time: 오후 4:04
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <div>
        <h1>하이하이</h1>
    </div>
    <c:forEach var="testVal" items="${test}">
        <div>${testVal.no}</div>
        <div>${testVal.title}</div>
        <div>${testVal.writer}</div>
        <div>${testVal.ins_date}</div>
        <div>${testVal.upd_date}</div>
        <div>${testVal.likes}</div>
        <div>${testVal.counts}</div>
    </c:forEach>
</body>
</html>
