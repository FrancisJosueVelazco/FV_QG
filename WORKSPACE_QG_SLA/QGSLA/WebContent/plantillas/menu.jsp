<%@page import="com.qualitygardian.web.qgsla.ws.bean.OpcionResponse"%>
<%@ page isELIgnored = "false"%>
<%@ taglib uri="/tags/c" prefix="c"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ page import="com.qualitygardian.web.qgsla.ws.bean.OpcionResponse"%>
<%@ page import="java.util.List"%>
<%
	List<OpcionResponse> menu = (List<OpcionResponse>) session.getAttribute("menuPrincipal");
	if (menu.size() == 0) {
		response.sendRedirect("general/login.jsp");
	}
%>

<table width="100%" border="0" align="center" cellpadding="0"
	cellspacing="0">
	<tr>
		<td valign="bottom">
			<table width="100%" border="0" cellpadding="0" cellspacing="0"
				class="principal">
				<tr>
					<td width="300" bgcolor="#E9E9E7" class="Texto1"><script
							type="text/javascript">var tWorkPath="${pageContext.request.contextPath}/scripts/";</script>
						<script type="text/javascript"
							src="<c:url value="/scripts/dtree.js" />"></script> <script
							type="text/javascript"
							src="<c:url value="/scripts/deluxe-tree.js" />"></script> <script>
        var tmenuItems = [
                          	["<strong style=\"color:#DA251C\">Menú Sistema QGSAL</strong>","", "", "", "", "", "", "", "", "", ],
                          	<c:forEach items="${sessionScope.menuPrincipal}" var="itemNivel1" varStatus="loop">                          
	                          	['|'+'<c:out value="${itemNivel1.nombre}"/>',"", '<c:out value="${itemNivel1.nombre}"/>', "" ],
	                          	<c:forEach items="${itemNivel1.subOpciones}" var="itemNivel2" varStatus="loop">
	                          		['||'+'<c:out value="${itemNivel2.nombre}"/>','<c:out value="${itemNivel2.url}"/>',"", "", "", '<c:out value="${itemNivel2.nombre}"/>', "", "", "", "" ],
	                          		<c:forEach items="${itemNivel2.subOpciones}" var="itemNivel3" varStatus="loop">
		                          		['|||'+'<c:out value="${itemNivel3.nombre}"/>','<c:out value="${itemNivel3.url}"/>',"", "", "", '<c:out value="${itemNivel3.url}"/>', "", "", "", "" ],
		                          	</c:forEach>
	                          	</c:forEach>
                          	</c:forEach>
                          	["|Salir","Login.do?metodo=signOut","<c:out value='${pageContext.request.contextPath}'/>/images/btn_exit.png", "", "", "", "", "", "", "" ]
                      	 ];
                      
        dtree_init();
      
        </script> &nbsp;</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td scope="row">&nbsp;</td>
	</tr>
</table>

