<%@ page isELIgnored = "false"%>
<%@ taglib uri="/tags/c" prefix="c"%>
<%@ taglib uri="/tags/struts-html" prefix="html"%>
<%@ taglib uri="/tags/struts-logic" prefix="logic"%>

<script src="scripts/datetimepicker.js"></script>
<script src="scripts/validaciones.js"></script>
<script language="JavaScript">
	
<%String tipPrestacion = (String) request.getAttribute("tipPrestacion");%>

	function registrarSla(){
		var tipoa=document.getElementById("tipo_atencion").selectedIndex;
		var criti=document.getElementById("criticidad").selectedIndex;
		var comple=document.getElementById("complejidad").selectedIndex;
		var req=document.getElementById("req").value;1
		var nomReq=document.getElementById("nombre_req").value;
		var fecharec=document.getElementById("fecha_recepcion").value;
		var horarec=document.getElementById("hora_recepcion").value;
		var formConsSol = document.formConsultaSolicitud;
		
		
		if(tipoa==0 || tipoa==null){
			alert("Seleccione el Tipo de Atencion");
			return;
		}
		else if(req=="" || nomReq==""||fecharec==""||horarec==""||comple==null||comple==0||criti==null||criti==0){
			alert("Complete los campos");
			return;
			}
		else if(/^\d{2}-\d{2}$/.test(horarec) ){
			alert("Ingrese un formato correcto");
			return;
			}
		else if(comple==null||comple==0){
			alert("Seleccione la Complejidad");
			return;
			}
		else if(criti==null||criti==0){
			alert("Ingrese la Criticidad");
			return;
			}

		formConsSol.action = "Reversa.do?metodo=insertarRegistroSla";
		formConsSol.method = "post";
		formConsSol.submit();
		return true;
	}
	
</script>

<c:set var="tipoR" value="${sessionScope.tipoA}" />
<!-- ALMC-->

