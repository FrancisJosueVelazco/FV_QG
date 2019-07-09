<%@ page isELIgnored = "false"%>
<%@ taglib uri="/tags/c" prefix="c"%>
<%@ taglib uri="/tags/struts-tiles" prefix="tiles"%>
<html>
<head>
<title><tiles:getAsString name="title" ignore="true"/></title>
<link rel=Stylesheet type="text/css" href="<c:out value="${pageContext.request.contextPath}"/>/styles/style.css">
</head>
<body>
<script language=JavaScript1.2 src="<c:out value="${pageContext.request.contextPath}"/>/scripts/apymenu.js" type=text/javascript></script>
<!--Cabecera--><tiles:insert attribute="header"/><!--Cabecera-->
<center>
<table width="100%"  border="0" cellpadding="0" cellspacing="0" class="Texto1">
  <tr>
    <td height="435" align="center" valign="top"><!--Body--><tiles:insert attribute="body"/><!--Body--></td>
  </tr>
</table>
<!--Pie--><tiles:insert attribute="footer"/><!--Pie-->
</center>
</body>
</html>
<SCRIPT src="dlcalendar/dlcalendar.js" type="text/javascript" language="javascript"></SCRIPT>
