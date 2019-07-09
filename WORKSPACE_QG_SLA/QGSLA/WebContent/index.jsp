
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    <%@ page isELIgnored = "false"%>
<%@ taglib uri="/tags/struts-logic" prefix="logic"%>
<%
	String ussro = (String) request.getParameter("p1");
	String codapp = (String) request.getParameter("p2");
	
	session.setAttribute("p1", ussro != null ? ussro.toUpperCase() : ussro);
	session.setAttribute("p2", codapp);
%>
<logic:forward name="login" />
    