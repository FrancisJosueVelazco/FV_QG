$(document).ready(function() {
 
  obtenerInfoPeriodo();
  obtenerInfoAA();
  obtenerInfoLCUniverso();
  obtenerInfoLCAFPA1();
  obtenerInfoLCAFPA2();
  
 
   $("#irCargaArchivo").click(function(){
      var form=document.frmOficioCir42;
      var url = "OficioLicitacionConjunta.do?metodo=inicioUpload"; 
      var form = document.forms(0);
      form.action = url;
      form.method="post";
      form.submit();
  });
  
   $("#irComplemen").click(function(){
      var form=document.frmOficioCir42;
      var url = "OficioLicitacionConjunta.do?metodo=inicioComplemenAFP"; 
      var form = document.forms(0);
      form.action = url;
      form.method="post";
      form.submit();
  });
  function limpiarCampos(){
  
       if($("#periodo").val()==="null"){
          $("#periodo").val("");
          $("#fecIni").val("01/11/2003"); 
          $("#fecFin").val(""); 
          $("#fecExecIni").html("");
          $("#fecExecFin").html(""); 
          $("#avance").html(""); 
          $("#estado").html(""); 
           $("#btnProcesar") .prop( "disabled", false );
           $("#verDetalle").attr('disabled','disabled').css('opacity',0.5);
          alert("No se encontró ningún periodo registrado.");
          }
  }
  
  function obtenerInfoPeriodo(){

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETLLC";    
    ajax.parametros = new Array("300");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
          periodo = dto.get("periodo");  
      
          fecha_ini= dto.get("fecha_ini"); 
          fecha_fin= dto.get("fecha_fin");       
          fecha_proceso= dto.get("fecha_proceso"); 
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");

          if(estado_proceso!="null")
          {
            $("#fecIni").val(fecha_ini); 
            $("#periodo").val(periodo); 
            $("#fecFin").val(fecha_fin); 
             $("#fecPeriodo").val(fecha_proceso);
            $("#numEjec").val(numEjecucion);
            $("#fecExecIni").html(""); 
            $("#fecExecIni").append(fecha_exec_ini); 
            $("#fecExecFin").html(""); 
            $("#fecExecFin").append(fecha_exec_fin); 
            $("#avance").html(""); 
            if(avance_proc!="null")
              $("#avance").prepend(avance_proc+"%        "); 
    
            if(estado_proceso=="I"){
            $("#estado").html(""); 
            $("#estado").append("En proceso"); 
            $("#avance").append('<img src="images/indicador.gif">');
            $("#btnProcesar") .prop( "disabled", true );
            $("#btnExportar") .prop( "disabled", true );
            $("#verDetalle").removeAttr("disabled").css('opacity',5);
            window.setTimeout(obtenerInfoPeriodo,15000);
            
            } 
            else if(estado_proceso=="F"){
             $("#estado").html(""); 
             $("#estado").append("Finalizado"); 
             $("#avance").append('<img src="images/check1.gif">'); 
             $("#btnProcesar") .prop( "disabled", false );
             $("#btnExportar") .prop( "disabled", false );
             $("#verDetalle").removeAttr("disabled").css('opacity',5);
             alert("El proceso concluyo Satisfactoriamente!!! Generar Archivo de Trabajo ");
            }
            else if(estado_proceso=="E"){
             $("#estado").html(""); 
             $("#estado").append("Error"); 
             $("#avance").append('<img src="images/signOut.gif">'); 
             $("#verDetalle").removeAttr("disabled").css('opacity',5);
             $("#btnProcesar") .prop( "disabled", false );
             $("#btnExportar") .prop( "disabled", false );
            }
          }
    }    
    ajax.executeDto();	
    //limpiarCampos();
  
  }
  
  function obtenerInfoAA(){

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("411");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");

          if(estado_proceso!="null")
          {
            $("#fecIni").val(fecha_ini); 
            $("#fecFin").val(fecha_fin); 
            $("#fecPeriodo").val(fecha_proceso);
            $("#numEjec").val(numEjecucion);
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
            $("#btnExportar") .prop( "disabled", true );
            $("#verDetalle").removeAttr("disabled").css('opacity',5);
            window.setTimeout(obtenerInfoAA,15000);
            
            } 
            else if(estado_proceso=="F"){
             $("#estado1").html(""); 
             $("#estado1").append("Finalizado"); 
             $("#avance1").append('<img src="images/check1.gif">'); 
             $("#btnProcesar") .prop( "disabled", false );
             $("#btnExportar") .prop( "disabled", false );
             $("#verDetalle").removeAttr("disabled").css('opacity',5);
            }
            else if(estado_proceso=="E"){
             $("#estado1").html(""); 
             $("#estado1").append("Error"); 
             $("#avance1").append('<img src="images/signOut.gif">'); 
             $("#verDetalle").removeAttr("disabled").css('opacity',5);
             $("#btnProcesar") .prop( "disabled", false );
             $("#btnExportar") .prop( "disabled", false );
            }
          }
    }    
    ajax.executeDto();	
  }
  
    function obtenerInfoLCUniverso(){

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("412");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");

          if(estado_proceso!="null")
          {
            $("#fecIni").val(fecha_ini); 
            $("#fecFin").val(fecha_fin); 
            $("#fecPeriodo").val(fecha_proceso);
            $("#numEjec").val(numEjecucion);
            $("#fecExecIni2").html(""); 
            $("#fecExecIni2").append(fecha_exec_ini); 
            $("#fecExecFin2").html(""); 
            $("#fecExecFin2").append(fecha_exec_fin); 
            $("#avance2").html(""); 
            if(avance_proc!="null")
              $("#avance2").prepend(avance_proc+"%        "); 
    
            if(estado_proceso=="I"){
            $("#estado2").html(""); 
            $("#estado2").append("En proceso"); 
            $("#avance2").append('<img src="images/indicador.gif">');
            $("#btnProcesar") .prop( "disabled", true );
            $("#btnExportar") .prop( "disabled", true );
            $("#verDetalle").removeAttr("disabled").css('opacity',5);
            window.setTimeout(obtenerInfoLCUniverso,15000);
            
            } 
            else if(estado_proceso=="F"){
             $("#estado2").html(""); 
             $("#estado2").append("Finalizado"); 
             $("#avance2").append('<img src="images/check1.gif">'); 
             $("#btnProcesar") .prop( "disabled", false );
             $("#btnExportar") .prop( "disabled", false );
             $("#verDetalle").removeAttr("disabled").css('opacity',5);
            }
            else if(estado_proceso=="E"){
             $("#estado2").html(""); 
             $("#estado2").append("Error"); 
             $("#avance2").append('<img src="images/signOut.gif">'); 
             $("#verDetalle").removeAttr("disabled").css('opacity',5);
             $("#btnProcesar") .prop( "disabled", false );
             $("#btnExportar") .prop( "disabled", false );
            }
          }
    }    
    ajax.executeDto();	
  }
  
  function obtenerInfoLCAFPA1(){

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("413");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");

          if(estado_proceso!="null")
          {
            $("#fecIni").val(fecha_ini); 
            $("#fecFin").val(fecha_fin); 
            $("#fecPeriodo").val(fecha_proceso);
            $("#numEjec").val(numEjecucion);
            $("#fecExecIni3").html(""); 
            $("#fecExecIni3").append(fecha_exec_ini); 
            $("#fecExecFin3").html(""); 
            $("#fecExecFin3").append(fecha_exec_fin); 
            $("#avance3").html(""); 
            if(avance_proc!="null")
              $("#avance3").prepend(avance_proc+"%        "); 
    
            if(estado_proceso=="I"){
            $("#estado3").html(""); 
            $("#estado3").append("En proceso"); 
            $("#avance3").append('<img src="images/indicador.gif">');
            $("#btnProcesar") .prop( "disabled", true );
            $("#btnExportar") .prop( "disabled", true );
            $("#verDetalle").removeAttr("disabled").css('opacity',5);
            window.setTimeout(obtenerInfoLCAFPA1,15000);
            
            } 
            else if(estado_proceso=="F"){
             $("#estado3").html(""); 
             $("#estado3").append("Finalizado"); 
             $("#avance3").append('<img src="images/check1.gif">'); 
             $("#btnProcesar") .prop( "disabled", false );
             $("#btnExportar") .prop( "disabled", false );
             $("#verDetalle").removeAttr("disabled").css('opacity',5);
            }
            else if(estado_proceso=="E"){
             $("#estado3").html(""); 
             $("#estado3").append("Error"); 
             $("#avance3").append('<img src="images/signOut.gif">'); 
             $("#verDetalle").removeAttr("disabled").css('opacity',5);
             $("#btnProcesar") .prop( "disabled", false );
             $("#btnExportar") .prop( "disabled", false );
            }
          }
    }    
    ajax.executeDto();	
  }
  
  function obtenerInfoLCAFPA2(){

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("414");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");

          if(estado_proceso!="null")
          {
            $("#fecIni").val(fecha_ini); 
            $("#fecFin").val(fecha_fin); 
            $("#fecPeriodo").val(fecha_proceso);
            $("#numEjec").val(numEjecucion);
            $("#fecExecIni4").html(""); 
            $("#fecExecIni4").append(fecha_exec_ini); 
            $("#fecExecFin4").html(""); 
            $("#fecExecFin4").append(fecha_exec_fin); 
            $("#avance4").html(""); 
            if(avance_proc!="null")
              $("#avance4").prepend(avance_proc+"%        "); 
    
            if(estado_proceso=="I"){
            $("#estado4").html(""); 
            $("#estado4").append("En proceso"); 
            $("#avance4").append('<img src="images/indicador.gif">');
            $("#btnProcesar") .prop( "disabled", true );
            $("#btnExportar") .prop( "disabled", true );
            $("#verDetalle").removeAttr("disabled").css('opacity',5);
            window.setTimeout(obtenerInfoLCAFPA2,15000);
            
            } 
            else if(estado_proceso=="F"){
             $("#estado4").html(""); 
             $("#estado4").append("Finalizado"); 
             $("#avance4").append('<img src="images/check1.gif">'); 
             $("#btnProcesar") .prop( "disabled", false );
             $("#btnExportar") .prop( "disabled", false );
             $("#verDetalle").removeAttr("disabled").css('opacity',5);
            }
            else if(estado_proceso=="E"){
             $("#estado4").html(""); 
             $("#estado4").append("Error"); 
             $("#avance4").append('<img src="images/signOut.gif">'); 
             $("#verDetalle").removeAttr("disabled").css('opacity',5);
             $("#btnProcesar") .prop( "disabled", false );
             $("#btnExportar") .prop( "disabled", false );
            }
          }
    }    
    ajax.executeDto();	
  }
  
  
 $("#btnProcesar").click(function(){
 
  var fecIni=$("#fecIni").val();
  var fecFin=$("#fecFin").val();
  var fecperiodo=$("#fecPeriodo").val();
   if(fecperiodo==""||fecIni==""||fecFin==""){
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
         $("#periodo").val(fecperiodo);
        $("#frmOficioCir42").submit();
       }
     
   }
 });
 
 function obtenerPeriodoMensaje(){
        
       var valor=""; 
       var fecIni= $("#fecPeriodo").val().split("/");
       periodo=fecIni[2]+fecIni[1];
       var ajax = new Ajax();
       ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
       ajax.metodo   = "obtenerPeriodoMensaje";    
       ajax.parametros = new Array(periodo,"300");//PARAMETROS QUE US EL METODO DEL FACADE   	
       ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
       ajax.callback   = function(dto){  		
       
        valor= dto.get("valor");                  
       }
        ajax.executeDto();
      return valor;        
    
  }
  
  $("#btnRefrescar").click(function(){
      obtenerInfoPeriodo();   
  });
    
  $("#verDetalle").click(function(){
   
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
  });
    
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
 
  function obtenerDetallePaso(){
  
   periodo=$("#periodo").val();
    var numEjec=$("#numEjec").val();
    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPasoLicConjunta";    
    ajax.parametros = new Array(periodo,"300",numEjec);//PARAMETROS QUE USA EL METODO DEL FACADE   	
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
             fecha_proceso= dto.get("fecha_proceso");
              $("#ussrEjec").html("");
              $("#ussrEjec").append(ussrExec);          
              $("#periodo_paso").html("");
              $("#periodo_paso").append(fecha_proceso);
              // $("#periodo_paso").append(periodo_detalle);
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
              }
              else if(estad_paso=="E"){
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
  
  $("#btnExportar").click(function(){
    var x='ok';
    var fecperiodo=$("#fecPeriodo").val();
    if(x=='ok'){ 
      var form=document.frmOficioCir42;
      $("#periodo").val(fecperiodo);
      var url="";
      url="OficioLicitacionConjunta.do?metodo=generarCsvLC";
      form.action=url;
      form.method="post";
      form.submit();
    }
  });
 

});
