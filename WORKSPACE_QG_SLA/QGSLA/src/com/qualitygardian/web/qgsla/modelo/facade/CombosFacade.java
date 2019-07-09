package com.qualitygardian.web.qgsla.modelo.facade;
import java.util.List;

import com.qualitygardian.web.qgsla.modelo.dao.ConsultarReversaDao;
import com.qualitygardian.web.qgsla.modelo.dao.ObtenerListadoCombosDAO;
import com.qualitygardian.web.qgsla.modelo.dto.RegistroRequerimiento;

public class CombosFacade 
{
 /* public List obtenerListadoCombo(String codigoConcepto)  throws Exception
  {
    ObtenerListadoCombosDAO dao = new ObtenerListadoCombosDAO();
    return dao.obtenerListadoConcepto(codigoConcepto);
  }*/
  
  public List obtenerListadoTipoOpe(String tip_atencion,String atencion)  throws Exception
  {
    ObtenerListadoCombosDAO dao = new ObtenerListadoCombosDAO();
    return dao.obtenerListadoTipoOpe(tip_atencion,atencion);
  }
  
  public List obtenerListadoLocales(String local)throws Exception{
	ObtenerListadoCombosDAO dao=new ObtenerListadoCombosDAO();
	return dao.obtenerListadoLocales(local);
  }
  
  public List obtenerListadoLocalesxDominio(String ussro,String local)throws Exception{
		ObtenerListadoCombosDAO dao=new ObtenerListadoCombosDAO();
		return dao.obtenerListadoLocalesxDominio(ussro,local);
	  }
  
  
  

}