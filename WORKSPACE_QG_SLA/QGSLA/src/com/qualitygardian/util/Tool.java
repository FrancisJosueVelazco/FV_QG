
package com.qualitygardian.util;
import java.io.*;
import java.sql.*;
import java.text.*;
import java.util.*;
import java.util.Date;


public class Tool
{

    public Tool()
    {
    }


    public static int parseInt(String val)
    {
        try
        {
            if(val != null && !val.equals(""))
            {
                int i = Integer.parseInt(val);
                int l = i;
                return l;
            } else
            {
                int j = 0;
                int i1 = j;
                return i1;
            }
        }
        catch(Exception e)
        {
            System.out.println("ERROR comnvirtiendo:" + val + " a int ERROR=" + e);
        }
        int k = 0;
        return k;
    }

    public static double parseDouble(String val)
    {
        try
        {
            if(val != null && !val.equals(""))
            {
                double i = Double.parseDouble(val);
                double d1 = i;
                return d1;
            } else
            {
                int j = 0;
                double d = j;
                return d;
            }
        }
        catch(Exception e)
        {
            System.out.println("ERROR comnvirtiendo:" + val + " a int ERROR=" + e);
        }
        int k = 0;
        return (double)k;
    }

    public static String getString(String val)
    {
        if(val != null && !val.equals(""))
            return val.trim();
        else
            return "";
    }




    public static double parseDecimal(double val, int numdecimal)
    {
        try
        {
            NumberFormat nf = NumberFormat.getInstance();
            nf.setMinimumFractionDigits(numdecimal);
            nf.setMaximumFractionDigits(numdecimal);
            if(val != (double)0)
            {
                double i = Double.parseDouble(nf.format(val));
                double d1 = i;
                return d1;
            } else
            {
                int j = 0;
                double d = j;
                return d;
            }
        }
        catch(Exception e)
        {
            System.out.println("ERROR comnvirtiendo:" + val + " a int ERROR=" + e);
        }
        int k = 0;
        return (double)k;
    }

    public static String toDecimal(double val, int numdecimal)
    {
        try
        {
            NumberFormat nf = NumberFormat.getInstance(Locale.US);
            nf.setMinimumFractionDigits(numdecimal);
            nf.setMaximumFractionDigits(numdecimal);
            if(val != (double)0)
            {
                String s = nf.format(val);
                return s;
            } else
            {
                String s1 = "0";
                return s1;
            }
        }
        catch(Exception e)
        {
            System.out.println("ERROR comnvirtiendo:" + val + " a int ERROR=" + e);
        }
        String s2 = "0";
        return s2;
    }

    public  boolean isNotNull(String val)
    {
        return val != null && !val.equals("");
    }

    public static String dateFormat(String fecha,String inFormat,String outFormat)
    {
        try
        {
            SimpleDateFormat input = new SimpleDateFormat(inFormat);
            SimpleDateFormat output = new SimpleDateFormat(outFormat);
            java.sql.Date df = new  java.sql.Date(input.parse(fecha).getTime());  
            String dato = output.format(df);
            return dato;
        }
        catch(Exception e)
        {
            System.out.println("Error dateFormat:" + e);
            return null;
        }        
        
    }
    
    
    public static String DayOfWeek(String fecha,String format)
    {
        try
        {
            SimpleDateFormat input = new SimpleDateFormat(format);
            java.util.Date df = new  java.util.Date(input.parse(fecha).getTime());  
            Calendar c=Calendar.getInstance();
            String dia="";
            c.setTime(df);
              switch(c.get(Calendar.DAY_OF_WEEK)){
               case 1 :dia="Domingo"; break;
               case 2 :dia="Lunes"; break;
               case 3 :dia="Martes"; break;
               case 4 :dia="Miércoles"; break;
               case 5 :dia="Jueves"; break;
               case 6 :dia="Viernes"; break;
               case 7 :dia="Sábado"; break;
  
  }

            return dia;
        }
        catch(Exception e)
        {
            System.out.println("Error dateFormat:" + e);
            return null;
        }        
        
    }    

    public  static String getDate(String formato)
    {
        try
        {
            DateFormat formatter = null;
            formatter = new SimpleDateFormat(formato);
            String dato = formatter.format(new java.util.Date());
            String s1 = dato;
            return s1;
        }
        catch(Exception e)
        {
            System.out.println("Error getdate:" + e);
        }
        String s = null;
        return s;
    }


    public  static String getToday()
    {
      try
      {
          DateFormat formatter = null;
          formatter = new SimpleDateFormat("dd/MM/yyyy");
          String dato = formatter.format(new java.util.Date());
          String s1 = dato;
          return s1;
      }
      catch(Exception e)
      {
          System.out.println("Error getdate:" + e);
      }
      String s = null;
      return s;
    }


