package com.qualitygardian.web.qgsla.ws.client.impl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.axis.types.URI.MalformedURIException;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.qualitygardian.dat.Constantes;
import com.qualitygardian.dat.Parametros;
import com.qualitygardian.web.qgsla.ws.bean.LoginResponse;
import com.qualitygardian.web.qgsla.ws.bean.ObtenerMenuResponse;
import com.qualitygardian.web.qgsla.ws.bean.PerfilxUsuarioResponse;

public class SeguridadClientImpl {

	private Logger log = Logger.getLogger(SeguridadClientImpl.class.getName());

	public LoginResponse login(Map<String, Object> parametros) {
		log.info(">>>>>>>>>[INICIO METODO] login");
		System.out.println("el usario y clave son  " + parametros.get(Constantes.PARAM_USER) + "/"
				+ parametros.get(Constantes.PARAM_CLAVE));
		String urlWS = Parametros.URL_WS_SEGURIDAD + Parametros.METODO_WS_LOGIN;
		urlWS = urlWS + parametros.get(Constantes.PARAM_USER) + "/" + parametros.get(Constantes.PARAM_CLAVE) + "/"
				+ Parametros.CODIGO_APLICACION_QGSLA;
		LoginResponse response = new LoginResponse();

		try {

			URL url = new URL(urlWS);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Falla : HTTP codigo de Error : " + conn.getResponseCode());
			}
			BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));

			String output;

			System.out.println("Respuesta desde Servidor .... \n");
			// redLine(): Lectura y almacenado de una variable

			while ((output = br.readLine()) != null) {
				System.out.println("Cadena JSON autentica " + output);

				/** Decodificando Json to Java */
				ObjectMapper mapper = new ObjectMapper();
				// .readValue--->desealizar contenido JSON en un objeto Java.
				response = mapper.readValue(output, LoginResponse.class);
				/** End-Docodificando */
			}
			if (response != null && !response.getRpta().equals("OK")) {
				response.setMsgError(response.getMsg());
			}
			log.info("Seleccione Usuario Local");
			log.info(">>>>>>>>>seg_login: Rpta[" + response.getRpta() + "] Msg [" + response.getMsg() + "]");

			conn.disconnect();

		} catch (MalformedURIException e) {
			e.printStackTrace();
		} catch (IOException e) {

			log.log(Level.SEVERE, "Ocurrio un Error al invocar al WebService de Seguridad en el metodo [seg_login]");
			log.log(Level.SEVERE, e.getMessage());
			response.setMsgError("Ha ocurrido un problema al autenticarse.");
			e.printStackTrace();
		}

		log.info(">>>>>>>>>[FIN METODO] login");

		return response;
	}

	public PerfilxUsuarioResponse obtenerPerfilxUsrro(Map<String, Object> parametros) {
		log.info(">>>>>>>>>[INICIO METODO] obtener Perfil");
		System.out.println("el usario y clave son  " + parametros.get(Constantes.PARAM_USER) + "/"
				+ parametros.get(Constantes.PARAM_CLAVE));

		String urlWS = Parametros.URL_WS_SEGURIDAD + Parametros.METEDO_PERFILXUSUARIO;
		urlWS = urlWS + parametros.get(Constantes.PARAM_USER) + "/" + Parametros.CODIGO_APLICACION_QGSLA;
		PerfilxUsuarioResponse response = new PerfilxUsuarioResponse();

		try {

			URL url = new URL(urlWS);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Falla : HTTP codigo de Error : " + conn.getResponseCode());
			}
			BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));

			String output=br.readLine();
			

			System.out.println("Respuesta desde Servidor .... \n");
			
			System.out.println("Cadena JSON autentica " + output);
			
			// redLine(): Lectura y almacenado de una variable

			/*
			 * while ((output = br.readLine()) != null) {
			 * System.out.println("Cadena JSON autentica " + output);
			 * 
			 *//** Decodificando Json to Java */
			/*
			 * ObjectMapper mapper = new ObjectMapper(); //.readValue--->desealizar
			 * contenido JSON en un objeto Java. response = mapper.readValue(output,
			 * PerfilxUsuarioResponse.class);
			 *//** End-Docodificando *//*
										 * }
										 */
			if (response != null && !response.getRpta().equals("OK")) {
				response.setMsgError(response.getMsg());
			}
			log.info(">>>>>>>>>seg_login: Rpta[" + response.getRpta() + "] Msg [" + response.getMsg() + "]");

			conn.disconnect();

		} catch (MalformedURIException e) {
			e.printStackTrace();
		} catch (IOException e) {

			log.log(Level.SEVERE,
					"Ocurrio un Error al invocar al WebService de Seguridad en el metodo [ObtenePerfilxUsuario]");
			log.log(Level.SEVERE, e.getMessage());
			response.setMsgError("Ha ocurrido un problema al autenticarse.");
			e.printStackTrace();
		}

		log.info(">>>>>>>>>[FIN METODO] ObtenePerfilxUsuario");

		return response;

	}

	public ObtenerMenuResponse obtenerMenu(Map<String, Object> parametros) {
		log.info(">>>>>>>>>[INICIO METODO] obtenerMenu");
		/*
		 * System.out.println("el usuario y clave son  " +
		 * parametros.get(Constantes.PARAM_USER) + "/" +
		 * parametros.get(Constantes.PARAM_CLAVE));
		 */
		ObtenerMenuResponse response = new ObtenerMenuResponse();
		String urlWS = Parametros.URL_WS_SEGURIDAD + Parametros.METODO_WS_OBTENER_MENU;
		urlWS = urlWS + Parametros.CODIGO_APLICACION_QGSLA + "/" + parametros.get(Constantes.PARAM_USER) + "/"
				+ parametros.get(Constantes.PARAM_CLAVE);
		try {

			URL url = new URL(urlWS);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Falla : HTTP codigo de Error : " + conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));

			String output;

			System.out.println("Respuesta desde Servidor .... \n");
			while ((output = br.readLine()) != null) {
				// System.out.println("Cadena JSON " + output);

				/** Decodificando Json to Java */
				ObjectMapper mapper = new ObjectMapper();
				response = mapper.readValue(output, ObtenerMenuResponse.class);
				/** End-Docodificando */
			}
			/** Validacion en caso de Error */
			if (response != null && !response.getRpta().equals("OK")) {
				response.setMsgError("No tiene permisos sobre la aplicación.");
			}
			if (response != null && response.getRpta().equals("OK") && response.getOpciones() != null
					&& response.getOpciones().size() == 0) {
				response.setMsgError("No existe opciones de menú para este usuario.");
			}
			/***/
			log.info(">>>>>>>>>obtenerMenu: Rpta[" + response.getRpta() + "] usuario[" + response.getUsuarioNT()
					+ "] Cant. Opciones Primer Nivel[" + response.getOpciones().size() + "]");

			conn.disconnect();

		} catch (MalformedURLException e) {

			e.printStackTrace();

		} catch (IOException e) {
			log.log(Level.SEVERE, "Ocurrio un Error al invocar al WebService de Seguridad en el metodo [obtenerMenu]");
			log.log(Level.SEVERE, e.getMessage());
			response.setMsgError("Ha ocurrido un problema al acceder a las opciones de menú.");
			e.printStackTrace();

		}
		log.info(">>>>>>>>>[FIN METODO] obtenerMenu");

		return response;
	}

}
