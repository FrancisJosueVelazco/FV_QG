package com.qualitygardian.web.qgsla.vc.struts.action;

import java.sql.Connection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.actions.DispatchAction;

import com.qualitygardian.dat.Conn;
import com.qualitygardian.dat.Constantes;
import com.qualitygardian.web.qgsla.modelo.dto.LoginDTO;
import com.qualitygardian.web.qgsla.modelo.facade.CombosFacade;
import com.qualitygardian.web.qgsla.vc.struts.form.LoginForm;
import com.qualitygardian.web.qgsla.vc.struts.form.ReversaForm;
import com.qualitygardian.web.qgsla.ws.bean.LoginResponse;
import com.qualitygardian.web.qgsla.ws.bean.ObtenerMenuResponse;
import com.qualitygardian.web.qgsla.ws.bean.PerfilxUsuarioResponse;
import com.qualitygardian.web.qgsla.ws.client.SeguridadClient;

import org.apache.commons.codec.binary.Base64;

public class LoginAction extends DispatchAction {
	Conn conn;
	Connection c;

	public ActionForward opcionUsuariosSLA(ActionMapping mapping, ActionForm form, HttpServletRequest req,
			HttpServletResponse res) {
		HttpSession sesion = req.getSession();
		CombosFacade combosFacade = new CombosFacade();
		Conn conn;
		Connection c;

		try {
			ReversaForm eForm = (ReversaForm) form;
			eForm.setIndHabilitar("0");
			sesion.removeAttribute("lstLocal");
			List listaTipoReq = combosFacade.obtenerListadoLocales("");
			sesion.setAttribute("lstLocal", listaTipoReq); // SETEAR EN SESSION LIST TIPO REQ ALMC
			sesion.setAttribute("tipolocal", "01"); // El tipo de proceso por defecto es Reversar a la seccion I

		} catch (Exception e) {
			e.printStackTrace();
		}

		return mapping.findForward("Login");
	}

	public ActionForward loginForm(ActionMapping mapping, ActionForm form, HttpServletRequest req,
			HttpServletResponse res) throws Exception {
		LoginForm lform = (LoginForm) form;
		lform.setPerfil("");
		lform.setUssro("");
		lform.setPssord("");
		lform.setRecordar("0");
		lform.setMensaje("");

		try {
			HttpSession sesion = req.getSession();
			String flag = (String) sesion.getAttribute("flagSession");
			req.setAttribute("flagSession", flag);

			String ussro = (String) sesion.getAttribute("p1");
			String codapp = (String) sesion.getAttribute("p2");

		} catch (Exception e) {
			return mapping.findForward("Error");
		}
		return mapping.findForward("Login");
	}

	public ActionForward signInDirecto(ActionMapping mapping, ActionForm form, HttpServletRequest req,
			HttpServletResponse res) throws Exception {
		HttpSession sesion = req.getSession();
		sesion.setMaxInactiveInterval(1800);// 30 minutos de sesion activada
		LoginForm lform = (LoginForm) form;

		Vector menu = new Vector();
		String ussro = "";
		String pssord = "";
		String indIn = req.getParameter("indin");
		int rpta = -1;
		if (ussro.length() < 5) {

		}
		ussro = (String) sesion.getAttribute("p1");
		String hostname = req.getRemoteHost();
		String ip = req.getRemoteAddr();

		try {

			return mapping.findForward("Login");
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Errorr: " + e.getMessage());
			/********************************************************/
			lform.setMensaje("No tiene permisos sobre la aplicación");
			/********************************************************/
			return mapping.findForward("Login");
		}
	}

