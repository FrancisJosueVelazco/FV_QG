$(document).ready(function() {

  obtenerAvancePrestaciones();
  obtenerAvanceOtrasAreas();
  
  function obtenerAvancePrestaciones(){

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("406");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
          periodo = dto.get("periodo");     
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");
         
          $("#numEjecPrest").val(numEjecucion);
          
          $("#fecExecIni1").html(""); 
          $("#fecExecIni1").append(fecha_exec_ini); 
          
          $("#fecExecFin1").html(""); 
          $("#fecExecFin1").append(fecha_exec_fin); 
                   
          $("#avance1").html(""); 
          $("#avance1").prepend(avance_proc+"%        "); 
          
          if(estado_proceso=="I"){
            $("#estado1").html(""); 
            $("#estado1").append("En proceso"); 
            $("#avance1").append('<img src="images/indicador.gif">');
            $("#verSeyci").removeAttr("disabled").css('opacity',5);
            window.setTimeout(obtenerAvancePrestaciones,10000);          
          } 
          else if(estado_proceso=="F"){
           $("#estado1").html(""); 
           $("#estado1").append("Finalizado"); 
           $("#avance1").append('<img src="images/check1.gif">'); 
          }
          else if(estado_proceso=="E"){
           $("#estado1").html(""); 
           $("#estado1").append("Error"); 
           $("#avance1").append('<img src="images/signOut.gif">'); 
          }
    }    
    ajax.executeDto();	 
    verAvance();
    limpiarCampos();
    limpiarPrestaciones();
    limpiarOtrasAreas();
  }
  
   function obtenerAvanceOtrasAreas(){

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("407");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		

          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");

          $("#numEjecAreas").val(numEjecucion);
          
          $("#fecExecIni2").html(""); 
          $("#fecExecIni2").append(fecha_exec_ini); 
          
          $("#fecExecFin2").html(""); 
          $("#fecExecFin2").append(fecha_exec_fin); 
                   
          $("#avance2").html(""); 
          $("#avance2").prepend(avance_proc+"%        "); 
        
          if(estado_proceso=="I"){
          $("#estado2").html(""); 
          $("#estado2").append("En proceso"); 
          $("#avance2").append('<img src="images/indicador.gif">');
          window.setTimeout(obtenerAvanceOtrasAreas,10000);
          
          } 
          else if(estado_proceso=="F"){
           $("#estado2").html(""); 
           $("#estado2").append("Finalizado"); 
           $("#avance2").append('<img src="images/check1.gif">'); 
         }
          else if(estado_proceso=="E"){
           $("#estado2").html(""); 
           $("#estado2").append("Error"); 
           $("#avance2").append('<img src="images/signOut.gif">'); 
          }
    }    
    ajax.executeDto();	
    verAvance();
    limpiarCampos();
    limpiarPrestaciones();
    limpiarOtrasAreas();  
  }
  
  function limpiarPrestaciones(){
     if($("#fecExecIni1").val()==="null"){
       $("#fecExecIni1").html(""); 
       $("#fecExecFin1").html(""); 
       $("#avance1").html(""); 
       $("#estado1").html(""); 
     }
  }
  
  function limpiarOtrasAreas(){
     if($("#fecExecIni2").val()==="null"){
       $("#fecExecIni2").html(""); 
       $("#fecExecFin2").html(""); 
       $("#avance2").html(""); 
       $("#estado2").html("");     
     }
  }  
  
  
  function limpiarCampos(){
    
    if($("#periodo").val()==="null"){
       $("#periodo").val("");
       $("#fecExecIni1").html(""); 
       $("#fecExecFin1").html(""); 
       $("#avance1").html(""); 
       $("#estado1").html("");
       $("#fecExecIni2").html(""); 
       $("#fecExecFin2").html(""); 
       $("#avance2").html(""); 
       $("#estado2").html("");
       $("#btnExportar") .prop( "disabled", true );
    }
  
  }
  
  
  function verAvance(){
    
    if($("#estado1").html()=="Finalizado" && $("#estado2").html()=="Finalizado"){
    $("#btnProcesar") .prop( "disabled", false );
    $("#btnExportar") .prop( "disabled", false );
    }
    else if($("#estado1").html()=="En proceso" && $("#estado2").html()=="En proceso"){
    $("#btnProcesar") .prop( "disabled", true );
    $("#btnExportar") .prop( "disabled", true );
    }else if($("#estado1").html()=="En proceso" && $("#estado2").html()=="Error"){
    $("#btnProcesar") .prop( "disabled", true );
    $("#btnExportar") .prop( "disabled", true );
    }else if($("#estado1").html()=="En proceso" && $("#estado2").html()=="Finalizado"){
    $("#btnProcesar") .prop( "disabled", true );
    $("#btnExportar") .prop( "disabled", true );
    }else if($("#estado1").html()=="Finalizado" && $("#estado2").html()=="En proceso"){
    $("#btnProcesar") .prop( "disabled", true );
    $("#btnExportar") .prop( "disabled", true );
    }else if($("#estado1").html()=="Finalizado" && $("#estado2").html()=="Error"){
    $("#btnProcesar") .prop( "disabled", false );
    $("#btnExportar") .prop( "disabled", true );
    }else if($("#estado1").html()=="Error" && $("#estado2").html()=="Finalizado"){
    $("#btnProcesar") .prop( "disabled", false );
    $("#btnExportar") .prop( "disabled", true );
    }else if($("#estado1").html()=="Error" && $("#estado2").html()=="En proceso"){
    $("#btnProcesar") .prop( "disabled", true );
    $("#btnExportar") .prop( "disabled", true );
    }else if($("#estado1").html()=="Error" && $("#estado2").html()=="Error"){
    $("#btnProcesar") .prop( "disabled", false );
    $("#btnExportar") .prop( "disabled", true );
    }
    
    else if($("#estado2").html()=="En proceso" && $("#estado1").html()=="En proceso"){
    $("#btnProcesar") .prop( "disabled", true );
    $("#btnExportar") .prop( "disabled", true );
    }else if($("#estado2").html()=="En proceso" && $("#estado1").html()=="Error"){
    $("#btnProcesar") .prop( "disabled", true );
    $("#btnExportar") .prop( "disabled", true );
    }else if($("#estado2").html()=="En proceso" && $("#estado1").html()=="Finalizado"){
    $("#btnProcesar") .prop( "disabled", true );
    $("#btnExportar") .prop( "disabled", true );
    }else if($("#estado2").html()=="Finalizado" && $("#estado1").html()=="En proceso"){
    $("#btnProcesar") .prop( "disabled", true );
    $("#btnExportar") .prop( "disabled", true );
    }else if($("#estado2").html()=="Finalizado" && $("#estado1").html()=="Error"){
    $("#btnProcesar") .prop( "disabled", false );
    $("#btnExportar") .prop( "disabled", true );
    }else if($("#estado2").html()=="Error" && $("#estado1").html()=="Finalizado"){
    $("#btnProcesar") .prop( "disabled", false );
    $("#btnExportar") .prop( "disabled", true );
    }else if($("#estado2").html()=="Error" && $("#estado1").html()=="En proceso"){
    $("#btnProcesar") .prop( "disabled", true );
    $("#btnExportar") .prop( "disabled", true );
    }else if($("#estado2").html()=="Error" && $("#estado1").html()=="Error"){
    $("#btnProcesar") .prop( "disabled", false );
    $("#btnExportar") .prop( "disabled", true );
    }
  
  }
  
   $("#btnRefrescar").click(function(){
  
      obtenerAvancePrestaciones();
      obtenerAvanceOtrasAreas();

    
  });
  
    $("#btnExportar").click(function(){
    var x='ok';

    if(x=='ok'){ 
      var form=document.frmReporteBuscar;
      var url="";
      url="ReporteSTS.do?metodo=generarCsvSeyci";
      form.action=url;
      form.method="post";
      form.submit();
    }
  });
  
  $("#btnProcesar").click(function(){
        var form=document.frmReporteBuscar;
        var fechainicio = form.fechainicio.value;
        var fechafin = form.fechafin.value;
        
        if (fechainicio=='' || fechafin=='') {
          alert("Los campos fechas son obligatorios");
          return;
        }
        if(!evaluaFecha(form.fechainicio,'dd/mm/yyyy')){
          return;
        }
        if(!evaluaFecha(form.fechafin,'dd/mm/yyyy')){
          return;
        }
        
        $("#frmReporteBuscar").submit(); 
   
});

