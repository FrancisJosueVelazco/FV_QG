package com.qualitygardian.dat;

import java.util.ResourceBundle;

import com.qualitygardian.util.ReadProperty;

public interface Parametros {

	ResourceBundle ParmGene = ResourceBundle.getBundle("qgsla");

	/** Usado para para el nuevo sistema de seguridad */
	String DATASOURCE = ParmGene.getString("DATASOURCE");
	/** Parametros de configuracion para consumo de web service de seguridad */
	String URL_WS_SEGURIDAD = ReadProperty.getValueFromPropertySideServer("url_ws_seguridad");
	String METODO_WS_LOGIN = ReadProperty.getValueFromPropertySideServer("metodo_ws_login");
	String METODO_WS_OBTENER_MENU = ReadProperty.getValueFromPropertySideServer("metodo_ws_obtenerMenu");
	String METEDO_PERFILXUSUARIO=ReadProperty.getValueFromPropertySideServer("metodo_ws_obtener_perfil");
	String CODIGO_APLICACION_QGSLA = ReadProperty.getValueFromPropertySideServer("codigo_aplicacion");
}