package com.qualitygardian.util;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.GregorianCalendar;

public class Fechas 
{
  public long calcularDiasEntreFechas(Date fecinicio, Date fecfin)
  {
    long diff = fecfin.getTime() - fecinicio.getTime();
    long dias = diff / (1000 * 60 * 60 * 24);
    return dias;
  }
  
  public Date conversorFechas(String fecha, String formato)
  {
    Date _fec=new Date();
    try
    {
      SimpleDateFormat conversor=new SimpleDateFormat(formato);
      _fec=conversor.parse(fecha);
    }catch(Exception e)
    {
      e.printStackTrace();
    }
    return _fec;
  }
  public  String obtenerPeriodo(){
   GregorianCalendar fecha = new GregorianCalendar();

	// obtiene dia, mes, anio del sistema
	int dia = fecha.get(fecha.DAY_OF_MONTH);
	int mes = fecha.get(fecha.MONTH)+1;
	int anio = fecha.get(fecha.YEAR);
  if(mes<10)
  return "0"+mes+"/"+anio;
    
  return ""+mes+"/"+anio;
  } 
  
  
  
  public static void main(String[] args)
  {
    try
    {
      Fechas f = new Fechas();
      SimpleDateFormat conversor=new SimpleDateFormat("dd/MM/yyyy");
      Date fecinicio=conversor.parse("30/01/2007");
      Date fecfin=conversor.parse("20/01/2007");
      long dias=f.calcularDiasEntreFechas(fecinicio,fecfin);
      System.out.println("dias:"+dias);
    }catch(Exception e)
    {
      e.printStackTrace();
    }
  }
}