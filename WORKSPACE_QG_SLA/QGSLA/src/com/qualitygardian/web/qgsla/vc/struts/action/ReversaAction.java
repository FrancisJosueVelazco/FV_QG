package com.qualitygardian.web.qgsla.vc.struts.action;

import java.util.List;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.axis.management.Registrar;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.actions.DispatchAction;

import com.qualitygardian.web.qgsla.modelo.dto.RegistroRequerimiento;
import com.qualitygardian.web.qgsla.modelo.facade.CombosFacade;
import com.qualitygardian.web.qgsla.modelo.facade.ReversaFacade;
import com.qualitygardian.web.qgsla.vc.struts.form.ReversaForm;

public class ReversaAction extends DispatchAction{

	int respuesta;
	
	public ActionForward insertarRegistroSla(ActionMapping mapping, ActionForm form, HttpServletRequest req,
			HttpServletResponse res) {
		
		HttpSession session=req.getSession();
		session.removeAttribute("formConsultaSolicitud");
		session.removeAttribute("tipo_atencion");
		session.removeAttribute("req");
		session.removeAttribute("nombre_req");
		session.removeAttribute("fecha_recepcion");
		session.removeAttribute("hora_recepcion");
		session.removeAttribute("complejidad");
		session.removeAttribute("criticidad");
		
		String usuario=session.getAttribute("USUARIO").toString();
		
		RegistroRequerimiento  requerimiento=new RegistroRequerimiento();
		ReversaFacade facade=new ReversaFacade();
		ReversaForm eform=(ReversaForm)form;
		
		requerimiento.setTipo_atencion(eform.getTipo_atencion());
		requerimiento.setReq(eform.getReq());
		requerimiento.setNombre_req(eform.getNombre_req());
		requerimiento.setFecha_recepcion(eform.getFecha_recepcion());
		requerimiento.setHora_recepcion(eform.getHora_recepcion());
		requerimiento.setComplejidad(eform.getComplejidad());
		requerimiento.setCriticidad(eform.getCriticidad());
		//requerimiento.setUsuRegistro(usuario);
		//requerimiento.setUsuModifica(usuario);
		try {
			
			respuesta=facade.insertarSla(requerimiento);
			
		} catch (Exception e) {
			System.out.println("Erro al registrar");
			e.printStackTrace();
		}
		
		
		requerimiento.setReq("");
		requerimiento.setNombre_req("");
		requerimiento.setFecha_recepcion("");
		requerimiento.setHora_recepcion("");
		requerimiento.setComplejidad("");
		requerimiento.setCriticidad("");
	
		System.out.println(">>>>>>>>>>>>>>>>>>>>>> Registro Exitoso");
		return mapping.findForward("bienvenido");
	}
	
	public ActionForward opcionRegistroSLA(ActionMapping mapping, ActionForm form, HttpServletRequest req,
			HttpServletResponse res) {
		HttpSession sesion = req.getSession();
		CombosFacade combosFacade = new CombosFacade();
		try {
			ReversaForm eForm = (ReversaForm) form;
			eForm.setIndHabilitar("0");
			sesion.removeAttribute("lstTipoReq");
			List listaTipoReq = combosFacade.obtenerListadoTipoOpe("", "");
			sesion.setAttribute("lstAtencion", listaTipoReq);
			
		} catch (Exception e) {
			e.printStackTrace();
		}

		return mapping.findForward("consultaSolicitud");
	}
	
	public ActionForward cambiarTipoRequerimiento(ActionMapping mapping, ActionForm form, HttpServletRequest req,
			HttpServletResponse res) {
		HttpSession sesion = req.getSession();
		try {
			ReversaForm eForm = (ReversaForm) form;
			eForm.setIndHabilitar("0");
			sesion.setAttribute("tipoReq", eForm.getTipoRequerimiento());
		} catch (Exception e) {
			e.printStackTrace();
			return mapping.findForward("Error");
		}

		return mapping.findForward("consultaSolicitud");
	}

}
