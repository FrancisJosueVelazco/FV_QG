<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>


<html>
<head>
<title>Profuturo AFP</title>
<script type="text/javascript" language="javascript"
	src="/QGSLA/scripts/jquery-1.2.6.min.js"></script>
<script type="text/javascript" language="JavaScript1.2"
	src="/QGSLA/scripts/apymenu.js"></script>
<script type="text/javascript" language="JavaScript1.2"
	src="/QGSLA/scripts/data8.js"></script>
<link rel="Stylesheet" type="text/css"
	href="/QGSLA/styles/style.css">
<script language="javascript">
	//helper function to create the form
	function getNewSubmitForm() {
		var submitForm = document.createElement("FORM");
		document.body.appendChild(submitForm);
		submitForm.method = "POST";
		return submitForm;
	}

	//helper function to add elements to the form
	function createNewFormElement(inputForm, elementName, elementValue) {
		var newElement = document
				.createElement("<input name='"+elementName+"' type='hidden'>");
		inputForm.appendChild(newElement);
		newElement.value = elementValue;
		return newElement;
	}

	function doUnload() {
		var docElWidth = document.documentElement.clientWidth;
		var docBodWidth = document.body.clientWidth;
		var realW = 0;
		if (docElWidth <= docBodWidth)
			realW = docElWidth;
		else
			realW = docBodWidth;

		if (event.clientY < 0 && realW < event.clientX) {
			var submitForm = getNewSubmitForm();
			createNewFormElement(submitForm, "usuario", "");
			createNewFormElement(submitForm, "password", "");
			submitForm.action = "Login.do?metodo=signOut";
			submitForm.submit();

		}
	}
</script>
</head>
<body onUnLoad="javascript:doUnload();">

	<!--Cabecera-->
	

<table width="100%" border="0" cellpadding="0" cellspacing="0"
	class="Letra_Blanca">
	<tr>
		<td width="70%" bgcolor="#DA251C"><div align="left">
				<img
					src="/QGSLA/images/top_cabecera.jpg"
					height="60">
			</div></td>
		<td width="23%" bgcolor="#DA251C"><div align="center">
				<span class="Titulo_Negro">Módulos de Pensiones</span>
			</div></td>
		<td width="7%" bgcolor="#DA251C">&nbsp;</td>
	</tr>
</table>
<table width="100%" border="0" cellpadding="0" cellspacing="0"
	class="Texto1">
	<tr>
		<td
			background="/QGSLA/images/coscuro.jpg"><img
			src="/QGSLA/images/coscuro.jpg"
			width="7" height="6"></td>
	</tr>
</table>
<table width="100%" border="0" cellpadding="0" cellspacing="0"
	class="Texto1">
	<tr>
		<td
			background="/QGSLA/images/cclaro.jpg"><img
			src="/QGSLA/images/cclaro.jpg"
			width="7" height="6"></td>
	</tr>
</table>
<table width="100%" border="0" cellpadding="0" cellspacing="0"
	class="principal">
	<tr>
		<td width="36%" height="20" bgcolor="#EFEBEF"><div align="center"></div></td>
		<td width="34%" bgcolor="#E9E9E7"><div align="right"
				class="Texto1">
				<strong>Bienvenido : Christian Fabian</strong>
			</div></td>
		<td width="13%" bgcolor="#E9E9E7"><div align="center">
				<a href="Login.do?metodo=signOut" style="color: #000000"
					class="Texto1"><strong>[Cerrar Sesi&oacute;n]</strong></a>
			</div></td>
	</tr>
</table>
	<!--Cabecera-->
	<center>
		<!--Menu-->
	


