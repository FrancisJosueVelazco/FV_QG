package com.qualitygardian.web.qgsla.modelo.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.qualitygardian.dat.Conn;
import com.qualitygardian.web.qgsla.modelo.dto.CombosDTO;

import oracle.jdbc.driver.OracleTypes;

public class ObtenerListadoCombosDAO {
	Connection c;
	Conn conn;
	CallableStatement cas;
	ResultSet rs;
	CombosDTO combosDTO;
	List listaCombos;

	public List obtenerListadoTipoOpe(String tip_atencion, String atencion) throws SQLException {
		listaCombos = new ArrayList();
		try {
			conn = new Conn();
			c = conn.getConnection();
			cas = c.prepareCall("{CALL PP.P_QG_SLA_UTIL.QG_SLA_LISTA_TIPATENCION(?)}");
			cas.registerOutParameter(1, OracleTypes.CURSOR);
			cas.execute();
			for (rs = (ResultSet) cas.getObject(1); rs.next();) {
				combosDTO = new CombosDTO();
				combosDTO.setTip_atencion(rs.getString("TIP_ATENCION"));
				combosDTO.setAtencion(rs.getString("ATENCION"));
				listaCombos.add(combosDTO);
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			conn.destroy(c, rs, cas);
		}
		return listaCombos;
	}
	
	public List obtenerListadoLocales(String local)throws SQLException{
		listaCombos=new ArrayList();
		
		try {
			conn=new Conn();
			c=conn.getConnection();
			cas=c.prepareCall("{CALL PP.P_QG_SLA_USER.QG_SLA_LISTA_USERS(?)}");
			cas.registerOutParameter(1, OracleTypes.CURSOR);
			cas.execute();
			
			for (rs= (ResultSet)cas.getObject(1);rs.next();) {
				combosDTO=new CombosDTO();
				combosDTO.setLocal(rs.getString("USUARIO_LOCAL"));
				listaCombos.add(combosDTO);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			conn.destroy(c, rs, cas);
		}
		
		return listaCombos;
	}
	
	public List obtenerListadoLocalesxDominio(String ussro,String local)throws SQLException{
		listaCombos=new ArrayList();
		
		try {
			conn=new Conn();
			c=conn.getConnection();
			cas=c.prepareCall("{CALL PP.P_QG_SLA_USER.QG_SLA_USERxDOM(?,?)}");
			cas.setString(1, ussro);
			cas.registerOutParameter(2, OracleTypes.CURSOR);
			cas.execute();
			
			for (rs= (ResultSet)cas.getObject(2);rs.next();) {
				combosDTO=new CombosDTO();
				combosDTO.setLocal(rs.getString("USUARIO_LOCAL"));
				listaCombos.add(combosDTO);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			conn.destroy(c, rs, cas);
		}
		
		return listaCombos;
	}
	

}