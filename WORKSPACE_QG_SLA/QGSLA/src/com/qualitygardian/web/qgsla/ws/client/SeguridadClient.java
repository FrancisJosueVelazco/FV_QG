package com.qualitygardian.web.qgsla.ws.client;

import java.util.Map;

import com.qualitygardian.web.qgsla.ws.bean.LoginResponse;
import com.qualitygardian.web.qgsla.ws.bean.ObtenerMenuResponse;
import com.qualitygardian.web.qgsla.ws.bean.PerfilxUsuarioResponse;
import com.qualitygardian.web.qgsla.ws.client.impl.SeguridadClientImpl;

public class SeguridadClient {
	

	public LoginResponse login(Map<String, Object> parametros) {
		SeguridadClientImpl seg = new SeguridadClientImpl();
		return seg.login(parametros);
	}
	
	public ObtenerMenuResponse obtenerMenu(Map<String, Object> parametros) {
		SeguridadClientImpl seg = new SeguridadClientImpl();
		return seg.obtenerMenu(parametros);
	}
	
	public PerfilxUsuarioResponse obtenerPerfilxUsuario(Map<String, Object>parametros) {
		SeguridadClientImpl seg=new SeguridadClientImpl();
		return seg.obtenerPerfilxUsrro(parametros);
	}

}
