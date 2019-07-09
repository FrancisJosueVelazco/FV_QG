/*	(!(isNaN(eval("document."+fname+"."+nommes+".value"))) && 
	(!(isNaN(eval("document."+fname+"."+nomdia+".value"))) && 
	(!(IsNaN(eval("document."+fname+"."+nom+".value"))) && 
*/

error=0;
function BorCarEsp(num)
	{
        expreg=/[@_:;<>�!#$%=?��''*\~{}\[\]{\\^`|���]/g;
	this.num=num.replace(expreg,"");
	return this.num;
	}

//Validacion para nombre, direcciones, documentos de identidad
//Parametros: (this.value,this.name,this.form.name)
function LimpiaCar(num,nom,fname)
	{
        num=num.toUpperCase();
        this.num=Trim(num);
	this.num=BorCarEsp(this.num)
	eval("document."+fname+"[nom].value=this.num");
	}
function Trim(num)
	{
	this.num=num.replace(/^\s*/,"");
	this.num=this.num.replace(/\s*$/,"");
	return this.num
        }

//Verifica Montos
//Parametros: (this.value,this.name,this.form.name)
function NumDec(num,nom,fname)
	{
        this.num=Trim(num);
	this.num=BorCarEsp(this.num)
	if(isNaN(this.num))
		{
		alert("Ingrese una cantidad sin utilizar coma (,)");
		eval("document."+fname+"[nom].focus()");
		}
	else
		{
		//this.num=Math.round(this.num*100)/100;
		this.numero=""+(this.num*100)/100;
		//alert(this.numero);
		eval("document."+fname+"[nom].value=this.numero");
		}
	}

//Verifica fechas desde el a�o 
//Parametros:
//CheckDate(this.value,this.name,this.form.name,'nombre del campo dias','nombre del campo meses')
function CheckDate(num,nom,fname,nomdia,nommes)
	{
	date=new Date();
	dias=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	anoref=1900;
	modulo=(num-anoref)%4;
	if(modulo==0)
		{
		dias[1]=29;
		}
	
	if(!((eval("document."+fname+"."+nomdia+".value")<=dias[eval("document."+fname+"."+nommes+".value")-1]) && 
	(eval("document."+fname+"."+nomdia+".value")>0) && 
	(eval("document."+fname+"."+nommes+".value")>0) && 
	(eval("document."+fname+"."+nommes+".value")<13) && 
	(eval("document."+fname+"."+nom+".value")>1900)))
		{
		alert(" verifique la fecha");
		return false;
		}
	}

//Verifica Numero Telefonico y Numeros de Cuenta
function EsNum(num,nom,fname)
	{
        this.num=Trim(num);
	this.num=BorCarEsp(this.num)
	expreg=/[()\-\+\s]/g;
	num1=this.num.replace(expreg,"");
	if(isNaN(num1))
		{
		alert("Ingrese un n�mero v�lido");
		//eval("document."+fname+"[nom].focus()");
		eval("document."+fname+"[nom].value=\"\"");
		eval("document."+fname+"[nom].focus()");
		}
	else
		{
		eval("document."+fname+"[nom].value=this.num");
		}
	}


//Valida Correos Electronicos
//Parametros: (this.value,this.name,this.form.name)

function ValMail(num,nom,fname){

    switch(validamail(num,nom,fname))
     {
       case 0 :
//      document.frmdata.action="actdatos.jsp?asaccion=1"
//      document.frmdata.submit();
        return;
        break;

     /* case 1 :
	alert("....");
  	eval("document."+fname+"."+nom+".focus()");
	error=1;
	return;
	break;*/

      case 2 :
	alert("Mail incorrecto. Por favor verifique.");
  	eval("document."+fname+"."+nom+".focus()");
	error=1;
	return;
	break;

      case 3 :
	alert("Mail incorrecto. No puede existir espacios en blanco.");
  	eval("document."+fname+"."+nom+".focus()");
	error=1;
	return;
	break;

      case 4 :
	alert("Mail incorrecto. Verifique el uso del @.");
  	eval("document."+fname+"."+nom+".focus()");
	error=1;
	return;
	break;

      case 5 :
	alert("Mail incorrecto. No puede haber . despues del @.");
  	eval("document."+fname+"."+nom+".focus()");
	error=1;
	return;
	break;

      case 6 :
	alert("Mail incorrecto. Mail no puede terminar en . ");
  	eval("document."+fname+"."+nom+".focus()");
	error=1;
	return;
	break;
    }
}

function validamail(mail,nom,fname)
{
//verificamos si la cadena enviada no esta vacia
if (mail =="")  {return 1} //Llene su mail.

//Quitamos los espacios en blanco a la derecha y a la izquierda y validamos
//que no haya espacios o caracteres extra�os en blanco dentro de la cadena.

num=mail.length
cadena=""

x=0
inicio= 0 // variable para definir inicio y fin de cadena  0 inicialmente 
	  // 1 cuando comienzan los caracteres, 2 cuando terminan.

for(i=0;i<=num;i++)
	//{ if ((eval("document."+fname+"."+nom+".value.substring(i,i+1)==\" \""))||(eval("document."+fname+"."+nom+".value.substring(i,i+1)==\"\"")))
	{ if ((mail.substring(i,i+1)==" ")||(mail.substring(i,i+1)==""))
	   {x=x+1;
	    if (inicio==1)
		{inicio=2}
	   }
     else
	   {if (inicio!=2)
		{inicio=1;
		 //car=eval("document."+fname+"."+nom+".value.substring(i,i+1)");
		 car=mail.substring(i,i+1);
		 //caracteres especiales
		 if ((car=="�")||(car=="�")||(car=="�")||(car=="�")||
		     (car=="�")||(car=="�")||(car=="�")||(car=="�")||
		     (car=="�")||(car=="�")||(car==",")||(car==";")||
	             (car=="*")||(car=="#")||(car=="%")||(car=="[")||
	             (car==":")||(car=="}")||(car=="{")||(car=="]")||
	             (car=="^")||(car=="$")||(car=="|"))
		 	{return 2} //caracteres no permitidos
		else	
	        	 {cadena=cadena+car}
		 }
	    else
		{return 3} //No puede haber espacios en blanco
	   }
   }

//validamos caracter en blanco
if (num==x) {return 1} //Mail en blanco

//validamos la presencia del @ y del punto despues de �l.

x=0;
pos=0;
pos1=0;
num=cadena.length;

for(i=0;i<=num;i++){
	//if (eval("document."+fname+"."+nom+".value.substring(i,i+1)==\"@\""))
	if (mail.substring(i,i+1)=="@")
		{x=x+1;
		 pos=i+1}
	}
if (x!=1) {return 4} //Verifique el uso del @
else   
     {  x=0;
	if (pos==1) {return 2 } //No puede comenzar con @
       	for (i=pos;i<=num;i++) {
 	//if (eval("document."+fname+"."+nom+".value.substring(i,i+1)==\".\""))
 	if (mail.substring(i,i+1)==".")
	   {x=x+1;
	    pos1=i-pos+1}
	}
       if (x==0) {return 2} //Mail invalido

       if (pos1==1) {return 5} //No puede haber un punto despues de @
       if (num==pos1+pos) {return 6}  //No puede terminar en punto	  	 

     } 	 	 

{return 0}
}

//Valida input en blanco 
//nomb=document.NombreFormulario.NombreInput
//mensaje="mensaje de error"
function blanco(nomb,mensaje){
    if(Trim(nomb.value)==""){
        alert(""+mensaje);
        nomb.focus();
        return false;
    }else{
        return true;
    }
}
function blancoSM(nomb){
    if(Trim(nomb.value)==""){
        return false;
    }else{
        return true;
    }
}
function ValCombo(nomb,mensaje){
    if(Trim(nomb.options[nomb.selectedIndex].value)=="0" || Trim(nomb.options[nomb.selectedIndex].value)=="00" || Trim(nomb.options[nomb.selectedIndex].value)==""){
        alert(""+mensaje);
        nomb.focus();
        return false;
    }else{
        return true;
    }
}
function ValComboSM(nomb){
    if(Trim(nomb.options[nomb.selectedIndex].value)=="0" || Trim(nomb.options[nomb.selectedIndex].value)=="00" || Trim(nomb.options[nomb.selectedIndex].value)==""){
        return false;
    }else{
        return true;
    }
}
function ValRUC(valor,nomb,fname){
if(isNaN(valor) && valor!=""){
        alert("Ingrese correctamente los once(11) d�gitos del RUC de su empresa.");
        aux=eval("document."+fname+"."+nomb);
        aux.value="";
        aux.focus();
        return false;
}else{
        if(valor.length < 11 && valor != ""){
            alert("Ingrese correctamente los once(11) d�gitos del RUC de su empresa.");
            aux=eval("document."+fname+"."+nomb);            
            aux.focus();
        }else{
        return true;
       }
}
}

function ValidaDNI(valor,nomb,fname) {
	if(isNaN(valor) && valor!="") {
        alert("Ingrese correctamente los ocho(8) d�gitos del DNI.");
        aux=eval("document."+fname+"."+nomb);
        aux.value="";
        aux.focus();
        return false;
	}
	else {
        if(valor.length < 8 && valor != "") {
            alert("Ingrese correctamente los ocho(8) d�gitos del DNI.");
            aux=eval("document."+fname+"."+nomb);
            aux.focus();
        }
        else {
	        return true;
	    }
    }
}

function ValidaTelefono(valor,nomb,fname) {
	if(isNaN(valor) && valor!="") {
        alert("Ingrese correctamente los seis(6), siete(7), ocho(8), once(11) o doce(12) d�gitos del tel�fono.");
        aux=eval("document."+fname+"."+nomb);
        aux.value="";
        aux.focus();
        return false;
	}
	else {
        if((valor.length != 6 && valor.length != 7 && valor.length != 8 && valor.length != 11 && valor.length != 12)
        	&& valor != "") {
            alert("Ingrese correctamente los seis(6), siete(7), ocho(8), once(11) o doce(12) d�gitos del tel�fono.");
            aux=eval("document."+fname+"."+nomb);
            aux.focus();
        }
        else {
	        return true;
	    }
    }
}

function esVacio(cad) {
  var i;
  var blanco = " \n\t" + String.fromCharCode(13);
  var es_vacio;
  if((cad == null) || (cad.length == 0))
    return true;
  for(i = 0, es_vacio = true; (i < cad.length) && es_vacio; i++)
    es_vacio = blanco.indexOf(cad.charAt(i)) != - 1;
  return (es_vacio);
}

function daysInFebruary(year) {
  return (((year%4 == 0) && ((!(year%100 == 0)) || (year%400 == 0))) ? 29 : 28);
}

function isDate(year, month, day) {
  var daysInMonth = new Array();
  daysInMonth[1] = 31;
  daysInMonth[2] = 29;
  daysInMonth[3] = 31;
  daysInMonth[4] = 30;
  daysInMonth[5] = 31;
  daysInMonth[6] = 30;
  daysInMonth[7] = 31;
  daysInMonth[8] = 31;
  daysInMonth[9] = 30;
  daysInMonth[10] = 31;
  daysInMonth[11] = 30;
  daysInMonth[12] = 31;
  if(day > daysInMonth[month])
    return false;
  if((month == 2) && (day > daysInFebruary(year)))
    return false;
  return true;
}

function evaluaFecha(objCaja, formato) {
  var er_date;
  var dateValue = objCaja.value;
  if(!esVacio(dateValue)) {
    switch(formato) {
      case "dd/mm/yyyy":
        er_date = /((\d{2})[\/](\d{2})[\/](\d{4}))+$/
        break;
      default:
        er_date = /((\d{2})[\-](\d{2})[\-](\d{4}))+$/
    }
    if(!er_date.test(dateValue)) {
      alert('Campo fecha con formato inv�lido.');
      objCaja.value = "";
	  objCaja.focus();
      return false;
    }
    var intday = parseInt(dateValue.substr(0, 2), 10);
    var intmonth = parseInt(dateValue.substr(3, 2), 10);
    var intyear = parseInt(dateValue.substr(6, 4), 10);
    if((intday > 31) || (intday == 0)) {
      alert("Error en el d�a");
      objCaja.value = "";
	  objCaja.focus();
      return false;
    }
    if((intmonth > 12) || (intmonth == 0)) {
      alert ("Error en el mes");
      objCaja.value = "";
	  objCaja.focus();
      return false;
    }
    if(!isDate(intyear, intmonth, intday)) {
      alert("fecha inv�lida");
      objCaja.value = "";
	  objCaja.focus();
      return false;
    }
    return true;
  }
  else {
    return false;
  }
}

function estaSeleccionado(obj) {
  check = false;
  if(isNaN(obj.length)) {
    check = obj.checked && !obj.disabled;
  }
  else {
    longitud = obj.length;
    for(i = 0; i < longitud; i++) {
      if(obj[i].checked == true && !obj[i].disabled) {
        check = true;
        break;
      }
    }
  }
  return check;
}

function moveUp(element) {
  for(i = 0; i < element.options.length; i++) {
    if(element.options[i].selected == true) {
      if(i != 0) {
        var temp = new Option(element.options[i-1].text,element.options[i-1].value);
        var temp2 = new Option(element.options[i].text,element.options[i].value);
        element.options[i-1] = temp2;
        element.options[i-1].selected = true;
        element.options[i] = temp;
      }
    }
  }
}

function moveDown(element) {
  for(i = (element.options.length - 1); i >= 0; i--) {
    if(element.options[i].selected == true) {
      if(i != (element.options.length - 1)) {
        var temp = new Option(element.options[i+1].text,element.options[i+1].value);
        var temp2 = new Option(element.options[i].text,element.options[i].value);
        element.options[i+1] = temp2;
        element.options[i+1].selected = true;
        element.options[i] = temp;
      }
    }
  }
}

function SelectAllList(control){
	for(var i = 0; i < control.length; i++) {
		control.options[i].selected = true;
	}
}

function esTeclaTextoNumero() {
  var valid = "abcdefghijklm�nopqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ�����1234567890 ";
  var key = String.fromCharCode(event.keyCode);
  if(valid.indexOf("" + key) == "-1")
    return false;
}
function onKeyPressPeriodoFecha(field)
{

 if(event.keyCode>47&& event.keyCode<58 )
 {
 
  if(field.value.length==2)
   {
   field.value=field.value + "/" ;
   }
   if (field.value.length>6)
   event.returnValue=false;
 }
 else
  
  event.returnValue=false;
}
function valPerCob(nom,fname)
{
	var date=new Date();
	var year=date.getYear();  
  var pdev=eval("document."+fname+"[nom].value");
	var tpdev=pdev.length;
	var mesDev=pdev.substring(0,2);
	var anioDev=pdev.substring(3,8);
	var car=pdev.substring(2,3);
  if(parseInt(tpdev)<7)
  {
  }else
  {
    if(parseInt(mesDev)>12)
    {
      alert("Mes Invalido");
      eval("document."+fname+"[nom].focus()");
      eval("document."+fname+"[nom].value=\"\"");
      return;
    }
    if(parseInt(tpdev)<7 && parseInt(tpdev)>1)
    {
      alert("Ingrese fecha completa");
      eval("document."+fname+"[nom].focus()");
      eval("document."+fname+"[nom].value=\"\"");
      return;
    }
    if(car!="/")
    {
      alert("Formato Invalido, debe ser mm/aaaa");
      eval("document."+fname+"[nom].focus()");
      eval("document."+fname+"[nom].value=\"\"");
      return;
    }
    if(anioDev>year || anioDev<1900)
    {
      alert("A�o Invalido")
      eval("document."+fname+"[nom].focus()");
      eval("document."+fname+"[nom].value=\"\"");
      return;
      }
   }
}



function validar(e,modo) { // 1
onKeyPressMayuscula(e);
tecla = (document.all) ? e.keyCode : e.which; // 2
if (tecla==8) return true; // 3
patron = (modo=='letra') ? /[^0-9]/ : /[0-9]/ // 4
te = String.fromCharCode(tecla); // 5
return patron.test(te); // 6

}
function validaPeriodo(value){

	var mesDev=value.substring(0,2);
  var anioDev=value.substring(3,value.length);
 if(parseInt(tpdev)<13){
 return true;
 }
 else return false;
 if(parseInt(anioDev)>1900 ){
  if(parseInt(anioDev)<2050 )
 return true;
 }
return false;
}



function onKeyPressMayuscula(field)
{ 
  var key=event.keyCode;
  var keyChar="";
  keyChar=String.fromCharCode(key)
  keyChar=keyChar.toUpperCase();
  event.keyCode=keyChar.charCodeAt(0);
}

function Reloj()
/*
Autor		: Jose Flores M
Descripci�n	: Devuelve hora actual en formato HH:MM:SS, "Window.setInterval("Hora()",1000)"
*/
{	
	var HoraActual = new Date();
	var HoraString;
	var Hora="";
	var Minutos="";
	var Segundos="";
	Hora+=HoraActual.getHours();
	if (Hora.length==1)
		{
		Hora="0" + Hora;
		}
	Hora+=":";
	Minutos+=HoraActual.getMinutes();
	if (Minutos.length==1)
		{
		Minutos="0" + Minutos;
		}
	Minutos+=":";
	Segundos+=HoraActual.getSeconds();
	if (Segundos.length==1)
		{
		Segundos="0" + Segundos;
		}
	HoraString= Hora+Minutos+Segundos;
	HoraActual=null;

	return HoraString;
}

function completaCerosIzq(x,n) {
/*
Autor		: Jose Flores M
Descripci�n	: Completa con Ceros a la Izquierda a la cadena "x". "n" tama�o de la cadena
*/
    x = x.toString();
    while( x.length < n )
        x = "0"+x;
    return x;
}

function fechaActual() {
/*
Autor		: Jose Flores M
Descripci�n	: Devuelve la fecha actual dd/mm/yyyy 
*/
  var date = new Date();
   //parametros
   var diasf = date.getDate(); //dia sin formato
   var dia = completaCerosIzq(diasf,2);
   var messf = date.getMonth() + 1; //mes sin formato
   mes =  completaCerosIzq(messf,2);
   var anio= date.getFullYear();
   var fecha = dia +"/"+ mes +"/"+ anio;
//alert("fecha: "+fecha);
   return fecha;
}

function validaAlfaNumerico()
{
  var key=event.keyCode;
  var keyChar="";
  keyChar=String.fromCharCode(key)
  keyChar=keyChar.toUpperCase();
  event.keyCode=keyChar.charCodeAt(0);
  var valid = "abcdefghijklmn�opqrstuvwxyzABCDEFGHIJKLMN�OPQRSTUVWXYZ1234567890";
  if(valid.indexOf("" + keyChar) == "-1")
    return false;
}