package com.qualitygardian.web.qgsla.ws.bean;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ObtenerMenuResponse implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@JsonProperty("Rpta")
	private String rpta;
	@JsonProperty("Usuario")
	private String usuario;
	@JsonProperty("UsuarioNT")
	private String usuarioNT;
	@JsonProperty("SubOpciones")
	private List<OpcionResponse> opciones;
	@JsonIgnore
	private String msgError;
	public String getRpta() {
		return rpta;
	}
	public void setRpta(String rpta) {
		this.rpta = rpta;
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getUsuarioNT() {
		return usuarioNT;
	}
	public void setUsuarioNT(String usuarioNT) {
		this.usuarioNT = usuarioNT;
	}
	public List<OpcionResponse> getOpciones() {
		return opciones;
	}
	public void setOpciones(List<OpcionResponse> opciones) {
		this.opciones = opciones;
	}
	public String getMsgError() {
		return msgError;
	}
	public void setMsgError(String msgError) {
		this.msgError = msgError;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
	
	
	
	

}
