package com.qualitygardian.web.qgsla.modelo.facade;

import java.util.logging.Logger;

import com.qualitygardian.web.qgsla.modelo.dao.ConsultarReversaDao;
import com.qualitygardian.web.qgsla.modelo.dto.RegistroRequerimiento;
import com.qualitygardian.web.qgsla.vc.struts.form.ReversaForm;

public class ReversaFacade {
	private Logger logger;
	public int insertarSla(RegistroRequerimiento dto)throws Exception{
		
		  ConsultarReversaDao dao=new ConsultarReversaDao();
		  return dao.insertarregSla(dto);
	  }
}
