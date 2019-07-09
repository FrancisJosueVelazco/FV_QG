$(document).ready(function() {
    obtenerPeriodoActivoEnCIR42();
    obtenerPeriodo();
    window.setTimeout(obtenerPeriodo,1000); 
    obtenerInfoGeneracionArchivo();
    
    function obtenerPeriodoActivoEnCIR42(){
    
      var ajax = new Ajax();
      ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
      ajax.metodo   = "obtenerPeriodoActivoCIR42";    
     // ajax.parametros = new Array("140");//PARAMETROS QUE US EL METODO DEL FACADE   	
      ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
      ajax.callback   = function(dto){  	
        
         periodoActivo=dto.get("periodo"); 
         fecInicioActiva=dto.get("fecha_ini");
         fecFinActiva=dto.get("fecha_fin");
         
         $("#period").val(periodoActivo.substring(4,6)+periodoActivo.substring(0,4)); 
        // $("#period").val(periodoActivo); 
         $("#fecIni").val(fecInicioActiva); 
         $("#fecFin").val(fecFinActiva); 
       }
         ajax.executeDto();	
         limpiarCampos();
    }
    
    function obtenerInfoGeneracionArchivo(){
    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("419");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
          periodo = dto.get("periodo");     
          fecha_ini= dto.get("fecha_ini"); 
          fecha_fin= dto.get("fecha_fin"); 
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");
          /*$("#periodo").val(periodo.substring(4,6)+periodo.substring(0,4));  
          $("#fecIni").val(fecha_ini); 
          $("#fecFin").val(fecha_fin); 
          $("#numEjec").val(numEjecucion);*/
          
          $("#fecExecIni1").html(""); 
          $("#fecExecIni1").append(fecha_exec_ini); 
          
          $("#fecExecFin1").html(""); 
          $("#fecExecFin1").append(fecha_exec_fin); 
                   
          $("#avance1").html(""); 
          if(avance_proc!="null")
            $("#avance1").prepend(avance_proc+"%        "); 
        
          if(estado_proceso=="I"){
          $("#estado1").html(""); 
          $("#estado1").append("En proceso"); 
          $("#avance1").append('<img src="images/indicador.gif">');
          $("#btnProcesar") .prop( "disabled", true );
          $("#btnGenerar") .prop( "disabled", true );
          $("#btnExportar") .prop( "disabled", true );
          $("#verDetalle").removeAttr("disabled").css('opacity',5);
          window.setTimeout(obtenerInfoGeneracionArchivo,15000);
          
          } 
          else if(estado_proceso=="F"){
           $("#estado1").html(""); 
           $("#estado1").append("Finalizado"); 
           $("#avance1").append('<img src="images/check1.gif">'); 
           $("#btnProcesar") .prop( "disabled", false );
           $("#btnGenerar") .prop( "disabled", false );
           $("#btnExportar") .prop( "disabled", false );
           $("#verDetalle").removeAttr("disabled").css('opacity',5);

          }
          else if(estado_proceso=="E"){
           $("#estado1").html(""); 
           $("#estado1").append("Error"); 
           $("#avance1").append('<img src="images/signOut.gif">'); 
            $("#verDetalle").removeAttr("disabled").css('opacity',5);
            $("#btnProcesar") .prop( "disabled", false );
            $("#btnGenerar") .prop( "disabled", false );
            $("#btnExportar") .prop( "disabled", false );
          }
    }    
    ajax.executeDto();	
    limpiarCampos();
  
  }
    
    $("#btnGenerar").click(function(){ 
     
         var url = "Oficio7743.do?metodo=generarArchivoTrabajo7743"; 
         var form = document.frmOficioCir7743;
         form.action = url;
         form.method="post";         
         form.submit();   
     
     });

   function obtenerPeriodo(){
    var periodo_in=$("#period").val();
    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodo";    
    ajax.parametros = new Array("140");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  	
   
          //periodo = dto.get("periodo");     
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");
          
          //$("#periodo").val(periodo);  
          
          $("#numEjec").val(numEjecucion);
          
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
          $("#btnGenerar") .prop( "disabled", true );
          $("#btnExportar") .prop( "disabled", true );
          $("#verDetalle").removeAttr("disabled").css('opacity',5);
          window.setTimeout(obtenerPeriodo,5000);
          } 
          else if(estado_proceso=="F"){
           $("#estado").html(""); 
           $("#estado").append("Finalizado"); 
           $("#avance").append('<img src="images/check1.gif">'); 
           $("#btnProcesar") .prop( "disabled", false );
           $("#btnGenerar") .prop( "disabled", false );
           $("#btnExportar") .prop( "disabled", false );
           $("#verDetalle").removeAttr("disabled").css('opacity',5);
          }
          else if(estado_proceso=="E"){
           $("#estado").html(""); 
           $("#estado").append("Error"); 
           $("#avance").append('<img src="images/signOut.gif">'); 
           $("#verDetalle").removeAttr("disabled").css('opacity',5);
           $("#btnProcesar") .prop( "disabled", false );
           $("#btnGenerar") .prop( "disabled", false );
           $("#btnExportar") .prop( "disabled", true );
          }

    }    
    ajax.executeDto();	
    limpiarCampos();
  
  }
  
  function limpiarCampos(){
  
       if($("#period").val()=="null"){
          $("#period").val("");
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
        if($("#fecExecIni").html()=="null"){
          $("#fecExecIni").html("");
          $("#fecExecFin").html(""); 
          $("#avance").html(""); 
          $("#estado").html(""); 
          $("#btnExportar") .prop( "disabled", true );
          $("#verDetalle").attr('disabled','disabled').css('opacity',0.5);
        }
        if($("#estado").html()=="null"){
           $("#estado").html(""); 
        }        
        if($("#avance").html().substring(0,1)=="n"){
           $("#avance").html(""); 
        }
        if($("#avance").html().substring(0,3)=="100"){
           $("#btnExportar") .prop( "disabled", false );
        }
   }
    
  
  $("#btnProcesar").click(function(){
     var periodo=$("#period").val();  
     if(periodo==""){
      alert("Debe haber un periodo activo.");
      return;
     }
     else{
      var resultado= obtenerPeriodoMensaje();
       var r=confirm(resultado);
       if (r==true)
       {	
        $("#periodo").val(periodo);
        var url = "Oficio7743.do?metodo=generarArchivoTrabajo"; 
        var form = document.frmOficioCir7743;
        form.action = url;
        form.method="post";         
        form.submit();  
       }
      else {} 
            
     }
  });
  
  function obtenerPeriodoMensaje(){
        
       var valor=""; 
       var periodo=$("#period").val();
        periodo=periodo.substring(0,4)+periodo.substring(4,6);
       var ajax = new Ajax();
       ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
       ajax.metodo   = "obtenerPeriodoMensaje";    
       ajax.parametros = new Array(periodo,"140");//PARAMETROS QUE US EL METODO DEL FACADE   	
       ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
       ajax.callback   = function(dto){  		
       
        valor= dto.get("valor");                  
       }
        ajax.executeDto();
      return valor;        
    
  }
  
  $("#btnRefrescar").click(function(){
  
      if($("#period").val()==""){
      alert("Debe ingresar un periodo");
      }
      else{
      obtenerPeriodo();
      }    
  }); 
  
  $("#btnExportar").click(function(){  
      if($("#period").val()==""){
      alert("Debe ingresar un periodo");
      }
      else{
      $("#periodo").val($("#period").val());
       var url = "Oficio7743.do?metodo=exportar"; 
       var form = document.frmOficioCir7743;
       form.action = url;
       form.method="post";         
       form.submit();   
      }
  }); 
  
  $("#verDetalle").click(function(){
   if($("#period").val()==""){
      alert("Debe ingresar un periodo");
      }
   else{
     obtenerDetallePaso();
     $("#info").css("display", "block");
     $("#info").css({
       position: "absolute",
       background: "url(images/bg-transparent.png) repeat",
       border: "1px solid black",
       top: "0",
       left: "0",
       height:"1900px",
       width:"100%"
     });
    
     $("#close").css({
       background: "url(images/boton_eliminar1.gif)",
       height:"20px",
       width:"20px"
     });
   }
  });
  
  function obtenerDetallePaso(){
        
    var periodo=$("#period").val();
    periodo= periodo.substring(2,6)+periodo.substring(0,2);
    var numEjec=$("#numEjec").val();
    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPaso";    
    ajax.parametros = new Array(periodo,"140",numEjec);//PARAMETROS QUE USA EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
           
              ussrExec=dto.get("ussr_ejec");
              periodo_detalle = dto.get("periodo");   
              fecha_ini= dto.get("fecha_ini");
              fecha_fin= dto.get("fecha_fin");
              paso_fec_exec_ini=dto.get("paso_fec_exec_ini");
              paso_fec_exec_fin=dto.get("paso_fec_exec_fin");
              mensaje_error=dto.get("mensaje_error"); 
              avance_proc= dto.get("avance");           
              nomb_paso=dto.get("nombre_paso");
              estad_paso=dto.get("estado_paso"); 
            
              $("#ussrEjec").html("");
              $("#ussrEjec").append(ussrExec);          
              $("#periodo_paso").html("");
              $("#periodo_paso").append( periodo_detalle.substring(4,6)+periodo_detalle.substring(0,4));
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
  
       if($("#periodo_paso").html()=="null"){
          $("#periodo_paso").html("");
          $("#ussrEjec").html(""); 
          $("#fecIni_paso").html(""); 
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
  
  $("#close").click(function(){
    $("#info").hide();
  });

});