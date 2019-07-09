$(document).ready(function() {
  $("#btnRefrescar").click();
  $("#btnRefrescar").click();
  $("#btnRefrescar").click();
  $("#btnRefrescar").click();
  obtenerAvanceAnexo1();
  obtenerAvanceAnexo2();
  obtenerAvanceAnexo3();
  obtenerAvanceAnexo4();
  obtenerAvanceAnexo7();
  obtenerAvanceAnexo1();
  obtenerAvanceAnexo2();
  obtenerAvanceAnexo3();
  obtenerAvanceAnexo4();
  obtenerAvanceAnexo7();
  
 function limpiarAnexo1(){
     if($("#fecExecIni1").html()==="null"){
        $("#fecExecIni1").html("");
        $("#fecExecFin1").html(""); 
        $("#avance1").html(""); 
        $("#estado1").html(""); 
        $("#verAnexo1").attr('disabled','disabled').css('opacity',0.5);
        $("#exportarAnexo1").attr('disabled','disabled').css('opacity',0.5);
     }
    //$("#exportarAnexo2").removeAttr("disabled").css('opacity',5);
   }
  function limpiarAnexo2(){
     if($("#fecExecIni2").html()==="null"){
        $("#fecExecIni2").html("");
        $("#fecExecFin2").html(""); 
        $("#avance2").html(""); 
        $("#estado2").html(""); 
        $("#verAnexo2").attr('disabled','disabled').css('opacity',0.5);
        $("#exportarAnexo2").attr('disabled','disabled').css('opacity',0.5);
        $("#btnAnexo2").attr('disabled','disabled').css('opacity',0.5);
     }
      
    //$("#exportarAnexo2").removeAttr("disabled").css('opacity',5);
    
   }
  
  function limpiarAnexo3(){
     if($("#fecExecIni3").html()==="null"){
        $("#fecExecIni3").html("");
        $("#fecExecFin3").html(""); 
        $("#avance3").html(""); 
        $("#estado3").html(""); 
        $("#verAnexo3").attr('disabled','disabled').css('opacity',0.5);
        $("#exportarAnexo3").attr('disabled','disabled').css('opacity',0.5);
        $("#btnAnexo3").attr('disabled','disabled').css('opacity',0.5);
     }
   
    //$("#exportarAnexo3").removeAttr("disabled").css('opacity',5);     
   }
  
  function limpiarAnexo4(){
 
     if($("#fecExecIni4").html()==="null"){
        $("#fecExecIni4").html("");
        $("#fecExecFin4").html(""); 
        $("#avance4").html(""); 
        $("#estado4").html(""); 
        $("#verAnexo4").attr('disabled','disabled').css('opacity',0.5);
        $("#exportarAnexo4").attr('disabled','disabled').css('opacity',0.5);
        $("#btnAnexo4").attr('disabled','disabled').css('opacity',0.5);
     }
  
    //$("#exportarAnexo4").removeAttr("disabled").css('opacity',5);   
   }
  
   function limpiarAnexo7(){
     if($("#fecExecIni7").html()==="null"){
        $("#fecExecIni7").html("");
        $("#fecExecFin7").html(""); 
        $("#avance7").html(""); 
        $("#estado7").html(""); 
        $("#verAnexo7").attr('disabled','disabled').css('opacity',0.5);
        $("#exportarAnexo7").attr('disabled','disabled').css('opacity',0.5);
        $("#btnAnexo7").attr('disabled','disabled').css('opacity',0.5);
     }   
     
   // $("#exportarAnexo7").removeAttr("disabled").css('opacity',5);
    
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
       $("#fecExecIni7").html(""); 
       $("#fecExecFin7").html(""); 
       $("#avance7").html(""); 
       $("#estado7").html(""); 
       $("#verAnexo1").attr('disabled','disabled').css('opacity',0.5);
       $("#verAnexo2").attr('disabled','disabled').css('opacity',0.5);
       $("#verAnexo3").attr('disabled','disabled').css('opacity',0.5);
       $("#verAnexo4").attr('disabled','disabled').css('opacity',0.5);
       $("#verAnexo7").attr('disabled','disabled').css('opacity',0.5);
       $("#exportarAnexo1").attr('disabled','disabled').css('opacity',0.5);
       $("#exportarAnexo2").attr('disabled','disabled').css('opacity',0.5);
       $("#exportarAnexo3").attr('disabled','disabled').css('opacity',0.5);
       $("#exportarAnexo4").attr('disabled','disabled').css('opacity',0.5);
       $("#exportarAnexo7").attr('disabled','disabled').css('opacity',0.5);
       $("#btnAnexo2").attr('disabled','disabled').css('opacity',0.5);
       $("#btnAnexo3").attr('disabled','disabled').css('opacity',0.5);
       $("#btnAnexo4").attr('disabled','disabled').css('opacity',0.5);
       $("#btnAnexo7").attr('disabled','disabled').css('opacity',0.5);
    }
  }
  function obtenerAvanceAnexo1(){

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("240");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
          periodo = dto.get("periodo");     
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");
          
          $("#periodo").val(periodo.substring(4,6)+periodo.substring(0,4));  
 
          $("#numEjecAnexo1").val(numEjecucion);
          
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
          $("#verAnexo1").removeAttr("disabled").css('opacity',5);
          $("#exportarAnexo1").attr('disabled','disabled').css('opacity',0.5);
          window.setTimeout(obtenerAvanceAnexo2,5000);
          
          } 
          else if(estado_proceso=="F"){
           $("#estado1").html(""); 
           $("#estado1").append("Finalizado"); 
           $("#avance1").append('<img src="images/check1.gif">'); 
           $("#verAnexo1").removeAttr("disabled").css('opacity',5);
           $("#exportarAnexo1").removeAttr("disabled").css('opacity',5);
          }
          else if(estado_proceso=="E"){
           $("#estado1").html(""); 
           $("#estado1").append("Error"); 
           $("#avance1").append('<img src="images/signOut.gif">'); 
           $("#verAnexo1").removeAttr("disabled").css('opacity',5);
           $("#exportarAnexo1").attr('disabled','disabled').css('opacity',0.5);
          }
    }    
    ajax.executeDto();	
    limpiarAnexo1();
    verAvance();
  }
  function obtenerAvanceAnexo2(){

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("200");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
          periodo = dto.get("periodo");     
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");
          
          $("#periodo").val(periodo.substring(4,6)+periodo.substring(0,4));  
          $("#periodo2").val(periodo.substring(4,6)+periodo.substring(0,4));
          $("#periodo1").val(periodo.substring(4,6)+periodo.substring(0,4));  
          $("#numEjecAnexo2").val(numEjecucion);
          
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
          $("#verAnexo2").removeAttr("disabled").css('opacity',5);
          $("#exportarAnexo2").attr('disabled','disabled').css('opacity',0.5);
          $("#btnAnexo2").attr('disabled','disabled').css('opacity',0.5);
          window.setTimeout(obtenerAvanceAnexo2,5000);
          
          } 
          else if(estado_proceso=="F"){
           $("#estado2").html(""); 
           $("#estado2").append("Finalizado"); 
           $("#avance2").append('<img src="images/check1.gif">'); 
           $("#verAnexo2").removeAttr("disabled").css('opacity',5);
           $("#exportarAnexo2").removeAttr("disabled").css('opacity',5);
           $("#btnAnexo2").removeAttr("disabled").css('opacity',5);
           
          }
          else if(estado_proceso=="E"){
           $("#estado2").html(""); 
           $("#estado2").append("Error"); 
           $("#avance2").append('<img src="images/signOut.gif">'); 
           $("#verAnexo2").removeAttr("disabled").css('opacity',5);
           $("#exportarAnexo2").attr('disabled','disabled').css('opacity',0.5);
           $("#btnAnexo2").attr('disabled','disabled').css('opacity',0.5);
          }
    }    
    ajax.executeDto();	
    limpiarAnexo2();
    verAvance();
  }
  
 function obtenerAvanceAnexo3(){

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("210");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
        
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");
          periodo = dto.get("periodo");   
           $("#periodo3").val(periodo.substring(4,6)+periodo.substring(0,4));
          $("#numEjecAnexo3").val(numEjecucion);
          
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
          $("#verAnexo3").removeAttr("disabled").css('opacity',5);
          $("#exportarAnexo3").attr('disabled','disabled').css('opacity',0.5);
          $("#btnAnexo3").attr('disabled','disabled').css('opacity',0.5);
          window.setTimeout(obtenerAvanceAnexo3,5000);
          } 
          else if(estado_proceso=="F"){
           $("#estado3").html(""); 
           $("#estado3").append("Finalizado"); 
           $("#avance3").append('<img src="images/check1.gif">'); 
           $("#verAnexo3").removeAttr("disabled").css('opacity',5);
           $("#exportarAnexo3").removeAttr("disabled").css('opacity',5);
           $("#btnAnexo3").removeAttr("disabled").css('opacity',5);
          }
          else if(estado_proceso=="E"){
           $("#estado3").html(""); 
           $("#estado3").append("Error"); 
           $("#avance3").append('<img src="images/signOut.gif">'); 
           $("#verAnexo3").removeAttr("disabled").css('opacity',5);
           $("#exportarAnexo3").attr('disabled','disabled').css('opacity',0.5);
           $("#btnAnexo3").attr('disabled','disabled').css('opacity',0.5);
          }
    }    
    ajax.executeDto();	
    limpiarAnexo3();
     verAvance(); 
  }
  
 function obtenerAvanceAnexo4(){

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("220");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
          periodo = dto.get("periodo");   
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");
           $("#periodo4").val(periodo.substring(4,6)+periodo.substring(0,4));     
          $("#numEjecAnexo4").val(numEjecucion);
          
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
          $("#verAnexo4").removeAttr("disabled").css('opacity',5);
          $("#exportarAnexo4").attr('disabled','disabled').css('opacity',0.5);
          $("#btnAnexo4").attr('disabled','disabled').css('opacity',0.5);
          window.setTimeout(obtenerAvanceAnexo4,5000);
          
          } 
          else if(estado_proceso=="F"){
           $("#estado4").html(""); 
           $("#estado4").append("Finalizado"); 
           $("#avance4").append('<img src="images/check1.gif">'); 
           $("#verAnexo4").removeAttr("disabled").css('opacity',5);
           $("#exportarAnexo4").removeAttr("disabled").css('opacity',5);
           $("#btnAnexo4").removeAttr("disabled").css('opacity',5);
          }
          else if(estado_proceso=="E"){
           $("#estado4").html(""); 
           $("#estado4").append("Error"); 
           $("#avance4").append('<img src="images/signOut.gif">'); 
           $("#verAnexo4").removeAttr("disabled").css('opacity',5);
           $("#exportarAnexo4").attr('disabled','disabled').css('opacity',0.5);
           $("#btnAnexo4").attr('disabled','disabled').css('opacity',0.5);
         }
    }    
    ajax.executeDto();	
    limpiarAnexo4();
    verAvance();
  }
  
  function obtenerAvanceAnexo7(){

    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPeriodoETL";    
    ajax.parametros = new Array("230");//PARAMETROS QUE US EL METODO DEL FACADE   	
    ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
    ajax.callback   = function(dto){  		
          periodo = dto.get("periodo");   
          fecha_exec_ini= dto.get("fecha_exec_ini"); 
          fecha_exec_fin= dto.get("fecha_exec_fin"); 
          avance_proc= dto.get("avance"); 
          estado_proceso= dto.get("estado_proceso"); 
          numEjecucion= dto.get("num_ejecucion");
          $("#periodo7").val(periodo.substring(4,6)+periodo.substring(0,4));              
          $("#numEjecAnexo7").val(numEjecucion);
          
          $("#fecExecIni7").html(""); 
          $("#fecExecIni7").append(fecha_exec_ini); 
          
          $("#fecExecFin7").html(""); 
          $("#fecExecFin7").append(fecha_exec_fin); 
                   
          $("#avance7").html(""); 
          $("#avance7").prepend(avance_proc+"%        "); 
        
          if(estado_proceso=="I"){
          $("#estado7").html(""); 
          $("#estado7").append("En proceso"); 
          $("#avance7").append('<img src="images/indicador.gif">');
          $("#verAnexo7").removeAttr("disabled").css('opacity',5);
          $("#exportarAnexo7").attr('disabled','disabled').css('opacity',0.5);
          $("#btnAnexo7").attr('disabled','disabled').css('opacity',0.5);
          window.setTimeout(obtenerAvanceAnexo7,5000);
          
          } 
          else if(estado_proceso=="F"){
           $("#estado7").html(""); 
           $("#estado7").append("Finalizado"); 
           $("#avance7").append('<img src="images/check1.gif">'); 
           $("#verAnexo7").removeAttr("disabled").css('opacity',5);
           $("#exportarAnexo7").removeAttr("disabled").css('opacity',5);
           $("#btnAnexo7").removeAttr("disabled").css('opacity',5);
          }
          else if(estado_proceso=="E"){
           $("#estado7").html(""); 
           $("#estado7").append("Error"); 
           $("#avance7").append('<img src="images/signOut.gif">'); 
           $("#verAnexo7").removeAttr("disabled").css('opacity',5);
           $("#exportarAnexo7").attr('disabled','disabled').css('opacity',0.5);
           $("#btnAnexo7").attr('disabled','disabled').css('opacity',0.5);
          }
    }    
      ajax.executeDto();	
      limpiarCampos();
      limpiarAnexo7();
      verAvance();
  }
  
 function verAvance(){
    
    if($("#estado2").html()=="Finalizado" && $("#estado3").html()=="Finalizado" && 
       $("#estado4").html()=="Finalizado" && $("#estado7").html()=="Finalizado"){
           $("#btnProcesar") .prop( "disabled", false );
           $("#exportarAnexo1").removeAttr("disabled").css('opacity',5);
           $("#estado1").html(""); 
           $("#estado1").append("Finalizado"); 
           $("#avance1").html("");
           $("#avance1").append("100%        ");
           $("#avance1").append('<img src="images/check1.gif">');
           $("#fecExecIni1").html(""); 
           $("#fecExecIni1").append($("#fecExecIni2").html()); 
           $("#fecExecFin1").html("");
           $("#fecExecFin1").append($("#fecExecFin3").html()); 
    }
    else if( $("#estado2").html()=="En proceso" ||  $("#estado3").html()=="En proceso" 
            ||  $("#estado4").html()=="En proceso" ||  $("#estado7").html()=="En proceso"){
            
           $("#btnProcesar") .prop( "disabled", true );
           //$("#btnAnexo2") .prop( "disabled", true );
           $("#fecExecIni1").html(""); 
           $("#fecExecIni1").append($("#fecExecIni2").html()); 
           $("#estado1").html(""); 
           $("#estado1").append("En proceso"); 
             
    }
    
    else if( $("#estado2").html()=="Error" && $("#estado3").html()=="Error" 
            && $("#estado4").html()=="Error" && $("#estado7").html()=="Error"){
            
           $("#btnProcesar") .prop( "disabled", false );
           //$("#btnAnexo2") .prop( "disabled", true );
           $("#fecExecIni1").html(""); 
           $("#fecExecIni1").append($("#fecExecIni2").html()); 
           $("#estado1").html(""); 
           $("#estado1").append("Error"); 
    }
    
    //
  /*  if( $("#estado2").html()=="En proceso" ) {
     $("#fecExecIni1").html(""); 
     $("#fecExecIni1").append($("#fecExecIni2").html()); 
     $("#estado1").html(""); 
     $("#estado1").append("En proceso"); 
    }
    if( $("#estado2").html()=="Finalizado" ) {
     $("#fecExecIni1").html(""); 
     $("#fecExecIni1").append($("#fecExecIni2").html()); 
    }*/
    if( $("#estado2").html()=="Error" ) {
     $("#fecExecIni1").html(""); 
     $("#fecExecIni1").append($("#fecExecIni2").html()); 
     $("#fecExecFin1").html("");
     $("#fecExecFin1").append($("#fecExecFin2").html()); 
     $("#estado1").html(""); 
     $("#estado1").append("Error"); 
     $("#avance1").html(""); 
     $("#avance1").append('<img src="images/signOut.gif">')
    }
    
     if( $("#estado3").html()=="Error" ) {
     $("#fecExecIni1").html(""); 
     $("#fecExecIni1").append($("#fecExecIni3").html()); 
     $("#fecExecFin1").html("");
     $("#fecExecFin1").append($("#fecExecFin3").html()); 
     $("#estado1").html(""); 
     $("#estado1").append("Error"); 
     $("#avance1").html(""); 
     $("#avance1").append('<img src="images/signOut.gif">')
    }
    
     if( $("#estado4").html()=="Error" ) {
     $("#fecExecIni1").html(""); 
     $("#fecExecIni1").append($("#fecExecIni4").html()); 
     $("#fecExecFin1").html("");
     $("#fecExecFin1").append($("#fecExecFin4").html()); 
     $("#estado1").html(""); 
     $("#estado1").append("Error"); 
     $("#avance1").html(""); 
     $("#avance1").append('<img src="images/signOut.gif">')
    }
    
    if( $("#estado7").html()=="Error" ) {
     $("#fecExecIni1").html(""); 
     $("#fecExecIni1").append($("#fecExecIni7").html()); 
     $("#fecExecFin1").html("");
     $("#fecExecFin1").append($("#fecExecFin7").html());  
     $("#estado1").html(""); 
     $("#estado1").append("Error"); 
     $("#avance1").html(""); 
     $("#avance1").append('<img src="images/signOut.gif">')
    }
    
    
      
  }
   
  $("#btnRefrescar").click(function(){
  
      obtenerAvanceAnexo2();
      obtenerAvanceAnexo3();
      obtenerAvanceAnexo4();
      obtenerAvanceAnexo7();    
  });
  
  $("#irCargaArchivo").click(function(){
      var form=document.frmOficio18;
      var url = "Oficio18.do?metodo=inicioUpload"; 
      var form = document.forms(0);
      form.action = url;
      form.method="post";
      form.submit();
    });
  
    $("#irSucave18").click(function(){
      var form=document.frmOficio18;
      var url = "Oficio18.do?metodo=inicioSucave"; 
      var form = document.forms(0);
      form.action = url;
      form.method="post";
      form.submit();
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
       // $("#frmOficio18").submit();
        var url = "Oficio18.do?metodo=generar"; 
         var form = document.frmOficio18;
         form.action = url;
         form.method="post";         
         form.submit();   
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
       ajax.parametros = new Array(periodo,"200");//PARAMETROS QUE US EL METODO DEL FACADE   	
       ajax.async      = false;//es opcional por defecto es ASYNCRONO, SI SE QUERE QUE SEA SYNCTRONO PONERLE FALSE, 
       ajax.callback   = function(dto){  		
       
        valor= dto.get("valor");                  
       }
        ajax.executeDto();
      return valor;        
    
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
      var periodo=$("#periodo").val();
      periodo= periodo.substring(2,6)+periodo.substring(0,2);
      periodo=periodo.replace(/^\s*|\s*$/g,"");
     
      var d = new Date();
      var anio = d.getFullYear();
      var mes=   d.getMonth()+1 ;
      var dia=   d.getDate();
      
      if(periodo.length!=6){
        alert("El periodo debe tener 6 dígitos");
        return "error";
      }
      else{
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
  };
 
 $("#verAnexo2").click(function(){
 
       obtenerDetallePaso("200");
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
  });
  
  $("#verAnexo1").click(function(){
       obtenerDetallePaso("240");
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
  }); 
  
  $("#verAnexo3").click(function(){
       obtenerDetallePaso("210");
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
    
  });
  
 $("#verAnexo4").click(function(){
     obtenerDetallePaso("220");
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
  });
  
 $("#verAnexo7").click(function(){
     obtenerDetallePaso("230");
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
  });
  
  $("#close").click(function(){
    $("#info").hide();
  });

 function obtenerDetallePaso(etl){

   
 
    var numEjec="0";
    if(etl=="200"){
     periodo=$("#periodo2").val();
      numEjec=$("#numEjecAnexo2").val();
    }else if(etl=="210"){
     periodo=$("#periodo3").val();
      numEjec=$("#numEjecAnexo3").val();
    }else if(etl=="220"){
    periodo=$("#periodo4").val();
      numEjec=$("#numEjecAnexo4").val();
    }else if(etl=="230"){
     periodo=$("#periodo7").val();
      numEjec=$("#numEjecAnexo7").val();
    }else if(etl=="240"){
      periodo=$("#periodo1").val();
      numEjec=$("#numEjecAnexo1").val();
    }
   periodo= periodo.substring(2,6)+periodo.substring(0,2);
    var ajax = new Ajax();
    ajax.clase    = "com.profuturo.web.spen.modelo.facade.OficiosFacade";
    ajax.metodo   = "obtenerPasoETL";    
    ajax.parametros = new Array(periodo,etl,numEjec);//PARAMETROS QUE USA EL METODO DEL FACADE   	
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
              nom_proceso=dto.get("nombre_proceso");
              tipo_etl= dto.get("tipo_etl");

              $("#ussrEjec").html("");
              $("#ussrEjec").append(ussrExe);          
              $("#periodo_paso").html("");
              $("#periodo_paso").append(periodo_detalle.substring(4,6)+periodo_detalle.substring(0,4));
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
              
              $("#nomProceso_paso").html(""); 
              $("#nomProceso_paso").append(nom_proceso); 
              
              $("#numProceso_paso").html(""); 
              $("#numProceso_paso").append(tipo_etl);                
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
   };
   
   $("#exportarAnexo1").click(function(){    
        $("#tipoAnexo").val("1");   
         $("#periodofinal").val($("#periodo1").val());
         var url = "Oficio18.do?metodo=verReporte"; 
         var form = document.frmOficio18;
         form.action = url;
         form.method="post";         
         form.submit();   
   });  
   
   $("#exportarAnexo2").click(function(){    
        $("#tipoAnexo").val("2");   
        $("#periodofinal").val($("#periodo2").val());
         var url = "Oficio18.do?metodo=verReporte"; 
         var form = document.frmOficio18;
         form.action = url;
         form.method="post";         
         form.submit();   
   });
   
   $("#exportarAnexo3").click(function(){
    
        $("#tipoAnexo").val("3");   
        $("#periodofinal").val($("#periodo3").val());
         var url = "Oficio18.do?metodo=verReporte"; 
         var form = document.frmOficio18;
         form.action = url;
         form.method="post";         
         form.submit();   
   });   
   
   $("#exportarAnexo4").click(function(){
    
        $("#tipoAnexo").val("4");   
         $("#periodofinal").val($("#periodo4").val());
         var url = "Oficio18.do?metodo=verReporte"; 
         var form = document.frmOficio18;
         form.action = url;
         form.method="post";         
         form.submit();   
   });   
   
   $("#exportarAnexo7").click(function(){
    
        $("#tipoAnexo").val("7");
        $("#periodofinal").val($("#periodo7").val());
         var url = "Oficio18.do?metodo=verReporte"; 
         var form = document.frmOficio18;
         form.action = url;
         form.method="post";         
         form.submit();   
   });   
   
   /*EXPORTAR ANEXOS*/
   
   $("#btnAnexo2").click(function(){  
        $("#tipoAnexo").val("2");   
        $("#periodofinal").val($("#periodo2").val());
         var url = "Oficio18.do?metodo=exportarAnexos"; 
         var form = document.frmOficio18;
         form.action = url;
         form.method="post";         
         form.submit();   
   });
   
   $("#btnAnexo3").click(function(){  
        $("#tipoAnexo").val("3");   
        $("#periodofinal").val($("#periodo2").val());
         var url = "Oficio18.do?metodo=exportarAnexos"; 
         var form = document.frmOficio18;
         form.action = url;
         form.method="post";         
         form.submit();   
   });
   
   $("#btnAnexo4").click(function(){  
        $("#tipoAnexo").val("4");   
        $("#periodofinal").val($("#periodo2").val());
         var url = "Oficio18.do?metodo=exportarAnexos"; 
         var form = document.frmOficio18;
         form.action = url;
         form.method="post";         
         form.submit();   
   });
   
   $("#btnAnexo7").click(function(){  
        $("#tipoAnexo").val("7");   
        $("#periodofinal").val($("#periodo2").val());
         var url = "Oficio18.do?metodo=exportarAnexos"; 
         var form = document.frmOficio18;
         form.action = url;
         form.method="post";         
         form.submit();   
   });
   
   
});