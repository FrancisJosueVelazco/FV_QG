$(document).ready(function() {
  
  obtenerInfoPeriodo();
  
  function obtenerInfoPeriodo(){
   
    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("170");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  
    
          fecha_ini= dto.get("fecha_ini"); 
          fecha_fin= dto.get("fecha_fin"); 
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");
          
          $("#numEjec").val(numEjecucion);
          
          $("#fecIni").val(fecha_ini);   
          $("#fecFin").val(fecha_fin);    
          $("#fecExecIni").html(""); 
          $("#fecExecIni").append(fecha_exec_ini); 
          
          $("#fecExecFin").html(""); 
          $("#fecExecFin").append(fecha_exec_fin); 
                   
          $("#avance").html(""); 
          $("#avance").prepend(avance_proc+"%        "); 
        
          if(estado_proceso=="I"){
           $("#estado").html(""); 
           $("#estado").append("En proceso"); 
           $("#avance").append('<img src="images/indicador.gif">');
           $("#btnProcesar") .prop( "disabled", true );
            $("#btnExportar") .prop( "disabled", true );
           $("#verDetalle").removeAttr("disabled").css('opacity',5);
           window.setTimeout(obtenerInfoPeriodo,5000);
          } 
          else if(estado_proceso=="F"){
           $("#estado").html(""); 
           $("#estado").append("Finalizado"); 
           $("#avance").append('<img src="images/check1.gif">'); 
           $("#btnProcesar") .prop( "disabled", false );
            $("#btnExportar") .prop( "disabled", false );
           $("#verDetalle").removeAttr("disabled").css('opacity',5);
          }
          else if(estado_proceso=="E"){
           $("#estado").html(""); 
           $("#estado").append("Error"); 
           $("#avance").append('<img src="images/signOut.gif">'); 
           $("#verDetalle").removeAttr("disabled").css('opacity',5);
           $("#btnProcesar") .prop( "disabled", false );
           $("#btnExportar") .prop( "disabled", true );
          }
    }    
    ajax.executeDto();	
    limpiarCampos();
  }
  
  function limpiarCampos(){
  
     if($("#fecIni").val()==="null"){
        $("#fecIni").val("");
        $("#fecFin").val("");
        $("#fecExecIni").html("");
        $("#fecExecFin").html(""); 
        $("#avance").html(""); 
        $("#estado").html(""); 
        $("#btnProcesar") .prop( "disabled", false );
        $("#btnExportar") .prop( "disabled", true );
        $("#verDetalle").attr('disabled','disabled').css('opacity',0.5);
        alert("No se encontró ningún periodo registrado.");
     }
  }
  
  $("#btnProcesar").click(function(){
  
    var fecIni=$("#fecIni").val();
    var fecFin=$("#fecFin").val();
    if(fecIni=="" || fecFin==""){
      alert("Debe ingresar todos los campos obligatoriamente.");
      return;
    }
    if(validarFecha()=="ok"){
       var resultado= obtenerPeriodoMensaje();
      var r=confirm(resultado);
        if (r==true)
         {	
        $("#fechainicio").val(fecIni);
        $("#fechafin").val(fecFin);
        var url = "OficioSeccionII.do?metodo=generar"; 
        var form = document.frmOficioSeccionII;
        form.action = url;
        form.method="post";         
        form.submit();         
        }
        else {}
      

    }
  });
  
  function obtenerPeriodoMensaje(){
        
       var valor=""; 
       var ajax = new Ajax();
       ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
       ajax.metodo   = "obtenerPeriodoMensaje";    
       ajax.parametros = new Array("0","170");//PARAMETROS QUE US EL METODO DEL FACADE   	
       ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
       ajax.callback   = function(dto){  		
       
        valor= dto.get("valor");                  
       }
        ajax.executeDto();
      return valor;        
    
  }
  
  $("#btnRefrescar").click(function(){  
      if($("#periodo").val()==""){
      alert("Debe ingresar un periodo");
      }
      else{
      obtenerInfoPeriodo();
      }    
  });
  
  $("#verDetalle").click(function(){
   if($("#periodo").val()==""){
      alert("Debe ingresar un periodo");
   }else{
     obtenerDetallePaso();
     $("#info").css("display", "block");
     $("#info").css({
     position: "absolute",
     background: "url(images/bg-transparent.png) repeat",
     border: "1px solid black",
     top: "0",
     left: "0",
     height:"1900px",
     width:"100%"});
  
     $("#close").css({
     background: "url(images/boton_eliminar1.gif)",
     height:"20px",
     width:"20px"
     });
   }
  });
  
  $("#close").click(function(){
    $("#info").hide();
  });
    
  function obtenerDetallePaso(){
        
    var numEjec=$("#numEjec").val();
   
    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPasoETL";    
    ajax.parametros = new Array("10","170",numEjec);//PARAMETROS QUE USA EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
              
              ussrExe=dto.get("ussr_ejec");
              fecha_ini =dto.get("fecha_ini");              
              fecha_fin =dto.get("fecha_fin");
              paso_fec_exec_ini=dto.get("paso_fec_exec_ini");
              paso_fec_exec_fin=dto.get("paso_fec_exec_fin");
              mensaje_error=dto.get("mensaje_error"); 
              avance_proc= dto.get("avance");           
              nomb_paso=dto.get("nombre_paso");
              estad_paso=dto.get("estado_paso"); 
            
              $("#ussrEjec").html("");
              $("#ussrEjec").append(ussrExe);          

              $("#fecIni_paso").html(""); 
              $("#fecIni_paso").append(fecha_ini); 
              
              $("#fecFin_paso").html(""); 
              $("#fecFin_paso").append(fecha_fin);

              $("#fecExecIni_paso").html(""); 
              $("#fecExecIni_paso").append(paso_fec_exec_ini); 
              $("#fecExecFin_paso").html(""); 
              $("#fecExecFin_paso").append(paso_fec_exec_fin); 
              $("#error_paso").html(""); 
              $("#error_paso").append(mensaje_error); 
              $("#avance_paso").html(""); 
              $("#avance_paso").append(avance_proc+"%");  
              if(estad_paso=="F"){
              $("#estado_paso").html(""); 
              $("#estado_paso").append("Finalizado");   
              }else if(estad_paso=="I"){
              $("#estado_paso").html(""); 
              $("#estado_paso").append("En proceso");
              }else if(estad_paso=="E"){
              $("#estado_paso").html(""); 
              $("#estado_paso").append("Error");
              }
              $("#nombre_paso").html(""); 
              $("#nombre_paso").append(nomb_paso);       
    }    
    ajax.executeDto();	
    limpiarLog();  
  }
  
   function limpiarLog(){  
       if($("#fecIni_paso").html()=="null"){
          $("#fecIni_paso").html("");
          $("#ussrEjec").html(""); 
          $("#fecFin_paso").html("");
          $("#fecExecIni_paso").html(""); 
          $("#fecExecFin_paso").html(""); 
          $("#error_paso").html(""); 
          $("#avance_paso").html("");
          $("#estado_paso").html("");
          $("#nombre_paso").html("");
          $("#nomProceso_paso").html("");
          $("#numProceso_paso").html(""); 
          alert("No se encontró ningún registro.");
        }
   }
  
  function validarFecha(){
    
     var d = new Date();
     var anio = d.getFullYear();
     var mes=   d.getMonth()+1 ;
     var dia=   d.getDate();    
    
     var fecIni= $("#fecIni").val().split("/");
     var fecFin= $("#fecFin").val().split("/");      
     var fechaIni=fecIni[2]+fecIni[1]+fecIni[0];
     var fechaFin=fecFin[2]+fecFin[1]+fecFin[0];
     var n1= Number(fechaIni);
     var n2= Number(fechaFin);
	 
	 if(mes>=1 && mes <13){
      mes=0+""+mes;
     }
     if(dia>=1 && dia<10){
      dia=0+""+dia;
     }
	 
     if(n1>=n2){
      alert("La fecha de inicio debe ser menor a la fecha de fin.");   
      return "error";
     } 
     else{
       if(n1>Number(anio+""+mes+""+dia)){
         alert("La fecha de inicio no puede ser mayor a la fecha actual.");
         return "error";
       }
       if(n2>Number(anio+""+mes+""+dia)){
         alert("La fecha de fin no puede ser mayor a la fecha actual.");
         return "error";
       }      
       return "ok";
    }
  }
  
 /*  function validaDiasValidos(){
   
     var fecIni= $("#fecIni").val().split("/");
     var diaInicial=fecIni[0];
     var mesInicial=fecIni[1];
     var fecFin= $("#fecFin").val().split("/"); 
     var diaFinal=fecFin[0];
     var mesFinal=fecFin[1];
     
     if((diaInicial=="01" && diaFinal=="15") || (diaInicial=="16" && diaFinal=="30") || (diaInicial=="16" && diaFinal=="31")){
        if(mesInicial==mesFinal){
          return "ok";
        }
        else{
          alert("Debe elegir: 'Primera o Segunda Quincena del Mes'"); 
          return "error";
        }        
     }
     else{
        if(diaInicial!="01" && diaInicial!="16"){
          alert("Debe elegir: 'Primera o Segunda Quincena del Mes'");       
        }
        if(diaFinal!="15" && diaFinal!="30" && diaFinal!="31"){
          alert("Debe elegir: 'Primera o Segunda Quincena del Mes'");       
        }
        else{
          alert("Debe elegir: 'Primera o Segunda Quincena del Mes'");    
        }        
       return "error";
     }
   
   }*/

  $("#btnExportar").click(function(){
  
    var fecIni=$("#fecIni").val();
    var fecFin=$("#fecFin").val();
    if(fecIni=="" || fecFin==""){
      alert("Debe ingresar todos los campos obligatoriamente.");
      return;
    }
    if(validarFecha()=="ok"){  
       $("#fechainicio").val(fecIni);
       $("#fechafin").val(fecFin);
        
       var url = "OficioSeccionII.do?metodo=exportar"; 
       var form = document.frmOficioSeccionII;
       form.action = url;
       form.method="post";         
       form.submit();   
      
    } 
      
  });
  

});