package com.qualitygardian.web.qgsla.modelo.dao;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.logging.Logger;

import com.qualitygardian.dat.Conn;
import com.qualitygardian.web.qgsla.modelo.dto.RegistroRequerimiento;
import com.qualitygardian.web.qgsla.vc.struts.form.ReversaForm;

public class ConsultarReversaDao {
	RegistroRequerimiento requerimiento;
	Connection c=null;
	CallableStatement cas =null;
	CallableStatement cs=null;
	ResultSet rs=null;
	Conn conn;
	int rpta;
	private Logger logger;
	
	public int insertarregSla(RegistroRequerimiento dto)throws Exception{
			
			try {
				/*
				System.out.println("Usuario Registro"+dto.getUsuRegistro());
				System.out.println("Usuario Modificado"+dto.getUsuModifica());
				*/
				conn=new Conn();
				c=conn.getConnection();
				cas=c.prepareCall("{CALL PP.P_QG_SLA_UTIL.QG_SLA_REG_SLA(?,?,?,?,?,?,?,?)}");
				cas.setString(1, dto.getTipo_atencion());
				cas.setString(2, dto.getReq());
				cas.setString(3, dto.getNombre_req());
				cas.setString(4, dto.getFecha_recepcion());
				cas.setString(5, dto.getHora_recepcion());
				cas.setString(6, dto.getComplejidad());
				cas.setString(7, dto.getCriticidad());
				cas.setString(8, dto.getTipolocal());
				cas.setString(8, dto.getTipolocal());
				System.out.println("LOCAL :" +dto.getTipolocal());
				cas.execute();
				
			} catch (Exception e) {
		
				e.printStackTrace();
			}finally {
				conn.destroy(c, rs, cas);
			}
		return rpta;
	}
	

}
