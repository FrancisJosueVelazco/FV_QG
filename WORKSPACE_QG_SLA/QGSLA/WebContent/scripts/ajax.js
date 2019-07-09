/*
* Funciones para la ejecucion de funciones del servidor desde javascript.
*
* @autor Michael Valle
* @fecha 24/08/2007
* @version 1.0
*/

var URL_AJAX_SERVLET = "AjaxServlet";
var SEPARADOR_PARAMETROS = "@@";

// Constructor
function Ajax(){
    this.clase        = '';
    this.metodo       = '';
    this.parametros   = new Array();
    this.tiposDatos   = new Array();
    this.async        = true;
    this.xml          = '';          
    this.text         = '';
    this.callback     = function(){};
    this.thread       = false;
}

function Dto(){
  this.xml  = null;
  this.text = null;
}
/************************************************************************************************
                                  INICIO FUNCIONES PUBLICAS
************************************************************************************************/

/**
* Carga un combo box a partir de una lista que devuelve una clase.
* @param sel Objeto Combo
* @param text Propiedad del DTO q sera mostrado en el option con la propiedad text
* @param valuePropiedad del DTO q sera mostrado en el option con la propiedad value
*/
Ajax.prototype.cargarComboBox = function(sel,text,value){

  var request = getRequest();
  var url = getURL(this) + "&text=" + text + "&value=" + value;
	request.open("GET", url, this.async);
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200){
	      seteaValoresComboBox(sel,request);
		}
	}
  
  request.send(null);

}




Dto.prototype.get = function(propiedad){
  try{
  var messageXML = this.xml.getElementsByTagName(propiedad); 
  if(typeof(messageXML)!='undefined'){
    return messageXML[0].childNodes[0].nodeValue; 
  }else
    return null;
  }catch(e) {
    return null;
  }
}

/**
* Ejecutar un metodo de la clase sin devolver valores.
*/
Ajax.prototype.execute = function(){
  var request = getRequest();
  var url     = getURL(this);
  if(this.thread)
    url = url + "&thread=true";
	request.open("GET", url, this.async);
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200){
      
		}
	}
  
  request.send(null);
}

/**
* Ejecutar un metodo de la clase devolviendo valores.
*/
Ajax.prototype.executeDto = function(){
  var request   = getRequest();
  var fCallback = this.callback;
  var url       = getURL(this) + "&tipo=dto";
	request.open("GET", url, this.async);
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200){
          var dto = null;
          try{
            var item = request.responseXML.getElementsByTagName("item")[0];
            if (item!=null){
              this.xml  = request.responseXML;
              this.text = request.responseText;
              dto = new Dto();
              dto.xml = this.xml;
              dto.text = this.text;
            }
          }catch(e){}
        fCallback(dto);
		}
	}
  
  request.send(null);
}


/************************************************************************************************
                                  INICIO FUNCIONES PRIVADAS
************************************************************************************************/


/*
* Funcion que llena los valores del xml al objeto Select
*/
function seteaValoresComboBox(listBox,request){
	var elementos = request.responseXML.getElementsByTagName("item");
	for(var i=0; i<elementos.length; i++){
       	var elemento = elementos[i];
       	var opcion = document.createElement("option");
        var valor = elemento.getElementsByTagName("value")[0].childNodes[0].nodeValue;
        var texto = elemento.getElementsByTagName("text")[0].childNodes[0].nodeValue;
        opcion.text = texto;
        opcion.value = valor;
        listBox.options.add(opcion);
    }
}

/*
 * Funcion que obtiene el valor de la variable Request
 */
function getRequest(){
	var request;
	if (typeof XMLHttpRequest != "undefined") {
		request = new XMLHttpRequest();
	}else {
		if (window.ActiveXObject) {
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	
	return request;
}

function getURL(obj){
  var arrParametros = "";
  
  for(var i=0; i<obj.parametros.length;i++){
    if(arrParametros=="")
      arrParametros = obj.parametros[i];
    else
      arrParametros = arrParametros + SEPARADOR_PARAMETROS + obj.parametros[i];
  }

  var arrTiposDatos = "";
  
  for(var i=0; i<obj.tiposDatos.length;i++){
    if(arrTiposDatos=="")
      arrTiposDatos = obj.tiposDatos[i];
    else
      arrTiposDatos = arrTiposDatos + SEPARADOR_PARAMETROS + obj.tiposDatos[i];
  }

  return URL_AJAX_SERVLET + "?arrParametros=" + arrParametros + "&arrTiposDatos=" + arrTiposDatos  + "&clase=" + obj.clase + "&metodo=" + obj.metodo;
}
