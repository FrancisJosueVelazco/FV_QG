package com.qualitygardian.web.qgsla.vc.struts.form;

import org.apache.struts.action.ActionForm;

public class LoginForm extends ActionForm{
	
	private String ussro;
	private String pssord;
	
	private String perfil;

	private String tipolocal;
	private String recordar ="0";
    private String mensaje="";
    private String mensajeconsulta;
    
    
    
    
    
    
	
	
	public String getPerfil() {
		return perfil;
	}
	public void setPerfil(String perfil) {
		this.perfil = perfil;
	}
	public String getMensajeconsulta() {
		return mensajeconsulta;
	}
	public void setMensajeconsulta(String mensajeconsulta) {
		this.mensajeconsulta = mensajeconsulta;
	}
	public String getTipolocal() {
		return tipolocal;
	}
	public void setTipolocal(String tipolocal) {
		this.tipolocal = tipolocal;
	}
	public String getUssro() {
		return ussro;
	}
	public void setUssro(String ussro) {
		this.ussro = ussro;
	}
	public String getPssord() {
		return pssord;
	}
	public void setPssord(String pssord) {
		this.pssord = pssord;
	}
	public String getRecordar() {
		return recordar;
	}
	public void setRecordar(String recordar) {
		this.recordar = recordar;
	}
	public String getMensaje() {
		return mensaje;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
    
    

}
