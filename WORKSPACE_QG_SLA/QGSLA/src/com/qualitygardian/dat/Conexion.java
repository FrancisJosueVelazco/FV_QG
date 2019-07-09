package com.qualitygardian.dat;
import java.math.BigDecimal;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.List;
//import oracle.jdbc.OracleTypes;

public class Conexion{		
  Connection conn = null;
  
  public Conexion() throws SQLException{
    
    
      try
      {
        Conn con = new Conn();
        conn = con.getConnection();
      }
      catch (Exception e)
      {
        e.printStackTrace();
      }
  }
  
  public Connection getConexion()
  {
    return conn;
  }
  
  public void destroy(Connection cn, ResultSet rs, CallableStatement proc) throws SQLException {
		if (proc != null) {
			try {				
				proc.close();
			} catch (SQLException e) {
				e.printStackTrace();
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
			} catch (SQLException e) {
				e.printStackTrace();
			}
			cn = null;
		}		
	}
}  