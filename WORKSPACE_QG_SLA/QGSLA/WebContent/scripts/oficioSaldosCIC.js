$(document).ready(function() {

   obtenerInfoPeriodo();
   obtenerInfoGenArchivo();

   function obtenerInfoPeriodo(){
   
    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("160");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  
    
          fecSaldos= dto.get("fecha_ini"); 
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");

          $("#fecCIC").val(fecSaldos);   
          
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
    //limpiarCampos();
  }
  
    function obtenerInfoGenArchivo(){
   
    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("370");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  
    
          fecSaldos= dto.get("fecha_ini"); 
          fecha_exec_inicial= dto.get("fecha_exec_ini"); 
          fecha_exec_final= dto.get("fecha_exec_fin"); 
          avance_proceso= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");

          $("#fecCIC").val(fecSaldos);   
          
          $("#numEjec").val(numEjecucion);
          
          $("#fecExecInicial").html(""); 
          $("#fecExecInicial").append(fecha_exec_inicial); 
          
          $("#fecExecFinal").html(""); 
          $("#fecExecFinal").append(fecha_exec_final); 
                   
          $("#avanceProceso").html(""); 
          $("#avanceProceso").prepend(avance_proceso+"%        "); 
        
          if(estado_proceso=="I"){
           $("#estadoProceso").html(""); 
           $("#estadoProceso").append("En proceso"); 
           $("#avanceProceso").append('<img src="images/indicador.gif">');
           $("#btnProcesar") .prop( "disabled", true );
           $("#btnExportar") .prop( "disabled", true );
           $("#verDetalleProceso").removeAttr("disabled").css('opacity',5);
           window.setTimeout(obtenerInfoGenArchivo,5000);
          } 
          else if(estado_proceso=="F"){
           $("#estadoProceso").html(""); 
           $("#estadoProceso").append("Finalizado"); 
           $("#avanceProceso").append('<img src="images/check1.gif">'); 
           $("#btnProcesar") .prop( "disabled", false );
           $("#btnExportar") .prop( "disabled", false );
           $("#verDetalleProceso").removeAttr("disabled").css('opacity',5);
          }
          else if(estado_proceso=="E"){
           $("#estadoProceso").html(""); 
           $("#estadoProceso").append("Error"); 
           $("#avanceProceso").append('<img src="images/signOut.gif">'); 
           $("#verDetalleProceso").removeAttr("disabled").css('opacity',5);
           $("#btnProcesar") .prop( "disabled", false );
           $("#btnExportar") .prop( "disabled", true );
          }
    }    
    ajax.executeDto();	
    //limpiarCampos();
  }
  
    function limpiarCampos(){
  
       if($("#fecCIC").val()==="null"){
          $("#fecCIC").val("");
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
  
    var fecCIC=$("#fecCIC").val();
    if(fecCIC==""){
      alert("Debe ingresar todos los campos obligatoriamente.");
      return;
    }else{  
     var resultado= obtenerPeriodoMensaje();
      var r=confirm(resultado);
        if (r==true)
         {	
           $("#fecha").val(fecCIC);
           $("#frmOficioSaldosCIC").submit();  
         }
       else {}  
    }
  });
  
    function obtenerPeriodoMensaje(){
        
       var valor=""; 
       var ajax = new Ajax();
       ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
       ajax.metodo   = "obtenerPeriodoMensaje";    
       ajax.parametros = new Array("0","160");//PARAMETROS QUE US EL METODO DEL FACADE   	
       ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
       ajax.callback   = function(dto){  		
       
        valor= dto.get("valor");                  
       }
        ajax.executeDto();
      return valor;        
    
  }

  $("#verDetalle").click(function(){
   if($("#periodo").val()==""){
      alert("Debe ingresar un periodo");
      }else{
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
        
   // var periodo=$("#periodo").val();
    var numEjec=$("#numEjec").val();
    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPasoETL";    
    ajax.parametros = new Array("10","160",numEjec);//PARAMETROS QUE USA EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
              
              ussrExe=dto.get("ussr_ejec");
              fecha_Saldos= dto.get("fecha_ini");
              paso_fec_exec_ini=dto.get("paso_fec_exec_ini");
              paso_fec_exec_fin=dto.get("paso_fec_exec_fin");
              mensaje_error=dto.get("mensaje_error"); 
              avance_proc= dto.get("avance");           
              nomb_paso=dto.get("nombre_paso");
              estad_paso=dto.get("estado_paso"); 
            
              $("#ussrEjec").html("");
              $("#ussrEjec").append(ussrExe);          

              $("#fecCIC_paso").html(""); 
              $("#fecCIC_paso").append(fecha_Saldos); 

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
  
       if($("#fecCIC_paso").html()=="null"){
          $("#fecCIC_paso").html("");
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
  
  
  $("#btnExportar").click(function(){
  
       /*
       var ajax = new Ajax();
       ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
       ajax.metodo   = "exportarCSVOficioSaldosCIC";    
       ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
       ajax.callback   = function(dto){  		
       
        valor= dto.get("valor"); 
          
          if(valor=="ok"){
           alert("El archivo generado se encuentra en la ruta: \\\\profuturo43\\Oficios_SBS_BeneficiosPROD ");
          } else{
           alert("Ocurrió un error al momento de exportar el archivo. ");
          }
       
        }
        ajax.executeDto();
        */
      /*var form=document.frmOficioSaldosCIC;
      form.action="OficioSaldosCIC.do?metodo=generacionArchivoExcel";
      form.method="post";
      form.submit();
      */
      
      var form=document.frmOficioSaldosCIC;
      var url="";
      url="OficioSaldosCIC.do?metodo=generarExcel";
      form.action=url;
      form.method="post";
      form.submit();
      
  });


});