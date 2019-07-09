package com.qualitygardian.web.qgsla.modelo.dto;

public class RegistroRequerimiento {
	

	  private String tipo_atencion;
	  private String req;
	  private String nombre_req;
	  private String fecha_recepcion;
	  private String hora_recepcion;
	  private String complejidad;
	  private String criticidad;
	  private String registrar;
	  private String tipolocal;
	  
	  
	  private String usuRegistro;
	  private String usuModifica;
	  
	  
	public String getTipo_atencion() {
		return tipo_atencion;
	}
	public void setTipo_atencion(String tipo_atencion) {
		this.tipo_atencion = tipo_atencion;
	}
	public String getReq() {
		return req;
	}
	public void setReq(String req) {
		this.req = req;
	}
	public String getNombre_req() {
		return nombre_req;
	}
	public void setNombre_req(String nombre_req) {
		this.nombre_req = nombre_req;
	}
	public String getFecha_recepcion() {
		return fecha_recepcion;
	}
	public void setFecha_recepcion(String fecha_recepcion) {
		this.fecha_recepcion = fecha_recepcion;
	}
	public String getHora_recepcion() {
		return hora_recepcion;
	}
	public void setHora_recepcion(String hora_recepcion) {
		this.hora_recepcion = hora_recepcion;
	}
	public String getComplejidad() {
		return complejidad;
	}
	public void setComplejidad(String complejidad) {
		this.complejidad = complejidad;
	}
	public String getCriticidad() {
		return criticidad;
	}
	public void setCriticidad(String criticidad) {
		this.criticidad = criticidad;
	}
	public String getRegistrar() {
		return registrar;
	}
	public void setRegistrar(String registrar) {
		this.registrar = registrar;
	}
	public String getTipolocal() {
		return tipolocal;
	}
	public void setTipolocal(String tipolocal) {
		this.tipolocal = tipolocal;
	}
	public String getUsuRegistro() {
		return usuRegistro;
	}
	public void setUsuRegistro(String usuRegistro) {
		this.usuRegistro = usuRegistro;
	}
	public String getUsuModifica() {
		return usuModifica;
	}
	public void setUsuModifica(String usuModifica) {
		this.usuModifica = usuModifica;
	}
			  

}