	@SuppressWarnings("rawtypes")
	public ActionForward signInConsulta(ActionMapping mapping, ActionForm form, HttpServletRequest req,
			HttpServletResponse res) throws Exception {

		SeguridadClient seguridadClient = new SeguridadClient();
		CombosFacade combosFacade = new CombosFacade();
		HttpSession sesion = req.getSession();
		sesion.removeAttribute("lstLocal");
		sesion.setMaxInactiveInterval(1800);// 30 minutos de sesion activada
		/********************************************************/
		// LoginDTO loginDTO = new LoginDTO();
		LoginForm lform = (LoginForm) form;
		/********************************************************/
		LoginResponse loginResponse = new LoginResponse();
		// Vector menu = new Vector();
		/********************************************************/
		String ussro = lform.getUssro();
		String pssord = lform.getPssord();
		String chkrecordar = lform.getRecordar();

		String hostname = req.getRemoteHost();
		String ip = req.getRemoteAddr();
		/********************************************************/
		Map<String, Object> parametrosWS = new HashMap<String, Object>();
		parametrosWS.put(Constantes.PARAM_USER, ussro);
		parametrosWS.put(Constantes.PARAM_CLAVE, Base64.encodeBase64String(pssord.getBytes()));
		try {
			loginResponse = seguridadClient.login(parametrosWS);
			if (loginResponse.getMsgError() != null && !loginResponse.getMsgError().equals("")) {
				lform.setMensaje(loginResponse.getMsgError());
				return mapping.findForward("Login");
			}
			if (loginResponse != null) {
				if (loginResponse.getRpta() != null && loginResponse.getRpta().equals("OK")) {
					/** Traer datos de Usuario */
					// *******************
					// Obteniendo permisos
					// *******************
					ObtenerMenuResponse menuResponse = seguridadClient.obtenerMenu(parametrosWS);
					LoginDTO loginDTO = new LoginDTO();
					loginDTO.setUssro(menuResponse.getUsuarioNT());
					loginDTO.setCodigoEmpresa("PF");
					loginDTO.setCodigoUsuario(menuResponse.getUsuarioNT());
					loginDTO.setPrimerNombre(menuResponse.getUsuario());// COlocar solo el primer nombre
					loginDTO.setSegundoNombre("");
					loginDTO.setApellidoMaterno("");
					loginDTO.setApellidoPaterno("");
					sesion.setAttribute("menuPrincipal", menuResponse.getOpciones());
					sesion.setAttribute("USUARIO", loginDTO);
					sesion.setAttribute("UserNT", menuResponse.getUsuarioNT());
					if (menuResponse.getMsgError() != null && !menuResponse.getMsgError().equals("")) {
						// log.info(menuResponse.getMsgError());
						lform.setMensaje(menuResponse.getMsgError());
						return mapping.findForward("Login");

					}
					List listaTipoReq = combosFacade.obtenerListadoLocalesxDominio(ussro, "");
					sesion.setAttribute("lstLocal", listaTipoReq);
					sesion.setAttribute("tipolocal", "01");
					lform.setMensajeconsulta("Seleccione usuario Local");
					System.out.println(">>>>>>>>>>>>>>>>>>> Seleccione un usuario Local");
					return mapping.findForward("Login");
					// return mapping.findForward("bienvenido");
				} else {
					System.out.println("flagSession = 2");
					sesion.setAttribute("flagSession", "2");
					/********************************************************/
					lform.setMensaje("No tiene permisos sobre la aplicación");
					/********************************************************/
					return mapping.findForward("Login");
				}
			} else {
				sesion.removeAttribute("lstLocal");
				System.out.println("retorna: Error");
				/********************************************************/
				lform.setMensaje("No tiene permisos sobre la aplicación");
				/********************************************************/
				return mapping.findForward("Login");
			}

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Errorr: " + e.getMessage());
			/********************************************************/
			lform.setMensaje("No tiene permisos sobre la aplicación");
			/********************************************************/
			return mapping.findForward("Login");
		}

	}

	public ActionForward obtenerPerfil(ActionMapping mapping, ActionForm form, HttpServletRequest req,
			HttpServletResponse res) {
		HttpSession session=req.getSession();
		SeguridadClient seguridadClient = new SeguridadClient();
		LoginForm lform = (LoginForm) form;
		Map<String, Object> parametrosWS = new HashMap<String, Object>();
		String ussro = lform.getUssro();
		String perf=lform.getPerfil();
		session.setAttribute("p3", perf);
		parametrosWS.put(Constantes.PARAM_USER, ussro);

		return mapping.findForward("Login");
	}