<table width="100%" border="0" align="center" cellpadding="0"
	cellspacing="0">
	<tr>
		<td valign="bottom">
			<table width="100%" border="0" cellpadding="0" cellspacing="0"
				class="principal">
				<tr>
					<td width="300" bgcolor="#E9E9E7" class="Texto1"><script
							type="text/javascript">var tWorkPath="/QGSLA/scripts/";</script>
						<script type="text/javascript"
							src="/QGSLA/scripts/dtree.js"></script> <script
							type="text/javascript"
							src="/QGSLA/scripts/deluxe-tree.js"></script> <script>
        var tmenuItems = [
                          	["<strong style=\"color:#DA251C\">Menú Sistema de Pensiones SPEN</strong>","", "", "", "", "", "", "", "", "", ],
                          	                          
	                          	['|'+'Requerimientos de Solicitud de Pension',"", "", "", "", 'Requerimientos de Solicitud de Pension', "", "", "", "" ],
	                          	
	                          		['||'+'Registro de Requerimiento','Reversa.do?metodo=opcionGenerarRequerimiento',"", "", "", 'Registro de Requerimiento', "", "", "", "" ],
	                          		
	                          	
	                          		['||'+'Vincular Beneficiarios a Apoderados','Reversa.do?metodo=opcionVincular',"", "", "", 'Vincular Beneficiarios a Apoderados', "", "", "", "" ],
	                          		
	                          	
	                          		['||'+'Bandeja de Administracion de Requerimientos','Reversa.do?metodo=bandejaRepSol',"", "", "", 'Bandeja de Administracion de Requerimientos', "", "", "", "" ],
	                          		
	                          	
                          	                          
	                          	['|'+'Reportes de Control',"", "", "", "", 'Reportes de Control', "", "", "", "" ],
	                          	
	                          		['||'+'Cambio de Fondo de Pensiones Diario','ReporteCF.do?metodo=inicio&amp;opcion=0',"", "", "", 'Cambio de Fondo de Pensiones Diario', "", "", "", "" ],
	                          		
	                          	
	                          		['||'+'Cambio de Fondo de Pensiones Mensual','ReporteSF1.do?metodo=inicio',"", "", "", 'Cambio de Fondo de Pensiones Mensual', "", "", "", "" ],
	                          		
	                          	
	                          		['||'+'Cambio de Fondo de Pensiones Mensual - Contraloria','ReporteMensualCF.do?metodo=inicio&amp;opcion=0',"", "", "", 'Cambio de Fondo de Pensiones Mensual - Contraloria', "", "", "", "" ],
	                          		
	                          	
                          	                          
	                          	['|'+'Reporte de STS',"", "", "", "", 'Reporte de STS', "", "", "", "" ],
	                          	
	                          		['||'+'Reporte de Evaluacion y Calificacion de Invalidez','ReporteSTS.do?metodo=inicio&amp;opcion=0',"", "", "", 'Reporte de Evaluacion y Calificacion de Invalidez', "", "", "", "" ],
	                          		
	                          	
	                          		['||'+'Generacion Oficio Multiple N 13838','ReporteOficio.do?metodo=inicioCargarExtraccion&amp;opcion=0',"", "", "", 'Generacion Oficio Multiple N 13838', "", "", "", "" ],
	                          		
	                          	
	                          		['||'+'Generacion de EECC','ReporteEECC.do?metodo=inicioCargarExtraccion&amp;opcion=0',"", "", "", 'Generacion de EECC', "", "", "", "" ],
	                          		
	                          	
	                          		['||'+'Boleta de Pago de Pensionistas','ReporteBolPagPen.do?metodo=inicio&amp;opcion=0',"", "", "", 'Boleta de Pago de Pensionistas', "", "", "", "" ],
	                          		
	                          	
                          	                          
	                          	['|'+'Reporte de Oficios',"", "", "", "", 'Reporte de Oficios', "", "", "", "" ],
	                          	
	                          		['||'+'Oficio CIR 42','OficioCIR42.do?metodo=inicio&amp;opcion=0',"", "", "", 'Oficio CIR 42', "", "", "", "" ],
	                          		
	                          	
	                          		['||'+'Oficio CIR 7743','Oficio7743.do?metodo=inicio&amp;opcion=0',"", "", "", 'Oficio CIR 7743', "", "", "", "" ],
	                          		
	                          	
	                          		['||'+'Oficio 19','Oficio19.do?metodo=inicio&amp;opcion=0',"", "", "", 'Oficio 19', "", "", "", "" ],
	                          		
	                          	
	                          		['||'+'Oficio 18','Oficio18.do?metodo=inicio&amp;opcion=0',"", "", "", 'Oficio 18', "", "", "", "" ],
	                          		
	                          	
	                          		['||'+'Oficio Saldos CIC','OficioSaldosCIC.do?metodo=inicio&amp;opcion=0',"", "", "", 'Oficio Saldos CIC', "", "", "", "" ],
	                          		
	                          	
	                          		['||'+'Oficio Seccion II','OficioSeccionII.do?metodo=inicio&amp;opcion=0',"", "", "", 'Oficio Seccion II', "", "", "", "" ],
	                          		
	                          	
	                          		['||'+'Oficio Licitacion Conjunta','OficioLicitacionConjunta.do?metodo=inicio&amp;opcion=0',"", "", "", 'Oficio Licitacion Conjunta', "", "", "", "" ],
	                          		
	                          	
                          	
                          	["|Salir","Login.do?metodo=signOut","/QGSLA/images/btn_exit.png", "", "", "", "", "", "", "" ]
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


		<!--Menu-->
		<table width="100%" border="0" cellpadding="0" cellspacing="0"
			class="Texto1">
			<tr>
				<td height="435" align="center" valign="top">
					<!--Body--> 

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
          <td width="13" height="12"><img src="/QGSLA/images/bg-ai-home_01_1.gif" width="12" height="12"></td>
          <td width="290"><img src="/QGSLA/images/bg-ai-home_02_2.gif" width="295" height="12"></td>
          <td width="12"><img src="/QGSLA/images/bg-ai-home_03_3.gif" width="12" height="12"></td>
        </tr>
        <tr>
          <td height="21" background="/QGSLA/images/bg-ai-home_04_4.gif">&nbsp;</td>
          <td align="left" valign="top"><table width="290" border="0" cellpadding="0" cellspacing="0" class="Texto1">
            <tr>
              <td width="150"><div align="left">Usuario:</div></td>
              <td width="140"><div align="left">CFABIAN</div></td>
            </tr>
            <tr>
              <td width="150"><div align="left">Perfil:</div></td>
              <td width="140"><div align="left"></div></td>
            </tr>
            <tr>
              <td width="150"><div align="left">Fecha:</div></td>
              <td width="140"><div align="left">15/02/2019</div></td>
            </tr>
          </table></td>
          <td background="/QGSLA/images/bg-ai-home_06_6.gif">&nbsp;</td>
        </tr>
        <tr>
          <td height="12"><img src="/QGSLA/images/bg-ai-home_07_7.gif" width="12" height="12"></td>
          <td><img src="/QGSLA/images/bg-ai-home_08_8.gif" width="295" height="12"></td>
          <td><img src="/QGSLA/images/bg-ai-home_09_9.gif" width="12" height="12"></td>
        </tr>
</table> <!--Body-->
				</td>
			</tr>
		</table>
		<!--Pie-->
		<table width="100%" border="0" cellpadding="0" cellspacing="0"
	class="Pie">
	<tr>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td><div align="center">Upgrade JDK 1.7x by Quality Gardian
				S.A.C.</div></td>
	</tr>
</table>
		<!--Pie-->
	</center>
</body>
</html>
<SCRIPT src="dlcalendar/dlcalendar.js" type="text/javascript"
	language="javascript"></SCRIPT>