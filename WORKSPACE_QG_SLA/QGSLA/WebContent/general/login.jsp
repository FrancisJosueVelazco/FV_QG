
<%@ page isELIgnored = "false"%>
<%@taglib uri="/tags/c" prefix="c"%>
<%@page import= "javax.servlet.http.HttpServletRequest" %>
<%@taglib uri="/tags/struts-html" prefix="html"%>
<%@taglib uri="/tags/struts-bean" prefix="bean"%>
<html>
<head>
<style>
body {
	margin-left: 0px;
	margin-top: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}

table {
	align-content: center;
	width: 800px;
	background-color: #DA251C;
	border: 0px;
}

.centrar {
	left: 50%;
	top: 50%;
	margin-top: -225px;
	margin-left: -400px;
	position: absolute;
}

.Estilo1 {
	color: rgba(205, 205, 205, 1);
	font-weight: bold;
	font-size: 10px;
	FONT-FAMILY: Verdana, Arial, Helvetica, sans-serif;
}

.Estilo2 {
	color: #FFFFFF;
	font-size: 14px;
	font-weight: bold;
	FONT-FAMILY: Verdana, Arial, Helvetica, sans-serif;
}

.Estilo0 {
	color: #FFFFFF;
	font-size: 10px;
	font-weight: bold;
	FONT-FAMILY: Verdana, Arial, Helvetica, sans-serif;
}

.Estilo3 {
	color: #FFFFFF;
	font-size: 8px;
	font-weight: bold;
	FONT-FAMILY: Verdana, Arial, Helvetica, sans-serif;
}

.Estilo4 {
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	FONT-FAMILY: Verdana, Arial, Helvetica, sans-serif;
}