	@SuppressWarnings("rawtypes")
	public ActionForward signIn(ActionMapping mapping, ActionForm form, HttpServletRequest req, HttpServletResponse res)
			throws Exception {
		SeguridadClient seguridadClient = new SeguridadClient();
		CombosFacade combosFacade = new CombosFacade();
		HttpSession sesion = req.getSession();
		sesion.setMaxInactiveInterval(1800);// 30 minutos de sesion activada
		/********************************************************/
		// LoginDTO loginDTO = new LoginDTO();
		LoginForm lform = (LoginForm) form;
		/********************************************************/
		LoginResponse loginResponse = new LoginResponse();
		// Vector menu = new Vector();
		/********************************************************/
		String ussro = lform.getUssro();
		String pssord = lform.getPssord();
		String perf=lform.getPerfil();
		String local=lform.getTipolocal();
		String chkrecordar = lform.getRecordar();

		String hostname = req.getRemoteHost();
		String ip = req.getRemoteAddr();
		/********************************************************/
		Map<String, Object> parametrosWS1 = new HashMap<String, Object>();
		Map<String, Object> parametrosWS = new HashMap<String, Object>();
		parametrosWS.put(Constantes.PARAM_USER, ussro);
		parametrosWS.put(Constantes.PARAM_CLAVE, Base64.encodeBase64String(pssord.getBytes()));
		
		parametrosWS1.put(Constantes.PARAM_USER, ussro);
		
		
		sesion.removeValue(lform.getMensaje());
		try {
			loginResponse = seguridadClient.login(parametrosWS);

			if (loginResponse.getMsgError() != null && !loginResponse.getMsgError().equals("")) {
				System.out.println("Imprimiendo el log " + loginResponse.getMsgError());
				lform.setMensaje(loginResponse.getMsgError());
				return mapping.findForward("Login");
			}
			if (loginResponse != null) {
				if (loginResponse.getRpta() != null && loginResponse.getRpta().equals("OK")) {
					/** Traer datos de Usuario */
					// *******************
					// Obteniendo permisos
					// *******************
					System.out.println("****Ingresando a Menu***");

					ObtenerMenuResponse menuResponse = seguridadClient.obtenerMenu(parametrosWS);
					System.out.println("Imprimiendo el usuario " + menuResponse.getUsuario() + " UserNT "
							+ menuResponse.getUsuarioNT());
					LoginDTO loginDTO = new LoginDTO();
					loginDTO.setUssro(menuResponse.getUsuarioNT());
					loginDTO.setCodigoEmpresa("PF");
					loginDTO.setCodigoUsuario(menuResponse.getUsuarioNT());
					loginDTO.setPrimerNombre(menuResponse.getUsuario());// COlocar solo el primer nombre
					loginDTO.setSegundoNombre("");
					loginDTO.setApellidoMaterno("");
					loginDTO.setApellidoPaterno("");

					sesion.setAttribute("menuPrincipal", menuResponse.getOpciones());
					sesion.setAttribute("USUARIO", loginDTO);
					sesion.setAttribute("UserNT", menuResponse.getUsuarioNT());
					//sesion.setAttribute("local", local);
					if (menuResponse.getMsgError() != null && !menuResponse.getMsgError().equals("")) {

						System.out.println("Imprimiendo el log" + menuResponse.getMsgError());
						// log.info(menuResponse.getMsgError());
						lform.setMensaje(menuResponse.getMsgError());
						return mapping.findForward("Login");

					}

					 PerfilxUsuarioResponse perfilResponse = seguridadClient.obtenerPerfilxUsuario(parametrosWS1);
					 
					 perfilResponse.getMsg();
					 System.out.println("MSG: "+perfilResponse.getMsg());
					 perfilResponse.getRpta();
					 System.out.println("RSTA: "+perfilResponse.getRpta());
					 perf=perfilResponse.getMsg();
					 loginDTO.setDescPerfil(perf);
					 loginDTO.setTipolocal(local);
					 sesion.setAttribute("ingresolocal", local);
					 System.out.println("LOCAL INGRESO: -------->"+local);
					 
					System.out.println("Ingreso al Sistema >>>>>>>");
					return mapping.findForward("bienvenido");
				} else {
					System.out.println("flagSession = 2");
					sesion.setAttribute("flagSession", "2");
					/********************************************************/
					lform.setMensaje("No tiene permisos sobre la aplicación");
					/********************************************************/
					return mapping.findForward("Login");
				}
			} else {
				System.out.println("retorna: Error");
				/********************************************************/
				lform.setMensaje("No tiene permisos sobre la aplicación");
				/********************************************************/
				return mapping.findForward("Login");
			}

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Errorr: " + e.getMessage());
			/********************************************************/
			lform.setMensaje("No tiene permisos sobre la aplicación");
			/********************************************************/
			return mapping.findForward("Login");
		}

	}

	public ActionForward signOut(ActionMapping mapping, ActionForm form, HttpServletRequest req,
			HttpServletResponse res) throws Exception {
		HttpSession sesion = req.getSession();
		// LoginDTO loginDTO = (LoginDTO) sesion.getAttribute("USUARIO");

		// if (loginDTO != null) {
		String ip = req.getRemoteAddr();

		System.out.println("rpta elimina_ingreso: ");
		sesion.removeAttribute("USUARIO");
		// }
		sesion.invalidate();
		return mapping.findForward("Login");
	}

}
