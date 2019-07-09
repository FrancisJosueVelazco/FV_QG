$(document).ready(function() {

  obtenerAvanceOtrasAreas();
  obtenerAvancePrestaciones();
  obtenerAvanceLotes();
  obtenerAvanceGeneracionArchivoPrestaciones();
  obtenerAvanceGeneracionArchivoOtrasAreas();
  obtenerAvanceGeneracionArchivoLotes();
  
  $("#irSucave").click(function(){
      var form=document.frmOficioCir42;
      var url = "Oficio19.do?metodo=inicioUpload"; 
      var form = document.forms(0);
      form.action = url;
      form.method="post";
      form.submit();
  });
  
function obtenerAvanceLotes(){

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("400");//PARAMETROS QUE US EL METODO DEL FACADE 
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		

          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");

          $("#numEjecLotes").val(numEjecucion);
          
          $("#fecExecIni5").html(""); 
          $("#fecExecFin5").html(""); 
          $("#avance5").html("");
          if(fecha_exec_ini !== 'null'){
            $("#fecExecIni5").append(fecha_exec_ini); 
          }
          if(fecha_exec_fin !== 'null'){
            $("#fecExecFin5").append(fecha_exec_fin);  
          }
          if(avance_proc !== 'null'){
            $("#avance5").prepend(avance_proc+"%        ");   
          }
                  
          if(estado_proceso=="I"){
          $("#estado5").html(""); 
          $("#estado5").append("En proceso"); 
          $("#avance5").append('<img src="images/indicador.gif">');
          $("#verLotes").removeAttr("disabled").css('opacity',5);
          window.setTimeout(obtenerAvanceLotes,10000);
          } 
          else if(estado_proceso=="F"){
           $("#estado5").html(""); 
           $("#estado5").append("Finalizado"); 
           $("#avance5").append('<img src="images/check1.gif">'); 
           $("#verLotes").removeAttr("disabled").css('opacity',5);
         }
          else if(estado_proceso=="E"){
           $("#estado5").html(""); 
           $("#estado5").append("Error"); 
           $("#avance5").append('<img src="images/signOut.gif">'); 
           $("#verLotes").removeAttr("disabled").css('opacity',5);
          }
    }    
    ajax.executeDto();	
    
    limpiarCampos();
    limpiarPrestaciones();
    limpiarOtrasAreas();
    limpiarLotes();
  }
  
  function obtenerAvanceGeneracionArchivoLotes(){ 

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("420");
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
          periodo = dto.get("periodo");     
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");
          
         // $("#periodo").val(periodo);  
         // $("#periodo").val(periodo.substring(4,6)+periodo.substring(0,4));          
          //$("#numEjecLotes").val(numEjecucion);
          
          $("#fecExecIni6").html(""); 
          $("#fecExecFin6").html(""); 
          $("#avance6").html("");
          if(fecha_exec_ini !== 'null'){
            $("#fecExecIni6").append(fecha_exec_ini); 
          }
          if(fecha_exec_fin !== 'null'){
            $("#fecExecFin6").append(fecha_exec_fin);  
          }
          if(avance_proc !== 'null'){
            $("#avance6").prepend(avance_proc+"%        ");   
          }
          
          if(estado_proceso=="I"){
            $("#estado6").html(""); 
            $("#estado6").append("En proceso"); 
            $("#avance6").append('<img src="images/indicador.gif">');
            $("#verArchivoLotes").removeAttr("disabled").css('opacity',5);
            window.setTimeout(obtenerAvanceGeneracionArchivoLotes,10000);          
          } 
          else if(estado_proceso=="F"){
           $("#estado6").html(""); 
           $("#estado6").append("Finalizado"); 
           $("#avance6").append('<img src="images/check1.gif">'); 
           $("#verArchivoLotes").removeAttr("disabled").css('opacity',5);
          }
          else if(estado_proceso=="E"){
           $("#estado6").html(""); 
           $("#estado6").append("Error"); 
           $("#avance6").append('<img src="images/signOut.gif">'); 
           $("#verArchivoLotes").removeAttr("disabled").css('opacity',5);
          }
    }    
    ajax.executeDto();	 
    limpiarCampos();
    limpiarPrestaciones();
    limpiarOtrasAreas();
    limpiarLotes();
    limpiarGeneracionPrestaciones();
    limpiarGeneracionOtrasAreas();
    limpiarGeneracionLotes();
  }
  
  function obtenerAvancePrestaciones(){

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("120");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
          periodo = dto.get("periodo");     
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");
          
         // $("#periodo").val(periodo);  
          $("#periodo").val(periodo.substring(4,6)+periodo.substring(0,4));          
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
            $("#verPrestaciones").removeAttr("disabled").css('opacity',5);
            window.setTimeout(obtenerAvancePrestaciones,10000);          
          } 
          else if(estado_proceso=="F"){
           $("#estado1").html(""); 
           $("#estado1").append("Finalizado"); 
           $("#avance1").append('<img src="images/check1.gif">'); 
           $("#verPrestaciones").removeAttr("disabled").css('opacity',5);
          }
          else if(estado_proceso=="E"){
           $("#estado1").html(""); 
           $("#estado1").append("Error"); 
           $("#avance1").append('<img src="images/signOut.gif">'); 
           $("#verPrestaciones").removeAttr("disabled").css('opacity',5);
          }
    }    
    ajax.executeDto();	 
    verAvance();
    limpiarCampos();
    limpiarPrestaciones();
    limpiarOtrasAreas();
    limpiarLotes();
  }
  
   function obtenerAvanceOtrasAreas(){

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("130");//PARAMETROS QUE US EL METODO DEL FACADE   	
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
          $("#verOtrasAreas").removeAttr("disabled").css('opacity',5);
          window.setTimeout(obtenerAvanceOtrasAreas,10000);
          
          } 
          else if(estado_proceso=="F"){
           $("#estado2").html(""); 
           $("#estado2").append("Finalizado"); 
           $("#avance2").append('<img src="images/check1.gif">'); 
           $("#verOtrasAreas").removeAttr("disabled").css('opacity',5);
         }
          else if(estado_proceso=="E"){
           $("#estado2").html(""); 
           $("#estado2").append("Error"); 
           $("#avance2").append('<img src="images/signOut.gif">'); 
           $("#verOtrasAreas").removeAttr("disabled").css('opacity',5);
          }
    }    
    ajax.executeDto();	
      
    limpiarCampos();
    limpiarPrestaciones();
    limpiarOtrasAreas();
    limpiarLotes();
  }
  
    function obtenerAvanceGeneracionArchivoPrestaciones(){ 

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("380");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
          periodo = dto.get("periodo");     
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");
          
         // $("#periodo").val(periodo);  
         // $("#periodo").val(periodo.substring(4,6)+periodo.substring(0,4));          
          $("#numEjecPrest").val(numEjecucion);
          
          $("#fecExecIni3").html(""); 
          $("#fecExecIni3").append(fecha_exec_ini); 
          
          $("#fecExecFin3").html(""); 
          $("#fecExecFin3").append(fecha_exec_fin); 
                   
          $("#avance3").html(""); 
          $("#avance3").prepend(avance_proc+"%        "); 
          
          if(estado_proceso=="I"){
            $("#estado3").html(""); 
            $("#estado3").append("En proceso"); 
            $("#avance3").append('<img src="images/indicador.gif">');
            $("#verArchivoPrestaciones").removeAttr("disabled").css('opacity',5);
            window.setTimeout(obtenerAvanceGeneracionArchivoPrestaciones,10000);          
          } 
          else if(estado_proceso=="F"){
           $("#estado3").html(""); 
           $("#estado3").append("Finalizado"); 
           $("#avance3").append('<img src="images/check1.gif">'); 
           $("#verArchivoPrestaciones").removeAttr("disabled").css('opacity',5);
          }
          else if(estado_proceso=="E"){
           $("#estado3").html(""); 
           $("#estado3").append("Error"); 
           $("#avance3").append('<img src="images/signOut.gif">'); 
           $("#verArchivoPrestaciones").removeAttr("disabled").css('opacity',5);
          }
    }    
    ajax.executeDto();	 
    limpiarCampos();
    limpiarPrestaciones();
    limpiarOtrasAreas();
    limpiarLotes();
    limpiarGeneracionPrestaciones();
    limpiarGeneracionOtrasAreas();
    limpiarGeneracionLotes();
  }
  
  function obtenerAvanceGeneracionArchivoOtrasAreas(){ 

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("390");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
          periodo = dto.get("periodo");     
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");
          
         // $("#periodo").val(periodo);  
         // $("#periodo").val(periodo.substring(4,6)+periodo.substring(0,4));          
          $("#numEjecAreas").val(numEjecucion);
          
          $("#fecExecIni4").html(""); 
          $("#fecExecIni4").append(fecha_exec_ini); 
          
          $("#fecExecFin4").html(""); 
          $("#fecExecFin4").append(fecha_exec_fin); 
                   
          $("#avance4").html(""); 
          $("#avance4").prepend(avance_proc+"%        "); 
          
          if(estado_proceso=="I"){
            $("#estado4").html(""); 
            $("#estado4").append("En proceso"); 
            $("#avance4").append('<img src="images/indicador.gif">');
            $("#verArchivoOtrasAreas").removeAttr("disabled").css('opacity',5);
            window.setTimeout(obtenerAvanceGeneracionArchivoOtrasAreas,10000);          
          } 
          else if(estado_proceso=="F"){
           $("#estado4").html(""); 
           $("#estado4").append("Finalizado"); 
           $("#avance4").append('<img src="images/check1.gif">'); 
           $("#verArchivoOtrasAreas").removeAttr("disabled").css('opacity',5);
          }
          else if(estado_proceso=="E"){
           $("#estado4").html(""); 
           $("#estado4").append("Error"); 
           $("#avance4").append('<img src="images/signOut.gif">'); 
           $("#verArchivoOtrasAreas").removeAttr("disabled").css('opacity',5);
          }
    }    
    ajax.executeDto();	 
    limpiarCampos();
    limpiarPrestaciones();
    limpiarOtrasAreas();
    limpiarLotes();
    limpiarGeneracionPrestaciones();
    limpiarGeneracionOtrasAreas();
    limpiarGeneracionLotes();
  }
  
  function limpiarPrestaciones(){
     if($("#fecExecIni1").val()==="null"){
       $("#fecExecIni1").html(""); 
       $("#fecExecFin1").html(""); 
       $("#avance1").html(""); 
       $("#estado1").html(""); 
       $("#verPrestaciones").attr('disabled','disabled').css('opacity',0.5);
     }
  }
  
  function limpiarOtrasAreas(){
     if($("#fecExecIni2").val()==="null"){
       $("#fecExecIni2").html(""); 
       $("#fecExecFin2").html(""); 
       $("#avance2").html(""); 
       $("#estado2").html("");     
       $("#verOtrasAreas").attr('disabled','disabled').css('opacity',0.5);
     }
  }  
  
  function limpiarLotes(){
     if($("#fecExecIni5").val()==="null"){
       $("#fecExecIni5").html(""); 
       $("#fecExecFin5").html(""); 
       $("#avance5").html(""); 
       $("#estado5").html("");     
       $("#verLotes").attr('disabled','disabled').css('opacity',0.5);
     }
  }
  
  function limpiarGeneracionPrestaciones(){
     if($("#fecExecIni3").val()==="null"){
       $("#fecExecIni3").html(""); 
       $("#fecExecFin3").html(""); 
       $("#avance3").html(""); 
       $("#estado3").html("");     
       $("#verArchivoPrestaciones").attr('disabled','disabled').css('opacity',0.5);
     }
  }
  
  function limpiarGeneracionOtrasAreas(){
     if($("#fecExecIni4").val()==="null"){
       $("#fecExecIni4").html(""); 
       $("#fecExecFin4").html(""); 
       $("#avance4").html(""); 
       $("#estado4").html("");     
       $("#verArchivoOtrasAreas").attr('disabled','disabled').css('opacity',0.5);
     }
  }
  
  function limpiarGeneracionLotes(){
     if($("#fecExecIni6").val()==="null"){
       $("#fecExecIni6").html(""); 
       $("#fecExecFin6").html(""); 
       $("#avance6").html(""); 
       $("#estado6").html("");     
       $("#verArchivoLotes").attr('disabled','disabled').css('opacity',0.5);
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
       $("#fecExecIni3").html(""); 
       $("#fecExecFin3").html(""); 
       $("#avance3").html(""); 
       $("#estado3").html("");
       $("#fecExecIni4").html(""); 
       $("#fecExecFin4").html(""); 
       $("#avance4").html(""); 
       $("#estado4").html("");
       //$("#fecExecIni5").html(""); 
       //$("#fecExecFin5").html(""); 
       //$("#avance5").html(""); 
       //$("#estado5").html("");
       $("#verPrestaciones").attr('disabled','disabled').css('opacity',0.5);
       $("#verOtrasAreas").attr('disabled','disabled').css('opacity',0.5);
       //$("#verLotes").attr('disabled','disabled').css('opacity',0.5);
       $("#verArchivoPrestaciones").attr('disabled','disabled').css('opacity',0.5);
       $("#verArchivoOtrasAreas").attr('disabled','disabled').css('opacity',0.5);
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
  
      if($("#periodo").val()==""){
      alert("Debe ingresar un periodo");
      }
      else{
      obtenerAvanceOtrasAreas();
      obtenerAvancePrestaciones();
      obtenerAvanceLotes();
      obtenerAvanceGeneracionArchivoPrestaciones();
      obtenerAvanceGeneracionArchivoOtrasAreas();
      obtenerAvanceGeneracionArchivoLotes();
      }
    
  });
  
    $("#btnExportar").click(function(){
    var x='ok';
    var periodo=$("#periodo").val();
    periodo= periodo.substring(2,6)+periodo.substring(0,2);
    //alert("Periodo :" + periodo);
    
    if(obtenerAvance()==0){
        r=confirm("No se ha generado la Carga Complementaria. ¿Desea continuar con la generación?");
         if (r==true)
           x='ok';
         else
         { 
           x='no';
           return
          }
   }
    /*
    if(x=='ok'){  
       var ajax = new Ajax();
       ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
       ajax.metodo   = "exportarCSVOficio19";    
       ajax.parametros = new Array(periodo);//PARAMETROS QUE US EL METODO DEL FACADE   	
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
     }
     */
    if(x=='ok'){ 
      var form=document.frmOficio19;
      var url="";
      url="Oficio19.do?metodo=generarCsv19&periodo="+periodo;
      form.action=url;
      form.method="post";
      form.submit();
    }
  });
  
   $("#btnProcesar").click(function(){
  var periodo=$("#periodo").val();
   if(periodo==""){
    alert("Debe ingresar los campos obligatoriamente.");
    return;
  }
  if(validarPeriodo()=="ok"){
   var resultado= obtenerPeriodoMensaje();
       var r=confirm(resultado);
       if (r==true)
       {	
        $("#frmOficio19").submit(); 
       }
      else {}
    
   }
});

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

  $("#verPrestaciones").click(function(){
   if($("#periodo").val()==""){
      alert("Debe ingresar un periodo");
     }
   else{
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
   }
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

 $("#verLotes").click(function(){
   if($("#periodo").val()==""){
      alert("Debe ingresar un periodo");
      }
   else{
     obtenerDetallePasoLotes();
     $("#infoLotes").css("display", "block");
     $("#infoLotes").css({
       position: "absolute",
       background: "url(images/bg-transparent.png) repeat",
       border: "1px solid black",
       top: "0",
       left: "0",
       height:"1900px",
       width:"100%"
     });
    
     $("#closeLotes").css({
       background: "url(images/boton_eliminar1.gif)",
       height:"20px",
       width:"20px"
     });
   }
  });

  $("#closeLotes").click(function(){
    $("#infoLotes").hide();
  });  
  
  function obtenerDetallePasoPrestaciones(){

    var periodo=$("#periodo").val();
     periodo= periodo.substring(2,6)+periodo.substring(0,2);
    var numEjec=$("#numEjecPrest").val();
    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPasoETL";    
    ajax.parametros = new Array(periodo,"120",numEjec);//PARAMETROS QUE USA EL METODO DEL FACADE   	
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
   
  function obtenerDetallePasoLotes(){
  
    var periodo=$("#periodo").val();
     periodo= periodo.substring(2,6)+periodo.substring(0,2);
    var numEjec=$("#numEjecLotes").val();
    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPasoETL";    
    ajax.parametros = new Array(periodo,"400",numEjec);//PARAMETROS QUE USA EL METODO DEL FACADE   	
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
            
              $("#ussrEjec_Lotes").html("");
              $("#ussrEjec_Lotes").append(ussrExe);          
              $("#periodo_paso_Lotes").html("");
              $("#periodo_paso_Lotes").append(periodo_detalle.substring(4,6)+periodo_detalle.substring(0,4));
              $("#fecIni_paso_Lotes").html(""); 
              $("#fecIni_paso_Lotes").append(fecha_ini); 
              $("#fecFin_paso_Lotes").html(""); 
              $("#fecFin_paso_Lotes").append(fecha_fin);
              $("#fecExecIni_paso_Lotes").html(""); 
              $("#fecExecIni_paso_Lotes").append(paso_fec_exec_ini); 
              $("#fecExecFin_paso_Lotes").html(""); 
              $("#fecExecFin_paso_Lotes").append(paso_fec_exec_fin); 
              $("#error_paso_Lotes").html(""); 
              $("#error_paso_Lotes").append(mensaje_error); 
              $("#avance_paso_Lotes").html(""); 
              $("#avance_paso_Lotes").append(avance_proc+"%");  
              if(estad_paso=="F"){
              $("#estado_paso_Lotes").html(""); 
              $("#estado_paso_Lotes").append("Finalizado");   
              }else if(estad_paso=="I"){
              $("#estado_paso_Lotes").html(""); 
              $("#estado_paso_Lotes").append("En proceso");
              }else if(estad_paso=="E"){
              $("#estado_paso_Lotes").html(""); 
              $("#estado_paso_Lotes").append("Error");
              }
              $("#nombre_paso_Lotes").html(""); 
              $("#nombre_paso_Lotes").append(nomb_paso); 
               
    }    
    ajax.executeDto();	
    limpiarLogLotes();  
  }

  
  function limpiarLogLotes(){
  
       if($("#periodo_paso_Lotes").html()=="null"){
          $("#periodo_paso_Lotes").html("");
          $("#ussrEjec_Lotes").html(""); 
          $("#fecIni_paso_Lotes").html(""); 
          $("#fecFin_paso_Lotes").html("");
          $("#fecExecIni_paso_Lotes").html(""); 
          $("#fecExecFin_paso_Lotes").html(""); 
          $("#error_paso_Lotes").html(""); 
          $("#avance_paso_Lotes").html("");
          $("#estado_paso_Lotes").html("");
          $("#nombre_paso_Lotes").html("");
          $("#nomProceso_paso_Lotes").html("");
          $("#numProceso_paso_Lotes").html("");          
          alert("No se encontró ningún registro.");
          }
   }

});