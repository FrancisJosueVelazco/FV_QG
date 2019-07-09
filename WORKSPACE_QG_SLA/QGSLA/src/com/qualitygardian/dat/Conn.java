package com.qualitygardian.dat;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.sql.Connection;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.sql.DataSource;
import org.apache.commons.dbcp.DelegatingConnection;

import java.sql.*;

public class Conn implements Parametros {
	Connection connection;
	Connection dconn;
	int i;

	public Connection getConnection() {
		try {
			Context ctx = new InitialContext();
			DataSource ds = (DataSource) ctx.lookup("java:/QGSLADS");
			connection = ds.getConnection();
			DelegatingConnection dc = new DelegatingConnection(connection);
			dconn = dc.getInnermostDelegate();
			System.out.println("Conexion Satisfactoria a QGSLADS");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return dconn;
	}

	public void destroy(Connection cn, ResultSet rs, CallableStatement proc) throws SQLException {
		if (proc != null) {
			try {
				proc.close();
			} catch (SQLException esql) {
				esql.printStackTrace();
			}
			proc = null;
		}
		if (rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
			rs = null;
		}
		if (cn != null) {
			try {
				cn.close();
			} catch (SQLException esql) {
				esql.printStackTrace();
			}
			cn = null;
		}
	}

	public static void main(String[] args) {
		FileOutputStream fos = null;
		PrintWriter pw = null;
		// Crea el fichero para guardar los datos
		File ficheroDeSalida = new File("c:/", "Ejemplo.txt");
		try {
			fos = new FileOutputStream(ficheroDeSalida);
			pw = new PrintWriter(fos);
			// Escribe una secuencia de texto en el fichero
			for (int i = 0; i < 10; i++) {
				pw.println("Ejemplo " + i + " : Escribiendo. . . . ");
			}
			// Escribir realmente en el disco
			pw.flush();
			fos.close();

		} catch (Exception e) {
			System.out.println(e);
		}

	}

}
