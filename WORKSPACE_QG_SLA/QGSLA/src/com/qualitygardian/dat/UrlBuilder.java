package com.qualitygardian.dat;

public class UrlBuilder
{
  public UrlBuilder()
  {
  }
  public String armarUrl(String url)
  {
    String urltemp=url;
    String urlArm="";
    char temp;
    int cont=0;
    for(int i=0;i<urltemp.length();i++)
    {
      temp=urltemp.charAt(i);
      if(temp=='?')
      {
        cont=cont+1;
        if(cont>=2)
        temp='&';
      }
      urlArm=urlArm+String.valueOf(temp);
    }
    //System.out.println("***********************");
    //System.out.println("Url a mostrar: "+urlArm);
    return urlArm;
  }
}