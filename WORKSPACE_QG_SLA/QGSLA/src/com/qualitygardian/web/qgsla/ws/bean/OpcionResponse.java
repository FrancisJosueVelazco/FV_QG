package com.qualitygardian.web.qgsla.ws.bean;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OpcionResponse implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	@JsonProperty("IdOpcion")
	private Integer idOpcion;
	@JsonProperty("NOrden")
	private Integer nOrden;
	@JsonProperty("Nombre")
	private String nombre;
	@JsonProperty("Url")
	private String url;
	@JsonProperty("SubOpciones")
	private List<OpcionResponse> subOpciones;
	@JsonProperty("Parametros")
	private String parametros;
	@JsonProperty("IndMenu")
	private String indMenu;
	
	public Integer getIdOpcion() {
		return idOpcion;
	}
	public void setIdOpcion(Integer idOpcion) {
		this.idOpcion = idOpcion;
	}
	public Integer getnOrden() {
		return nOrden;
	}
	public void setnOrden(Integer nOrden) {
		this.nOrden = nOrden;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public List<OpcionResponse> getSubOpciones() {
		return subOpciones;
	}
	public void setSubOpciones(List<OpcionResponse> subOpciones) {
		this.subOpciones = subOpciones;
	}
	public String getParametros() {
		return parametros;
	}
	public void setParametros(String parametros) {
		this.parametros = parametros;
	}
	public String getIndMenu() {
		return indMenu;
	}
	public void setIndMenu(String indMenu) {
		this.indMenu = indMenu;
	}
	
	

}
