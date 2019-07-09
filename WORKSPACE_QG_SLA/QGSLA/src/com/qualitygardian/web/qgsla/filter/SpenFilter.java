package com.qualitygardian.web.qgsla.filter;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SpenFilter implements Filter{
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain filter)
			throws IOException, ServletException {
		HttpSession session = null;
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		HttpServletResponse httpResponse = (HttpServletResponse) response;
		session = httpRequest.getSession();
		if (session == null || session.getAttribute("UserNT") == null) {
			String uri = httpRequest.getRequestURI();
			String path = httpRequest.getContextPath();
			String turi = uri.substring(path.length(), uri.length());
			if (!(turi.indexOf("Login.do") >= 0)) {
				session.setAttribute("flagSession", "1");
				httpResponse.sendRedirect(path + "/index.jsp");
				return;
			}
		}
		filter.doFilter(request, response);
	}
	public void destroy() {
	}

	public void init(FilterConfig p0) throws ServletException {
	}

}