function fncExportarExcel(){

   var form=document.frmReporteBuscar;
   var v_nombre = "Oficio_53889_2011";
   var form = document.forms(0);
   form.action='<%=request.getContextPath()%>/reporte/visorReporteOficio53889.jsp?filejasper="+v_nombre+".jasper"'
   form.target = "ventanaReporte";
   form.method="post";
   form.submit();

}

function obtenerPeriodoMensaje(){
        
       var valor=""; 
       var periodo=$("#periodo").val();
        periodo= periodo.substring(2,6)+periodo.substring(0,2);
       var ajax = new Ajax();
       ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
       ajax.metodo   = "obtenerPeriodoMensaje";    
       ajax.parametros = new Array(periodo,"120");//PARAMETROS QUE US EL METODO DEL FACADE   	
       ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
       ajax.callback   = function(dto){  		
       
        valor= dto.get("valor");                  
       }
        ajax.executeDto();
      return valor;        
    
  }

function  obtenerAvance(){
      var ajax = new Ajax();
      var estado=0;
      ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
      ajax.metodo   = "obtenerPeriodoETL";    
      ajax.parametros = new Array("150");//PARAMETROS QUE US EL METODO DEL FACADE   	
      ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
      ajax.callback   = function(dto){
      estado_proceso= dto.get("estado_proceso"); 
       if(estado_proceso=="F"){
        estado=1;
       }    
       }
      ajax.executeDto();	
      return estado;
     }
     
     
  $("#periodo").on('keydown', function(ev) { 

    if (ev.which == 13 || ev.keyCode == 13) {
     $("#periodo").blur();  
    } 
  });
  
 $("#periodo").blur(function( event){    
     if($("#periodo").val().length===0){
     $("#fecFin").val("");
     }else{
      validarPeriodo();
     }    
  });
  
  function validarPeriodo(){
    var d = new Date();
    var anio = d.getFullYear();
    var mes=   d.getMonth()+1 ;
    var dia=   d.getDate();  
    var periodo=$("#periodo").val();
    periodo= periodo.substring(2,6)+periodo.substring(0,2);
    periodo=periodo.replace(/^\s*|\s*$/g,"");
    if(periodo.length!=6){
      alert("El periodo debe tener 6 dígitos");
      return "error";
    }else{
      if(isNaN(periodo)){
      alert("Debe ingresar solamente caracteres numéricos.");
       return "error";
      }else{
          if(periodo.substring(4,6)<13 && periodo.substring(4,6)>0 ){
              if(Number(periodo.substring(0,4))>Number(anio)){
                alert("El periodo no puede ser mayor al año actual.");    
                return "error";
              }
              if(Number(periodo.substring(0,4))==Number(anio)){
                if(Number(periodo.substring(4,6))>Number(mes)){ 
                  alert("El periodo no puede ser mayor al mes actual.");
                  return "error";
                }
              }  
              return "ok";
          }else{
         alert("Debe ingresar un periodo correcto.");
          return "error";
        }
      }
    }
  }

  $("#verSeyci").click(function(){

     obtenerDetallePasoPrestaciones();
     $("#infoPrestaciones").css("display", "block");
     $("#infoPrestaciones").css({
       position: "absolute",
       background: "url(images/bg-transparent.png) repeat",
       border: "1px solid black",
       top: "0",
       left: "0",
       height:"1900px",
       width:"100%"
     });
    
     $("#closePrestaciones").css({
       background: "url(images/boton_eliminar1.gif)",
       height:"20px",
       width:"20px"
     });

  });
  
  $("#closePrestaciones").click(function(){
    $("#infoPrestaciones").hide();
  });


 $("#verOtrasAreas").click(function(){
   if($("#periodo").val()==""){
      alert("Debe ingresar un periodo");
      }
   else{
     obtenerDetallePasoAreas();
     $("#infoAreas").css("display", "block");
     $("#infoAreas").css({
       position: "absolute",
       background: "url(images/bg-transparent.png) repeat",
       border: "1px solid black",
       top: "0",
       left: "0",
       height:"1900px",
       width:"100%"
     });
    
     $("#closeAreas").css({
       background: "url(images/boton_eliminar1.gif)",
       height:"20px",
       width:"20px"
     });
   }
  });

  $("#closeAreas").click(function(){
    $("#infoAreas").hide();
  });
  
  
  function obtenerDetallePasoPrestaciones(){

    var periodo=$("#periodo").val();
    periodo= periodo.substring(2,6)+periodo.substring(0,2);
    var numEjec=$("#numEjecPrest").val();
    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPasoETL";    
    ajax.parametros = new Array(periodo,"406",numEjec);//PARAMETROS QUE USA EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
              
              ussrExe=dto.get("ussr_ejec");
              periodo_detalle = dto.get("periodo");   
              fecha_ini= dto.get("fecha_ini");
              fecha_fin= dto.get("fecha_fin");
              paso_fec_exec_ini=dto.get("paso_fec_exec_ini");
              paso_fec_exec_fin=dto.get("paso_fec_exec_fin");
              mensaje_error=dto.get("mensaje_error"); 
              avance_proc= dto.get("avance");           
              nomb_paso=dto.get("nombre_paso");
              estad_paso=dto.get("estado_paso"); 
            
              $("#ussrEjec_Prest").html("");
              $("#ussrEjec_Prest").append(ussrExe);          
              $("#periodo_paso_Prest").html("");
              $("#periodo_paso_Prest").append(periodo_detalle.substring(4,6)+periodo_detalle.substring(0,4));
              $("#fecIni_paso_Prest").html(""); 
              $("#fecIni_paso_Prest").append(fecha_ini); 
              $("#fecFin_paso_Prest").html(""); 
              $("#fecFin_paso_Prest").append(fecha_fin);
              $("#fecExecIni_paso_Prest").html(""); 
              $("#fecExecIni_paso_Prest").append(paso_fec_exec_ini); 
              $("#fecExecFin_paso_Prest").html(""); 
              $("#fecExecFin_paso_Prest").append(paso_fec_exec_fin); 
              $("#error_paso_Prest").html(""); 
              $("#error_paso_Prest").append(mensaje_error); 
              $("#avance_paso_Prest").html(""); 
              $("#avance_paso_Prest").append(avance_proc+"%");  
              if(estad_paso=="F"){
              $("#estado_paso_Prest").html(""); 
              $("#estado_paso_Prest").append("Finalizado");   
              }else if(estad_paso=="I"){
              $("#estado_paso_Prest").html(""); 
              $("#estado_paso_Prest").append("En proceso");
              }else if(estad_paso=="E"){
              $("#estado_paso_Prest").html(""); 
              $("#estado_paso_Prest").append("Error");
              }
              $("#nombre_paso_Prest").html(""); 
              $("#nombre_paso_Prest").append(nomb_paso); 
               
    }    
    ajax.executeDto();	
    limpiarLogPrestaciones();  
  }
  
  function limpiarLogPrestaciones(){
  
       if($("#periodo_paso_Prest").html()=="null"){
          $("#periodo_paso_Prest").html("");
          $("#ussrEjec_Prest").html(""); 
          $("#fecIni_paso_Prest").html(""); 
          $("#fecFin_paso_Prest").html("");
          $("#fecExecIni_paso_Prest").html(""); 
          $("#fecExecFin_paso_Prest").html(""); 
          $("#error_paso_Prest").html(""); 
          $("#avance_paso_Prest").html("");
          $("#estado_paso_Prest").html("");
          $("#nombre_paso_Prest").html("");
          $("#nomProceso_paso_Prest").html("");
          $("#numProceso_paso_Prest").html("");          
          alert("No se encontró ningún registro.");
       }
   }
  
  function obtenerDetallePasoAreas(){
    var periodo=$("#periodo").val();
     periodo= periodo.substring(2,6)+periodo.substring(0,2);
    var numEjec=$("#numEjecAreas").val();
    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPasoETL";    
    ajax.parametros = new Array(periodo,"130",numEjec);//PARAMETROS QUE USA EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
              
              ussrExe=dto.get("ussr_ejec");
              periodo_detalle = dto.get("periodo");   
              fecha_ini= dto.get("fecha_ini");
              fecha_fin= dto.get("fecha_fin");
              paso_fec_exec_ini=dto.get("paso_fec_exec_ini");
              paso_fec_exec_fin=dto.get("paso_fec_exec_fin");
              mensaje_error=dto.get("mensaje_error"); 
              avance_proc= dto.get("avance");           
              nomb_paso=dto.get("nombre_paso");
              estad_paso=dto.get("estado_paso"); 
            
              $("#ussrEjec_Areas").html("");
              $("#ussrEjec_Areas").append(ussrExe);          
              $("#periodo_paso_Areas").html("");
              $("#periodo_paso_Areas").append(periodo_detalle.substring(4,6)+periodo_detalle.substring(0,4));
              $("#fecIni_paso_Areas").html(""); 
              $("#fecIni_paso_Areas").append(fecha_ini); 
              $("#fecFin_paso_Areas").html(""); 
              $("#fecFin_paso_Areas").append(fecha_fin);
              $("#fecExecIni_paso_Areas").html(""); 
              $("#fecExecIni_paso_Areas").append(paso_fec_exec_ini); 
              $("#fecExecFin_paso_Areas").html(""); 
              $("#fecExecFin_paso_Areas").append(paso_fec_exec_fin); 
              $("#error_paso_Areas").html(""); 
              $("#error_paso_Areas").append(mensaje_error); 
              $("#avance_paso_Areas").html(""); 
              $("#avance_paso_Areas").append(avance_proc+"%");  
              if(estad_paso=="F"){
              $("#estado_paso_Areas").html(""); 
              $("#estado_paso_Areas").append("Finalizado");   
              }else if(estad_paso=="I"){
              $("#estado_paso_Areas").html(""); 
              $("#estado_paso_Areas").append("En proceso");
              }else if(estad_paso=="E"){
              $("#estado_paso_Areas").html(""); 
              $("#estado_paso_Areas").append("Error");
              }
              $("#nombre_paso_Areas").html(""); 
              $("#nombre_paso_Areas").append(nomb_paso); 
               
    }    
    ajax.executeDto();	
    limpiarLogOtrasAreas();  
  }
  
  function limpiarLogOtrasAreas(){
  
       if($("#periodo_paso_Areas").html()=="null"){
          $("#periodo_paso_Areas").html("");
          $("#ussrEjec_Areas").html(""); 
          $("#fecIni_paso_Areas").html(""); 
          $("#fecFin_paso_Areas").html("");
          $("#fecExecIni_paso_Areas").html(""); 
          $("#fecExecFin_paso_Areas").html(""); 
          $("#error_paso_Areas").html(""); 
          $("#avance_paso_Areas").html("");
          $("#estado_paso_Areas").html("");
          $("#nombre_paso_Areas").html("");
          $("#nomProceso_paso_Areas").html("");
          $("#numProceso_paso_Areas").html("");          
          alert("No se encontró ningún registro.");
          }
   }  

});