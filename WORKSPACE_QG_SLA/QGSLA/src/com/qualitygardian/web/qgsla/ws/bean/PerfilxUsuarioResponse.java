package com.qualitygardian.web.qgsla.ws.bean;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PerfilxUsuarioResponse implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	@JsonProperty("Rpta")
	private String rpta;
	@JsonProperty("Msg")
	private String msg;
	@JsonIgnore
	private String msgError;
	public String getRpta() {
		return rpta;
	}
	public void setRpta(String rpta) {
		this.rpta = rpta;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public String getMsgError() {
		return msgError;
	}
	public void setMsgError(String msgError) {
		this.msgError = msgError;
	}
	
	

}
