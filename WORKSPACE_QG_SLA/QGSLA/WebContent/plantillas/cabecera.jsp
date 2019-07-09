<%@ page isELIgnored = "false"%>
<%@ taglib uri="/tags/c" prefix="c"%>
<table width="100%" border="0" cellpadding="0" cellspacing="0"
	class="Letra_Blanca">
	<tr>
		<td width="70%" bgcolor="#DA251C"><div align="left">
				<img
					src="<c:out value="${pageContext.request.contextPath}"/>/images/top_cabecera.jpg"
					height="60">
			</div></td>
		<td width="23%" bgcolor="#DA251C"><div align="center">
				<span class="Titulo_Negro">Sistema QGSLA</span>
			</div></td>
		<td width="7%" bgcolor="#DA251C">&nbsp;</td>
	</tr>
</table>
<table width="100%" border="0" cellpadding="0" cellspacing="0"
	class="Texto1">
	<tr>
		<td
			background="<c:out value="${pageContext.request.contextPath}"/>/images/coscuro.jpg"><img
			src="<c:out value="${pageContext.request.contextPath}"/>/images/coscuro.jpg"
			width="7" height="6"></td>
	</tr>
</table>
<table width="100%" border="0" cellpadding="0" cellspacing="0"
	class="Texto1">
	<tr>
		<td
			background="<c:out value="${pageContext.request.contextPath}"/>/images/cclaro.jpg"><img
			src="<c:out value="${pageContext.request.contextPath}"/>/images/cclaro.jpg"
			width="7" height="6"></td>
	</tr>
</table>
<table width="100%" border="0" cellpadding="0" cellspacing="0"
	class="principal">
	<tr>
		<td width="36%" height="20" bgcolor="#EFEBEF"><div align="center"></div></td>
		<td width="34%" bgcolor="#E9E9E7"><div align="right"
				class="Texto1">
				<strong>Bienvenido : <c:out
						value="${sessionScope.USUARIO.primerNombre}" /></strong>
			</div></td>
		<td width="13%" bgcolor="#E9E9E7"><div align="center">
				<a href="Login.do?metodo=signOut" style="color: #000000"
					class="Texto1"><strong>[Cerrar Sesi&oacute;n]</strong></a>
			</div></td>
	</tr>
</table>