    public static  String addDate(int num,String formato) 
    {
        try
        {
            DateFormat formatter = null;
            formatter=new SimpleDateFormat(formato);            
            Calendar c1 = Calendar.getInstance();
            c1.setTime(new java.util.Date());
            c1.add(Calendar.DATE, num); 
            String dato=formatter.format(c1.getTime());
             return dato;
        }
        catch(Exception e)
        {
            System.out.println("Error getdate:" + e);
            return null;
        }

    }
    
        public static  String addDay(int num,String fecha) 
    {
        try
        {
            DateFormat formatter = null;
            DateFormat formatter2 = null;
            formatter2=new SimpleDateFormat("dd/MM");
            formatter=new SimpleDateFormat("dd/MM/yyyy");  
            java.util.Date dia=formatter.parse(fecha);
            Calendar c1 = Calendar.getInstance();
            c1.setTime(dia);
            c1.add(Calendar.DATE, num); 
            String dato=formatter2.format(c1.getTime());
             return dato;
        }
        catch(Exception e)
        {
            System.out.println("Error getdate:" + e);
            return null;
        }

    }
    
        public static  String addDay(int num,String fecha,String format) 
    {
        try
        {
            DateFormat formatter = null;
            DateFormat formatter2 = null;
            formatter2=new SimpleDateFormat(format);
            formatter=new SimpleDateFormat("dd/MM/yyyy");  
            java.util.Date dia=formatter.parse(fecha);
            Calendar c1 = Calendar.getInstance();
            c1.setTime(dia);
            c1.add(Calendar.DATE, num); 
            String dato=formatter2.format(c1.getTime());
             return dato;
        }
        catch(Exception e)
        {
            System.out.println("Error getdate:" + e);
            return null;
        }

    }    

   public static String getHoraFormateado(int auxminutos) 
    {
    
    int horas=0;
    int minutos=0;
    String shoras="";
    String sminutos="";
    String ssigno="";
  
  if(auxminutos<0) { ssigno="-"; auxminutos=auxminutos*-1;}
 
    horas=(int)auxminutos/60;
    minutos=(int)(auxminutos%60);
        
    if (horas<10) shoras="0"+String.valueOf(horas);
    else shoras=String.valueOf(horas);
    if (minutos<10) sminutos="0"+String.valueOf(minutos);
    else sminutos=String.valueOf(minutos);
    
    return ssigno+shoras+":"+sminutos;

    }



   public static String getHoraFormateado(String auxhora) 
    {
    
    int horas=0;
    int minutos=0;
    String shoras="";
    String sminutos="";
    String ssigno="";
    int iseparador1=1;
    int iseparador2=1;
    String sHora="";

if(auxhora==null)
{sHora =  "00:00";}
else {

    if(!auxhora.trim().equals("-")){
        iseparador1=auxhora.indexOf("-");
        if (iseparador1>0) 
        ssigno=auxhora.substring(1,iseparador1);
        else iseparador1=0;
        shoras=auxhora.substring(iseparador1);
         
        iseparador2=auxhora.indexOf(":");
      if (iseparador2>0) 
     {    
        shoras=shoras.substring(iseparador1,iseparador2);
        sminutos=auxhora.substring(iseparador2+1);
    
      if(shoras.length()<2) shoras="0"+shoras;
      if(sminutos.length()<2) sminutos="0"+sminutos;
       sHora=ssigno+shoras+":"+sminutos;
    }
    else
    {
    sHora="00:00";
    
    }
    
       
       
    }



} 
 return sHora;
    }

public static String getHoraDefault(String sHora){
 String resultado="00:00";
 if (sHora!=null) {
   if(sHora.indexOf("-")>=0) {resultado="00:00"; }
   else {
       
        resultado=Tool.getHoraFormateado(sHora);
    }
   }
  else {resultado= "-"; }
  return resultado;
} 

