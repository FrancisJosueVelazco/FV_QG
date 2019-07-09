<%@ page isELIgnored = "false"%>
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
          //****************************
          //Menu si sistema de seguridad
          //****************************
          var menuItems = 
                          [
                            ["Inicio","Bienvenido.do","images/icon1.gif","images/icon2.gif","Inicio"],
                            ["Extraccion","","images/icon1.gif","images/icon2.gif","Extraccion"],
                                ["|Crear Periodo","Extraccion.do?metodo=consultarPeriodos","images/icon1.gif","images/icon2.gif","Consulta de Periodos"],
                                ["|Extraccion de Planes de Permanencia","Extraccion.do?metodo=procesoExtraccion","images/icon1.gif","images/icon2.gif","Extraccion de Planes de Permanencia"],
                                ["|Extraccion de Casos Especiales","Extraccion.do?metodo=procesoExtraccionCasosEspeciales","images/icon1.gif","images/icon2.gif","Extraccion de Casos Especiales"],
                                ["|Consulta de Planes de Permanencia","Extraccion.do?metodo=reportePlanesDerechoPago","images/icon1.gif","images/icon2.gif","Reporte de Planes de Permanencia"],
                            ["Pagos","","images/icon1.gif","images/icon2.gif","Pagos"],
                                ["|Aprobación de Pagos","AprobacionPagos.do?metodo=consultarAprobacionPagos","images/icon1.gif","images/icon2.gif","Aprobación de Pagos"],
                                ["|Consulta Historico de Planes Aprobados","AprobacionPagos.do?metodo=incioConsultaHistorico","images/icon1.gif","images/icon2.gif","Detalle de Devolución de Planes de Permanencia"],
                                ["|Consulta de Pagos al Afiliado","ConsultaPortal.do?metodo=iniciaConsultaAfiliado","images/icon1.gif","images/icon2.gif","Consulta de Pagos al Afiliado"],
                            ["Cartas","","images/icon1.gif","images/icon2.gif","Cartas"],
                                ["|Generación de Cartas","Cartas.do?metodo=inicioGeneracionCartas","images/icon1.gif","images/icon2.gif","Generación de Cartas"],
                            ["Reportes e Indicadores","","images/icon1.gif","images/icon2.gif","Reportes e Indicadores"],
                                ["|Resumen de Movimientos Consolidados de Planes de Permanencia","Indicador.do?metodo=inicioReporteProvision","images/icon1.gif","images/icon2.gif","Resumen de Movimientos Consolidados de Planes de Permanencia"],
                                ["|Indicador de Devolución de Planes de Permanencia","Indicador.do?metodo=inicioIndicadorDevolucion","images/icon1.gif","images/icon2.gif","Indicador de Devolución de Planes de Permanencia"],
                                ["|Control de Devolución de Planes de Permanencia","Indicador.do?metodo=inicioControlDevolucion","images/icon1.gif","images/icon2.gif","Control de Devolución de Planes de Permanencia"],
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