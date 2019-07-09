package com.qualitygardian.web.qgsla.vc.struts.form;

import org.apache.struts.action.ActionForm;

public class ReversaForm extends ActionForm{
	
	  private String ideRequerimiento;
	  //private String local;

	//PARAMETROS SELECCION TIPO REQUERIMIENTOS    
	  private String tipoRequerimiento;//ALMC
	  
	// PARAMETROS DE ENTRADA
	  private String cuspp;
	  private String nroSolPension;
	  private String tipPrestacion;
	  
	  
	// PARAMETROS DE OBTENIDOS
	 
	  private String registrar;
	  private String reqRev;
	  private String tipoaten;
	  private String nombrereq;
	  private String fecharec;
	  private String horarec;

	  
	  
	  private String tipo_atencion;
	  private String req;
	  private String nombre_req;
	  private String fecha_recepcion;
	  private String hora_recepcion;
	  private String complejidad;
	  private String criticidad;
	  
	  
	  
	  
	  
	  
	  public String getTipo_atencion() {
		return tipo_atencion;
	}
	public void setTipo_atencion(String tipo_atencion) {
		this.tipo_atencion = tipo_atencion;
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
	public String getRegistrar() {
		return registrar;
	}
	public void setRegistrar(String registrar) {
		this.registrar = registrar;
	}
	public String getReqRev() {
		return reqRev;
	}
	public void setReqRev(String reqRev) {
		this.reqRev = reqRev;
	}
	
	public String getTipoaten() {
		return tipoaten;
	}
	public void setTipoaten(String tipoaten) {
		this.tipoaten = tipoaten;
	}
	public String getReq() {
		return req;
	}
	public void setReq(String req) {
		this.req = req;
	}
	public String getNombrereq() {
		return nombrereq;
	}
	public void setNombrereq(String nombrereq) {
		this.nombrereq = nombrereq;
	}
	public String getFecharec() {
		return fecharec;
	}
	public void setFecharec(String fecharec) {
		this.fecharec = fecharec;
	}
	public String getHorarec() {
		return horarec;
	}
	public void setHorarec(String horarec) {
		this.horarec = horarec;
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
	private String nomAfiliado;

	  private String nombres1;
	  private String nombres2;
	  private String apePaterno;
	  private String apeMaterno;
	  private String nroExpediente;
	  private String estSolicitud;
	  private String subEstSolicitud;
	  private String idEstSolicitud;
	  private String idSubEstSolicitud; 
	  
	  private String estRequerimiento;
	  private String motivoReverso;
	  private String usuRegistro;
	  private String usuModifica;
	  private String fecRegistro;
	  private String fecModifica;
	  private String ideHistorico;
	  private String usuarioHis;
	  private String estadoHis;
	  private String comentarioHis;
	  private String fecRegistroHis;
	  
	  private String radCompleto;
	  
	  // Atributos para la bandeja
	  
	  private String fechaIni;
	  private String fechaFin;
	  private String estadoRequerimiento;
	  private String numeroSolicitud;
	  private String chekBandeja;
	  
	  private String boton;
	  private String indHabilitar;
	  
	  private String nombreApo;
	  private String tipoDocApo;
	  private String nroDocApo;
	  private String cusppApo;
	  private String ideCliApo;
	  private String tipoDocAct;
	  private String nroDocAct;
	  private String nroPartNacBenAct;
	  private String nroDocBenAct;
	  private String tipoDocBenAct;
	public String getIdeRequerimiento() {
		return ideRequerimiento;
	}
	public void setIdeRequerimiento(String ideRequerimiento) {
		this.ideRequerimiento = ideRequerimiento;
	}
	public String getTipoRequerimiento() {
		return tipoRequerimiento;
	}
	public void setTipoRequerimiento(String tipoRequerimiento) {
		this.tipoRequerimiento = tipoRequerimiento;
	}
	public String getCuspp() {
		return cuspp;
	}
	public void setCuspp(String cuspp) {
		this.cuspp = cuspp;
	}
	public String getNroSolPension() {
		return nroSolPension;
	}
	public void setNroSolPension(String nroSolPension) {
		this.nroSolPension = nroSolPension;
	}
	public String getTipPrestacion() {
		return tipPrestacion;
	}
	public void setTipPrestacion(String tipPrestacion) {
		this.tipPrestacion = tipPrestacion;
	}
	public String getNomAfiliado() {
		return nomAfiliado;
	}
	public void setNomAfiliado(String nomAfiliado) {
		this.nomAfiliado = nomAfiliado;
	}
	public String getNombres1() {
		return nombres1;
	}
	public void setNombres1(String nombres1) {
		this.nombres1 = nombres1;
	}
	public String getNombres2() {
		return nombres2;
	}
	public void setNombres2(String nombres2) {
		this.nombres2 = nombres2;
	}
	public String getApePaterno() {
		return apePaterno;
	}
	public void setApePaterno(String apePaterno) {
		this.apePaterno = apePaterno;
	}
	public String getApeMaterno() {
		return apeMaterno;
	}
	public void setApeMaterno(String apeMaterno) {
		this.apeMaterno = apeMaterno;
	}
	public String getNroExpediente() {
		return nroExpediente;
	}
	public void setNroExpediente(String nroExpediente) {
		this.nroExpediente = nroExpediente;
	}
	public String getEstSolicitud() {
		return estSolicitud;
	}
	public void setEstSolicitud(String estSolicitud) {
		this.estSolicitud = estSolicitud;
	}
	public String getSubEstSolicitud() {
		return subEstSolicitud;
	}
	public void setSubEstSolicitud(String subEstSolicitud) {
		this.subEstSolicitud = subEstSolicitud;
	}
	public String getIdEstSolicitud() {
		return idEstSolicitud;
	}
	public void setIdEstSolicitud(String idEstSolicitud) {
		this.idEstSolicitud = idEstSolicitud;
	}
	public String getIdSubEstSolicitud() {
		return idSubEstSolicitud;
	}
	public void setIdSubEstSolicitud(String idSubEstSolicitud) {
		this.idSubEstSolicitud = idSubEstSolicitud;
	}
	public String getEstRequerimiento() {
		return estRequerimiento;
	}
	public void setEstRequerimiento(String estRequerimiento) {
		this.estRequerimiento = estRequerimiento;
	}
	public String getMotivoReverso() {
		return motivoReverso;
	}
	public void setMotivoReverso(String motivoReverso) {
		this.motivoReverso = motivoReverso;
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
	public String getFecRegistro() {
		return fecRegistro;
	}
	public void setFecRegistro(String fecRegistro) {
		this.fecRegistro = fecRegistro;
	}
	public String getFecModifica() {
		return fecModifica;
	}
	public void setFecModifica(String fecModifica) {
		this.fecModifica = fecModifica;
	}
	public String getIdeHistorico() {
		return ideHistorico;
	}
	public void setIdeHistorico(String ideHistorico) {
		this.ideHistorico = ideHistorico;
	}
	public String getUsuarioHis() {
		return usuarioHis;
	}
	public void setUsuarioHis(String usuarioHis) {
		this.usuarioHis = usuarioHis;
	}
	public String getEstadoHis() {
		return estadoHis;
	}
	public void setEstadoHis(String estadoHis) {
		this.estadoHis = estadoHis;
	}
	public String getComentarioHis() {
		return comentarioHis;
	}
	public void setComentarioHis(String comentarioHis) {
		this.comentarioHis = comentarioHis;
	}
	public String getFecRegistroHis() {
		return fecRegistroHis;
	}
	public void setFecRegistroHis(String fecRegistroHis) {
		this.fecRegistroHis = fecRegistroHis;
	}
	public String getRadCompleto() {
		return radCompleto;
	}
	public void setRadCompleto(String radCompleto) {
		this.radCompleto = radCompleto;
	}
	public String getFechaIni() {
		return fechaIni;
	}
	public void setFechaIni(String fechaIni) {
		this.fechaIni = fechaIni;
	}
	public String getFechaFin() {
		return fechaFin;
	}
	public void setFechaFin(String fechaFin) {
		this.fechaFin = fechaFin;
	}
	public String getEstadoRequerimiento() {
		return estadoRequerimiento;
	}
	public void setEstadoRequerimiento(String estadoRequerimiento) {
		this.estadoRequerimiento = estadoRequerimiento;
	}
	public String getNumeroSolicitud() {
		return numeroSolicitud;
	}
	public void setNumeroSolicitud(String numeroSolicitud) {
		this.numeroSolicitud = numeroSolicitud;
	}
	public String getChekBandeja() {
		return chekBandeja;
	}
	public void setChekBandeja(String chekBandeja) {
		this.chekBandeja = chekBandeja;
	}
	public String getBoton() {
		return boton;
	}
	public void setBoton(String boton) {
		this.boton = boton;
	}
	public String getIndHabilitar() {
		return indHabilitar;
	}
	public void setIndHabilitar(String indHabilitar) {
		this.indHabilitar = indHabilitar;
	}
	public String getNombreApo() {
		return nombreApo;
	}
	public void setNombreApo(String nombreApo) {
		this.nombreApo = nombreApo;
	}
	public String getTipoDocApo() {
		return tipoDocApo;
	}
	public void setTipoDocApo(String tipoDocApo) {
		this.tipoDocApo = tipoDocApo;
	}
	public String getNroDocApo() {
		return nroDocApo;
	}
	public void setNroDocApo(String nroDocApo) {
		this.nroDocApo = nroDocApo;
	}
	public String getCusppApo() {
		return cusppApo;
	}
	public void setCusppApo(String cusppApo) {
		this.cusppApo = cusppApo;
	}
	public String getIdeCliApo() {
		return ideCliApo;
	}
	public void setIdeCliApo(String ideCliApo) {
		this.ideCliApo = ideCliApo;
	}
	public String getTipoDocAct() {
		return tipoDocAct;
	}
	public void setTipoDocAct(String tipoDocAct) {
		this.tipoDocAct = tipoDocAct;
	}
	public String getNroDocAct() {
		return nroDocAct;
	}
	public void setNroDocAct(String nroDocAct) {
		this.nroDocAct = nroDocAct;
	}
	public String getNroPartNacBenAct() {
		return nroPartNacBenAct;
	}
	public void setNroPartNacBenAct(String nroPartNacBenAct) {
		this.nroPartNacBenAct = nroPartNacBenAct;
	}
	public String getNroDocBenAct() {
		return nroDocBenAct;
	}
	public void setNroDocBenAct(String nroDocBenAct) {
		this.nroDocBenAct = nroDocBenAct;
	}
	public String getTipoDocBenAct() {
		return tipoDocBenAct;
	}
	public void setTipoDocBenAct(String tipoDocBenAct) {
		this.tipoDocBenAct = tipoDocBenAct;
	}
	  
	  
	  
	  
	

}