.Textfield {
	border-radius: 2em;
	padding: .20em;
	border-color: #EE0019;
	-webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 3px
		rgba(0, 0, 0, 0.1);
	-moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 3px
		rgba(0, 0, 0, 0.1);
	box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.075), 0px 0px 3px
		rgba(0, 0, 0, 0.1);
	border: 1px solid #ccc;
}
</style>
<title>Login</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>
<body bgcolor="#666666">
	<script src="scripts/validaciones.js"></script>
	<script>

	
	var tecla;
		function login() {
			var form = document.frmdata;
			var ussro = form.ussro.value;
			var pssord = form.pssord.value;
			var combo=document.getElementById("tipolocal").selectedIndex;

			if (ussro == "" || pssord == "") {
				alert("Debe ingresar su ussro y  pssord");
				form.usuario.focus();
				return false;
				
			}else if(combo==null||combo==0){
				alert("Seleccione un Usuario Local")
				return ;
				}
			form.action = "Login.do?metodo=signIn";
			form.method = "post";
			form.submit();
			return true;
		}

		function loginConsulta() {
			var form = document.frmdata;
			var ussro = form.ussro.value;
			var pssord = form.pssord.value;
			var combo=form.tipolocal.value;
			//var chkrecodar=form.recordar.value;

			if (ussro == "" || pssord == "" ) {
				alert("Debe ingresar su ussro y pssord ");
				form.usuario.focus();
				return;
			}
			else{
			
			form.action = "Login.do?metodo=signInConsulta";
			form.method = "post";
			form.submit();
			}

		}
		function capturaTecla(e) {
			if (document.all)
				tecla = event.keyCode;
			else {
				tecla = e.which;
			}
			if (tecla == 13) {
				login();
			}
		}

		document.onkeydown = capturaTecla;
	</script>

	<div class="centrar">
		<html:form action="Login.do?metodo=signIn" styleId="frmdata"
			method="post">
			<table cellpadding="0" cellspacing="0">
				<!-- fwtable fwsrc="Sin título" fwbase="intranet_new.jpg" fwstyle="Dreamweaver" fwdocid = "739295361" fwnested="0" -->
				<tr>
					<td width="233"><img
						src="<c:out value="${pageContext.request.contextPath}"/>/images/spacer.gif"
						width="456" height="1" border="0" alt="" /></td>
					<td width="128"><img
						src="<c:out value="${pageContext.request.contextPath}"/>/images/spacer.gif"
						width="108" height="1" border="0" alt="" /></td>
					<td width="202"><img
						src="<c:out value="${pageContext.request.contextPath}"/>/images/spacer.gif"
						width="89" height="1" border="0" alt="" /></td>
					<td width="116"><img
						src="<c:out value="${pageContext.request.contextPath}"/>/images/spacer.gif"
						width="43" height="1" border="0" alt="" /></td>
					<td width="121"><img
						src="<c:out value="${pageContext.request.contextPath}"/>/images/spacer.gif"
						width="104" height="1" border="0" alt="" /></td>
				</tr>

				<tr>
					<td colspan="5"><img name="intranet_new_r1_c1"
						src="<c:out value="${pageContext.request.contextPath}"/>/images/intranet_new_r1_c1.jpg"
						width="800" height="145" border="0" id="intranet_new_r1_c1" alt="" /></td>
				</tr>
				<tr>
					<td rowspan="10" width="233"><img name="intranet_new_r2_c1"
						src="<c:out value="${pageContext.request.contextPath}"/>/images/intranet_new_r2_c1.jpg"
						width="456" height="312" border="0" id="intranet_new_r2_c1" alt="" /></td>
					<td colspan="4" bgcolor="DA251C"></td>
				</tr>
				<tr>
					<td colspan="4" align="center" class="Estilo2">
						<P>&nbsp;</P>
						<P>SISTEMA QGSLA</P>
					</td>
				</tr>
				<tr>
					<td colspan="4" valign="top"><img name="intranet_new_r4_c2"
						src="<c:out value="${pageContext.request.contextPath}"/>/images/intranet_new_r4_c2.jpg"
						width="344" height="88" border="0" id="intranet_new_r4_c2" alt="" /></td>
				</tr>
				<tr>
					<td bgcolor="#DA251C" class=Estilo4 align="right" width="128">Usuario&nbsp; Dominio:&nbsp;</td>
					<td colspan="2" bgcolor="#DA251C" align="center"><html:text
							maxlength="20" property="ussro" styleClass="Textfield"
							styleId="ussro" size="15"
							onblur="LimpiaCar(this.value,this.name,this.form.name)" /></td>
					<td width="121">&nbsp;</td>
				</tr>
				<tr>
					<td bgcolor="#DA251C" class=Estilo4 align="right" width="128">Contrase&ntilde;a&nbsp;:&nbsp;</td>
					<td colspan="2" bgcolor="#DA251C" align="center"><html:password
							property="pssord" styleClass="Textfield" styleId="pssord"
							size="15" /></td>	
					<td width="121">&nbsp;</td>
				</tr>
				<!-- 
				<tr>
				
					<td width="128"></td>
					<td width="202"><a href="javascript:loginConsulta();">
					
					<img 
							onDblClick="javascript:loginConsulta();" name="btn_consultar"
							src="<c:out value="${pageContext.request.contextPath}"/>/images/btn_consultar.gif"
							width="70" height="18" border="0" id="btn_consultar" align="bottom"
							alt="Consultar" style="margin-top: 8px; margin-left: 30px;"/>
							</a></td>	
					<td colspan="2">&nbsp;</td>
				</tr>
				 -->
				<tr>
				<td colspan="4"  bgcolor="#DA251C" class=Estilo1
					align="center" style="margin-left: 20px;">
				<bean:write name="LoginForm" property="mensajeconsulta"  />
				
				
				</tr>
				<tr>
				<td bgcolor="#DA251C" class=Estilo4 align="right" width="128">Usuario&nbsp; Local&nbsp;:&nbsp;</td>
				<td align="justify" colspan="2" bgcolor="#DA251C" style="margin-left: 20px;" >
				 
					<html:select property="tipolocal" styleId="tipolocal" styleClass="Texto1" >
					<option value="" style="margin-left: 15px;">[Selecccionar]</option>
						<c:forEach var="tipo" items="${sessionScope.lstLocal}">
							<option>
								<c:out value="${tipo.local}"/>
							</option>
						</c:forEach>
					</html:select>
				</td>

				
				<td align="left" colspan="4">
					<a href="javascript:loginConsulta();">
					<img 
							onDblClick="javascript:loginConsulta();" name="btn_consultar"
							src="<c:out value="${pageContext.request.contextPath}"/>/images/btn_consultar.gif"
							width="70" height="22" border="0" id="btn_consultar" align="bottom"
							alt="Consultar" style="margin-top: 8px; margin-left: 3px;"/>
				</td>
				
			
				</tr>
				<tr>
					<td colspan="4"></td>
				</tr>
				<tr>
					<td width="128" align="right"><html:checkbox
							property="recordar" value="1" styleId="recordar" /></td>
					<td bgcolor="#DA251C" class="Estilo0" colspan="3">Recordar
						Ingreso</td>
				</tr>
				<tr>
					<td width="128"></td>
					<td width="202"><a href="javascript:login();">
					
					<img
							onDblClick="javascript:login();" name="intranet_new_r8_c3"
							src="<c:out value="${pageContext.request.contextPath}"/>/images/intranet_new_r8_c3.jpg"
							width="89" height="25" border="0" id="intranet_new_r8_c3"
							alt="Ingresar" /></a></td>
					<td colspan="2">&nbsp;</td>
				</tr>
				<tr>
					<td colspan="4" bgcolor="#DA251C"></td>
				</tr>
				<tr>
					<td colspan="4" valign="bottom" bgcolor="#DA251C" class=Estilo0
						align="center"><bean:write property="mensaje"
							name="LoginForm" />
							<br> <img name="intranet_new_r10_c2"
						src="<c:out value="${pageContext.request.contextPath}"/>/images/intranet_new_r10_c2.jpg"
						width="344" height="18" border="0" id="intranet_new_r10_c2" alt="" /></td>
				</tr>
			</table>
		</html:form>
	</div>
</body>
</html>