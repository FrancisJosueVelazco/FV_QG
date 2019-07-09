<%@ page isELIgnored = "false"%>
<%@ taglib uri="/tags/c" prefix="c"%>
<table width="315" border="0" cellpadding="0" cellspacing="0" class="Titulo_Celeste">
      <tr>
        <td height="143"><div align="left"> &nbsp;</div></td>
      </tr>
</table>
      <table width="315" border="0" cellpadding="0" cellspacing="0" class="Titulo_Celeste">
      <tr>
        <td>PRINCIPAL</td>
      </tr>
</table>      
      <table width="315" height="46" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td width="13" height="12"><img src="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_01_1.gif" width="12" height="12"></td>
          <td width="290"><img src="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_02_2.gif" width="295" height="12"></td>
          <td width="12"><img src="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_03_3.gif" width="12" height="12"></td>
        </tr>
        <tr>
          <td height="21" background="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_04_4.gif">&nbsp;</td>
          <td align="left" valign="top"><table width="290" border="0" cellpadding="0" cellspacing="0" class="Texto1">
            <tr>
              <td width="150"><div align="left">Usuario:</div></td>
              <td width="140"><div align="left"><c:out value="${sessionScope.USUARIO.ussro}"/></div></td>
            </tr>
            <tr>
              <td width="150"><div align="left">Perfil:</div></td>
              <td width="140"><div align="left"><c:out value="${sessionScope.USUARIO.descPerfil}"/></div></td>
            </tr>
            <tr>
              <td width="150"><div align="left">Fecha:</div></td>
              <td width="140"><div align="left"><%=com.qualitygardian.util.Tool.getToday()%></div></td>
            </tr>
          </table></td>
          <td background="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_06_6.gif">&nbsp;</td>
        </tr>
        <tr>
          <td height="12"><img src="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_07_7.gif" width="12" height="12"></td>
          <td><img src="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_08_8.gif" width="295" height="12"></td>
          <td><img src="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_09_9.gif" width="12" height="12"></td>
        </tr>
</table>