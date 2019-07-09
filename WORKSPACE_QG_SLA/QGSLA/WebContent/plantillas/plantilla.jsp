<%@ page isELIgnored = "false"%>
<%@ taglib uri="/tags/c" prefix="c"%>
<%@ taglib uri="/tags/struts-tiles" prefix="tiles"%>
<html>
<head>
<title><tiles:getAsString name="title" ignore="true" /></title>
<script type="text/javascript" language="javascript"
	src="<c:url value="/scripts/jquery-1.2.6.min.js" />"></script>
<script type="text/javascript" language="JavaScript1.2"
	src="<c:url value="/scripts/apymenu.js" />"></script>
<script type="text/javascript" language="JavaScript1.2"
	src="<c:url value="/scripts/data8.js" />"></script>
<link rel="Stylesheet" type="text/css"
	href="<c:url value="/styles/style.css" />">
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
	<tiles:insert attribute="header" />
	<!--Cabecera-->
	<center>
		<!--Menu-->
		<tiles:insert attribute="menu" />
		<!--Menu-->
		<table width="100%" border="0" cellpadding="0" cellspacing="0"
			class="Texto1">
			<tr>
				<td height="435" align="center" valign="top">
					<!--Body--> <tiles:insert attribute="body" /> <!--Body-->
				</td>
			</tr>
		</table>
		<!--Pie-->
		<tiles:insert attribute="footer" />
		<!--Pie-->
	</center>
</body>
</html>
<SCRIPT src="dlcalendar/dlcalendar.js" type="text/javascript"
	language="javascript"></SCRIPT>