<center>
	<html:form action="Reversa.do?metodo=opcionRegistroSLA"
		method="post" styleId="formConsultaSolicitud">
		<table width="454" border="0" cellpadding="0" cellspacing="0"
			class="Texto1">
			<tr>
				<td class="Titulo_Celeste">&nbsp;</td>
			</tr>
			<tr>
				<td class="Titulo_Celeste">&nbsp;</td>
			</tr>
			<tr>
				<td class="Titulo_Celeste">&nbsp;</td>
			</tr>
			<tr>
				<td class="Titulo_Celeste">Registro SLA</td>
			</tr>
			<tr>
				<td>&nbsp;</td>
			</tr>
			<!-- ALMC -->
			<tr>
				<td>
				</td>
			</tr>
			<!-- ALMC -->

			<tr>
				<td>&nbsp;</td>
			</tr>
		</table>
		<table class=Texto1 cellSpacing=0 cellPadding=0 width=480 border=0>
			<tbody>
				<tr>
					<th scope=col width=12><img height=12
						src="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_01_1_1.gif"
						width=12></th>
					<th scope=col width=576><img height=12
						src="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_02_2_FP.gif"
						width=496></th>
					<th scope=col width=12><img height=12
						src="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_03_3_3.gif"
						width=12></th>
				</tr>
				<tr>
					<td
						background="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_04_4_FP.gif">&nbsp;</td>
					<td bgColor=#efebef>
						<div align=center>
							<table class=Texto1 cellSpacing=2 cellPadding=0 width=456
								border="0">
								<tbody>
									<tr>
										<td align="justify">TIPO ATENCI&Oacute;N&nbsp;</td>
										<td>:</td>
										<td colspan="3">
										
										<html:select property="tipo_atencion"
												styleClass="Texto1" styleId="tipo_atencion">
												<option value="" >[Selecccionar]</option>
												<c:forEach var="tipo" items="${sessionScope.lstAtencion}">
													<option<c:if test="${tipoR==tipo.tip_atencion}">selected</c:if>
													value="<c:out value="${tipo.tip_atencion}"/>">
														<c:out value="${tipo.atencion}" />
													</option>
												</c:forEach>
										</html:select></td>
									</tr>
									<td>&nbsp;</td>
									<td>&nbsp;</td>
									 
									<tr>
										<td align="justify">REQ</td>
										<td>:</td>
										<td colspan="5"><html:text  property="req"
												styleId="req"  size="20"
												maxlength="20" 
												 /></td>
									</tr>
									<tr>
										<td align="justify">NOMBRE REQ</td>
										<td>:</td>
										<td colspan="5">
										<html:textarea property="nombre_req" styleId="nombre_req" 
										styleClass="Texto1" rows="3" cols="35" >
										</html:textarea>
										</td>
									</tr>
									<tr>
										<td align="justify">FECHA RECEPCI&Oacute;N</td>
										<td>:</td>
										<td><dlcalendar click_element_id="imagen_calendario1"
												input_element_id="fecha_recepcion"
												tool_tip="Haga click para seleccionar la fecha"
												months="Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Set,Oct,Nov,Dic"
												days="do,lu,ma,mi,ju,vi,sa" firstday="lu">
										</dlcalendar> 
										<html:text
												property="fecha_recepcion" styleId="fecha_recepcion" styleClass="Textfield2"
												size="12" maxlength="12"
												onblur="LimpiaCar(this.value,this.name,this.form.name)" /> 
										<img
											id="imagen_calendario1"
											src="<c:out value="${pageContext.request.contextPath}"/>/images/calendario.gif"
											alt="Calendario" /></td>
									</tr>
									<tr>
										<td align="justify">HORA RECEPCION</td>
										<td>:</td>
										<td>
										<html:text property="hora_recepcion"
												styleId="hora_recepcion" styleClass="Texto1" size="30"
												maxlength="12"
												 />
										</td>
									</tr>
									<tr>
										<td align="justify">COMPLEJIDAD</td>
										<td>:</td>
										
										<td id="tdtipPrestacion3"><html:select
												property="complejidad" value="<%=tipPrestacion%>"
												styleClass="Texto1" styleId="complejidad">
												<html:option value="0">[--Seleccione--]</html:option>
												<html:option value="Alta">ALTA</html:option>
												<html:option value="Media">MEDIA</html:option>
												<html:option value="Baja">BAJA</html:option>
											</html:select>
										</td> 
										<td>&nbsp;</td>
									</tr>
									
									<tr>
										<td align="justify">CRITICIDAD</td>
										<td>:</td>
										<td id="tdtipPrestacion3"><html:select
												property="criticidad" value="<%=tipPrestacion%>"
												styleClass="Texto1" styleId="criticidad">
												
												<html:option value="0">[--Seleccione--]</html:option>
												<html:option value="Alta">ALTA</html:option>
												<html:option value="Media">MEDIA</html:option>
												<html:option value="Baja">BAJA</html:option>
												<html:option value="Planificado">PLANIFICADO</html:option>
											</html:select>
										</td> 
										<td>&nbsp;</td>
									</tr>
									
									<tr>
										<td colspan="3"  id="idMensaje"></td>
										<td>&nbsp;</td>
										
									<td>
									<input type="button" value="Registrar" onclick=" registrarSla()  "/>
									</td>	
										<!--  
										<td colspan="3">
										  <input type="button" value="Registrar"  onclick="registrarSla()">
										
											<html:button 
											property="registrar" styleId="registrar" styleClass="Texto1" onclick="registrarSla()"
											value="Registrar">
										    </html:button>
										 
										</td>-->
									</tr>
								</tbody>
							</table>
						</div>
					</td>
					<td
						background="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_06_6_FP.gif">&nbsp;</td>
				</tr>
				<tr>
					<td><img height=12
						src="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_07_7_FP.gif"
						width=12></td>
					<td><img height=12
						src="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_08_8_FP.gif"
						width=496></td>
					<td><img height=12
						src="<c:out value="${pageContext.request.contextPath}"/>/images/bg-ai-home_09_9_FP.gif"
						width=12></td>
				</tr>
			</tbody>
		</table>
	</html:form>
</center>


