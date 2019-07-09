<%@ page isELIgnored = "false"%>
<%
java.util.Vector menu=(java.util.Vector)session.getAttribute("menuPrincipal");
System.out.println(menu);
%>
<%@ taglib uri="/tags/c" prefix="c"%>
<table width="100%" border="0" cellpadding="0" cellspacing="0">
  <tr>
    <td width="922" height="19" align="left" valign="top">
      <!--Menu-->
      <table border="0" cellpadding="0" cellspacing="0" class="Texto1">
        <tr>
          <td align="left">
          <script language=JavaScript1.2 src="<c:out value="${pageContext.request.contextPath}"/>/scripts/data8.js" type=text/javascript></script>
          <script>
          //*****************************
          //Menu con sistema de seguridad
          //*****************************
          var menuItems = 
                          [
                            ["Inicio","Bienvenido.do","images/icon1.gif","images/icon2.gif","Inicio"],
                            <%if(menu.contains("O1")){%>
                            ["Extraccion","","images/icon1.gif","images/icon2.gif","Extraccion"],
                              <%if(menu.contains("O1O1")){%>
                                ["|Crear Periodo","Extraccion.do?metodo=consultarPeriodos","images/icon1.gif","images/icon2.gif","Consulta de Periodos"],
                              <%}if(menu.contains("O1O2")){%>
                                ["|Extraccion de Planes de Permanencia","Extraccion.do?metodo=procesoExtraccion","images/icon1.gif","images/icon2.gif","Extraccion de Planes de Permanencia"],
                                ["|Extraccion de Casos Especiales","Extraccion.do?metodo=procesoExtraccionCasosEspeciales","images/icon1.gif","images/icon2.gif","Extraccion de Casos Especiales"],
                                ["|Extraccion de Casos Puntuales","Extraccion.do?metodo=procesoExtraccionCasosPuntuales","images/icon1.gif","images/icon2.gif","Extraccion de Casos Puntuales"],
                              <%}if(menu.contains("O1O3")){%>
                                ["|Consulta de Planes de Permanencia","Extraccion.do?metodo=reportePlanesDerechoPago","images/icon1.gif","images/icon2.gif","Reporte de Planes de Permanencia"],
                              <%}if(menu.contains("O1O4")){%>
                                 ["|Cambio de Modalidad de Pago","Extraccion.do?metodo=cambioModalidadPago","images/icon1.gif","images/icon2.gif","Cambio de Modalidad de Pago"],
                              <%}%>
                            <%}if(menu.contains("O2")){%>
                            ["Pagos","","images/icon1.gif","images/icon2.gif","Pagos"],
                              <%if(menu.contains("O2O1")){%>
                                ["|Aprobación de Pagos","AprobacionPagos.do?metodo=consultarAprobacionPagos","images/icon1.gif","images/icon2.gif","Aprobación de Pagos"],
                              <%}if(menu.contains("O2O2")){%>
                                ["|Consulta Historico de Planes Aprobados","AprobacionPagos.do?metodo=incioConsultaHistorico","images/icon1.gif","images/icon2.gif","Detalle de Devolución de Planes de Permanencia"],
                              <%}%>
                                ["|Consulta de Pagos al Afiliado","ConsultaPortal.do?metodo=iniciaConsultaAfiliado","images/icon1.gif","images/icon2.gif","Consulta de Pagos al Afiliado"],
                            <%}if(menu.contains("O3")){%>
                            ["Cartas","","images/icon1.gif","images/icon2.gif","Cartas"],
                              <%if(menu.contains("O3O1")){%>
                                ["|Generación de Cartas","Cartas.do?metodo=inicioGeneracionCartas","images/icon1.gif","images/icon2.gif","Generación de Cartas"],
                              <%}%>
                            <%}if(menu.contains("O4")){%>
                            ["Reportes e Indicadores","","images/icon1.gif","images/icon2.gif","Reportes e Indicadores"],
                              <%if(menu.contains("O4O1")){%>
                                ["|Resumen de Movimientos Consolidados de Planes de Permanencia","Indicador.do?metodo=inicioReporteProvision","images/icon1.gif","images/icon2.gif","Resumen de Movimientos Consolidados de Planes de Permanencia"],
                              <%}if(menu.contains("O4O2")){%>
                                ["|Indicador de Devolución de Planes de Permanencia","Indicador.do?metodo=inicioIndicadorDevolucion","images/icon1.gif","images/icon2.gif","Indicador de Devolución de Planes de Permanencia"],
                              <%}%>
                              ["|Control de Devolución de Planes de Permanencia","Indicador.do?metodo=inicioControlDevolucion","images/icon1.gif","images/icon2.gif","Indicador de Devolución de Planes de Permanencia"],
                              <%if(menu.contains("O4O3")){%>
                                ["|Auditor de Planes de Permanencia","Reporte.do?metodo=iniciaControlPagos","images/icon1.gif","images/icon2.gif","Auditoria de Planes"],
                              <%}%>
                              <%if(menu.contains("O4O4")){%>
                                ["|Reporte de Devengues Duplicados","Reporte.do?metodo=inicioExtraccionDuplicado","images/icon1.gif","images/icon2.gif","Reporte de Devengues Duplicados"],
                              <%}%>
                            <%}%>
                          ];
                          apy_init();
          </script>
          </td>
        </tr>
      </table>
      <!--Menu-->
    </td>
  </tr>
</table>