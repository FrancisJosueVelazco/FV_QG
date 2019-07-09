package com.qualitygardian.dat;

public class ParametrosException extends Exception{

  private String mensaje;
  private String clase;
  private String metodo;
  private String procedimiento;
  
    public ParametrosException(String msg, String cl, String method)
  {
    this.mensaje=msg;
    this.clase=cl;
    this.metodo=method;
  }
  
  public ParametrosException(String msg, String cl, String method,String proc)
  {
    this.mensaje=msg;
    this.clase=cl;
    this.metodo=method;
    this.procedimiento=proc;
  }


  public void setMensaje(String mensaje)
  {
    this.mensaje = mensaje;
  }


  public String getMensaje()
  {
    return mensaje;
  }


  public void setClase(String clase)
  {
    this.clase = clase;
  }


  public String getClase()
  {
    return clase;
  }


  public void setMetodo(String metodo)
  {
    this.metodo = metodo;
  }


  public String getMetodo()
  {
    return metodo;
  }


  public void setProcedimiento(String procedimiento)
  {
    this.procedimiento = procedimiento;
  }


  public String getProcedimiento()
  {
    return procedimiento;
  }
  
  
}