     public static String getSystemHora() 
    {
    int hora;
    int minuto;
    int segundo;
    int ampm;
    String shora;
    String sMinuto;
    String sSegundo;
    String sAMPM;
   Calendar c=Calendar.getInstance();
   hora=c.get(Calendar.HOUR_OF_DAY);
   minuto=c.get(Calendar.MINUTE);
   segundo=c.get(Calendar.SECOND);
   ampm=          c.get(Calendar.AM_PM);
   if (ampm==1) sAMPM="pm"; else sAMPM="am";
   if (hora<10) shora="0"+String.valueOf(hora); else shora=String.valueOf(hora);
   if (minuto<10) sMinuto="0"+String.valueOf(minuto); else sMinuto=String.valueOf(minuto);
   if (segundo<10) sSegundo="0"+String.valueOf(segundo); else sSegundo=String.valueOf(segundo);
   
   return shora+":"+sMinuto+":"+sSegundo+" "+sAMPM;
    } 

public static String formatoLocal(double x){
    return(formato(x,"###,###,###.00",',','.'));
  }
  public static String formatoLocal2(double x){
    return(formato(x,"#########.000",',','.'));
  }
  public static String formatoLocalI(int x){
    return(formatoI(x,"#########",','));
  }
  public static String formato (double x, String fmt, char sepMiles, char sepDecimales){
    Locale locale = new Locale ("en", "US");
    DecimalFormatSymbols simbolos = new DecimalFormatSymbols (locale);
    simbolos.setGroupingSeparator (sepMiles);
    simbolos.setDecimalSeparator (sepDecimales);
    return new DecimalFormat(fmt, simbolos).format (x);
  }
  public static String formatoI (int x, String fmt, char sepMiles){
    Locale locale = new Locale ("en", "US");
    DecimalFormatSymbols simbolos = new DecimalFormatSymbols (locale);
    simbolos.setGroupingSeparator (sepMiles);
    return new DecimalFormat(fmt, simbolos).format (x);
  }
  
  public static double convertFloatToDouble(float x){
    return (new Double(String.valueOf(x)).doubleValue());
  }
  public static double convertStringToDouble(String x){
    return (new Double(x).doubleValue());
  }
  public static int convertStringToInt(String x){
    return (new Integer(x).intValue());
  }
     
 public static String getIniWeek(){
  SimpleDateFormat sdf=new SimpleDateFormat("dd/MM/yyyy");
  Date fecha=new Date();
  Calendar c=Calendar.getInstance();
  c.setTime(fecha);
//  c.add(Calendar.DATE,6);

  switch(c.get(Calendar.DAY_OF_WEEK)){
  case 1 :c.add(Calendar.DAY_OF_YEAR,-6); break;
   case 2 :c.add(Calendar.DAY_OF_YEAR,-7); break;
   case 3 :c.add(Calendar.DAY_OF_YEAR,-8); break;
   case 4 :c.add(Calendar.DAY_OF_YEAR,-9); break;
   case 5 :c.add(Calendar.DAY_OF_YEAR,-10); break;
   case 6 :c.add(Calendar.DAY_OF_YEAR,-11); break;
   case 7 :c.add(Calendar.DAY_OF_YEAR,-12); break;
  
  }
  
  return String.valueOf(sdf.format(c.getTime()));
 
}


 public static String getIniMonth(){
  SimpleDateFormat sdf=new SimpleDateFormat("dd/MM/yyyy");
  Date fecha=new Date();
  Calendar c=Calendar.getInstance();
  c.setTime(fecha);
  c.set(Calendar.DATE,c.getActualMinimum(Calendar.DATE));
  return String.valueOf(sdf.format(c.getTime()));
}

 public static String getFinMonth(){
  SimpleDateFormat sdf=new SimpleDateFormat("dd/MM/yyyy");
  Date fecha=new Date();
  Calendar c=Calendar.getInstance();
  c.setTime(fecha);
  c.set(Calendar.DATE,c.getActualMaximum(Calendar.DATE));
  return String.valueOf(sdf.format(c.getTime()));
}

 
  public static String getFinWeek(){
    SimpleDateFormat sdf=new SimpleDateFormat("dd/MM/yyyy");
    Date fecha=new Date();
    Calendar c=Calendar.getInstance();
    c.setTime(fecha);
   // c.add(Calendar.DAY_OF_YEAR,+1);
  
    switch(c.get(Calendar.DAY_OF_WEEK)){
     case 1 :c.add(Calendar.DAY_OF_YEAR,-0); break;
     case 2 :c.add(Calendar.DAY_OF_YEAR,-1); break;
     case 3 :c.add(Calendar.DAY_OF_YEAR,-2); break;
     case 4 :c.add(Calendar.DAY_OF_YEAR,-3); break;
     case 5 :c.add(Calendar.DAY_OF_YEAR,-4); break;
     case 6 :c.add(Calendar.DAY_OF_YEAR,-5); break;
     case 7 :c.add(Calendar.DAY_OF_YEAR,-6); break;
    
    }
      return String.valueOf(sdf.format(c.getTime()));
  }

    public  static String getFormatoClasico(String date)
    {
        try
        {
            //date: debe tener el el formato: DD/MM/YYYY 
            //devuelve: YYYYMMDD
            String s1 = date.substring(0,2);
            String s2 = date.substring(3,5);
            String s3 = date.substring(6);
            String sf = s3+s2+s1;
            return sf;
        }
        catch(Exception e)
        {
            System.out.println("Error getdate:" + e);
        }
        String s = "";
        return s;
    }


}