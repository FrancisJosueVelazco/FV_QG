package com.qualitygardian.util;

public class Formatos 
{
  private String fechaLetras;
  private String mesFec;
  public String fechaEnLetras(String dia,String mes, String anio)throws Exception
  {
    if(Integer.parseInt(dia)<=31 && Integer.parseInt(mes)<=12)
    {
      int fecMes=Integer.parseInt(mes);
      switch(fecMes)
      {
        case 1:mesFec="Enero";break;
        case 2:mesFec="Febrero";break;
        case 3:mesFec="Marzo";break;
        case 4:mesFec="Abril";break;
        case 5:mesFec="Mayo";break;
        case 6:mesFec="Junio";break;
        case 7:mesFec="Julio";break;
        case 8:mesFec="Agosto";break;
        case 9:mesFec="Setiembre";break;
        case 10:mesFec="Octubre";break;
        case 11:mesFec="Noviembre";break;
        case 12:mesFec="Diciembre";
      }
      fechaLetras=dia.concat(" de ").concat(mesFec).concat(" del ").concat(anio);
    }else
    {
      fechaLetras=null;
      System.out.println("La fecha no es correcta");
    }
    
    return fechaLetras;
  }
  public String obtenerNombreMes(int mes)
  {
    switch(mes)
      {
        case 1:mesFec="Enero";break;
        case 2:mesFec="Febrero";break;
        case 3:mesFec="Marzo";break;
        case 4:mesFec="Abril";break;
        case 5:mesFec="Mayo";break;
        case 6:mesFec="Junio";break;
        case 7:mesFec="Julio";break;
        case 8:mesFec="Agosto";break;
        case 9:mesFec="Setiembre";break;
        case 10:mesFec="Octubre";break;
        case 11:mesFec="Noviembre";break;
        case 12:mesFec="Diciembre";
      }
    return mesFec;
  }
  
  public String ConvertirPeriodoLetras(String periodo){
  String fecMes="",mesFec="";
  fecMes=periodo.substring(4,periodo.length());
    switch(Integer.parseInt(fecMes))
      {
        case 1:mesFec="Ene";break;
        case 2:mesFec="Feb";break;
        case 3:mesFec="Mar";break;
        case 4:mesFec="Abr";break;
        case 5:mesFec="May";break;
        case 6:mesFec="Jun";break;
        case 7:mesFec="Jul";break;
        case 8:mesFec="Ago";break;
        case 9:mesFec="Set";break;
        case 10:mesFec="Oct";break;
        case 11:mesFec="Nov";break;
        case 12:mesFec="Dic";
      }
  return mesFec+"-"+periodo.substring(0,4);
  }
  
  public double formatearNumeroParaOperacion(String numero)
  {
    String nroReturn="";
    if(numero==null)
    numero="0";
    if(numero.equals(""))
    numero="0";
    String nroTemp=numero;
    char temp;
    int cont=0;
    for(int i=0;i<nroTemp.length();i++)
    {
      temp=nroTemp.charAt(i);
      if(!(temp==','))
      nroReturn=nroReturn+String.valueOf(temp);
    }
    return Double.parseDouble(nroReturn.trim());
  }
  public static void main(String args[])
  {
    Formatos f=new Formatos();
    double rpta=f.formatearNumeroParaOperacion("60,771.00");
  }
}