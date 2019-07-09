var menuItems;

function menu(path, pathImag) {
	// alert("path: "+path+" pathImag: "+path);

	/** Inicio de Menu SPEN */
	/*
	 * menuItems = [
	 * ["Inicio","Bienvenido.do",pathImag+"images/inicio.gif",pathImag+"images/inicio.gif","Inicio"],
	 * ["-"], ["Extr.
	 * Informaci�n","",pathImag+"images/campana.png",pathImag+"images/campana.png","Extr.
	 * Informaci�n"], ["|Consulta Log
	 * Procesos","Extraccion.do?metodo=consultaLogProcesoForm",pathImag+"images/b011.gif",pathImag+"images/b01.gif","Consulta
	 * Log Procesos"], ["|Extraccion de
	 * Informaci�n","Extraccion.do?metodo=extraccionInformacionForm",pathImag+"images/b011.gif",pathImag+"images/b01.gif","Extraccion
	 * de Informaci�n"], ["-"], ["Carga de
	 * Archivos","",pathImag+"images/proceso.gif",pathImag+"images/proceso.gif","Manejo
	 * de Archivos"], ["|Creacion de
	 * Periodo","CargaArchivos.do?metodo=inicioCrearAnio",pathImag+"images/b011.gif",pathImag+"images/b01.gif","Creacion
	 * de Periodo"], ["|Proceso Carga de
	 * Archivos","CargaArchivos.do?metodo=cargaArchivosForm",pathImag+"images/b011.gif",pathImag+"images/b01.gif","Proceso
	 * Carga de Archivos"], //["|Consulta de Carga de
	 * Archivos","CargaArchivos.do?metodo=cargaArchivosForm",pathImag+"images/b011.gif",pathImag+"images/b01.gif","Consulta
	 * de Carga de Archivos"], ["-"], ["Reportes y
	 * Consultas","",pathImag+"images/reporte.gif",pathImag+"images/reporte.gif","Reportes
	 * y Consultas"], ["|Reporte de Casos
	 * Inusuales","Reportes.do?metodo=reportesConsultasForm",pathImag+"images/b011.gif",pathImag+"images/b01.gif","Reporte
	 * de Casos Inusuales"], ["-"], ["Mantenimiento de
	 * Parametros","",pathImag+"images/new1-08.gif",pathImag+"images/new1-08.gif","Mantenimiento
	 * de Parametros"], ["|Mantenimiento de
	 * Parametros","Mantenimiento.do?metodo=inicioMantenimiento",pathImag+"images/b011.gif",pathImag+"images/b01.gif","Mantenimiento
	 * de Parametros"], ];
	 */
	menuItems = [
			[ "Requerimientos de solicitud de Pensión", "",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Extraccion" ],

			[ "|Vincular Beneficiarios a Apoderados",
					"Reversa.do?metodo=opcionVincular",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Vincular Beneficiarios a Apoderados" ],

			[ "|Registro de Requerimientos",
					"Reversa.do?metodo=opcionGenerarRequerimiento",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Registro de Requerimientos" ],

			[ "|Bandeja de Administración de Requerimientos",
					"Reversa.do?metodo=bandejaRepSol",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Bandeja de Requerimientos" ],

			[ "Reportes de Control", "", "/QGSLA/images/icon1.gif",
					"/QGSLA/images/icon2.gif", "Reportes" ],

			[ "|Cambio de Fondo de Pensiones diario",
					"ReporteCF.do?metodo=inicio&opcion=0",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Control de Cambio de Fondo" ],

			[ "|Cambio de Fondo de Pensiones mensual",
					"ReporteSF1.do?metodo=inicio", "/QGSLA/images/icon1.gif",
					"/QGSLA/images/icon2.gif",
					"Reporte de Pensionados sin Fondo 1" ],

			[ "|Cambio de Fondo de Pensiones mensual - Contraloria",
					"ReporteMensualCF.do?metodo=inicio&opcion=0",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Cambio de Fondo de Pensiones mensual - Contraloria" ],

			[ "Reportes de STS", "", "/QGSLA/images/icon1.gif",
					"/QGSLA/images/icon2.gif", "Reportes" ],

			[ "|Reporte de Evaluacion y Calificacion de Invalidez",
					"ReporteSTS.do?metodo=inicio&opcion=0",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Reporte de STS" ],

			[ "|Generacion Oficio Multiple Nº 13838",
					"ReporteOficio.do?metodo=inicioCargarExtraccion&opcion=0",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Reporte de Oficio 13838" ],

			[ "|Generacion de EECC",
					"ReporteEECC.do?metodo=inicioCargarExtraccion&opcion=0",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Generacion de EECC" ],

			[ "|Boleta de Pago Pensionistas",
					"ReporteBolPagPen.do?metodo=inicio&opcion=0",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Reporte de Boleta de Pago Pensionistas" ],

			[ "Reportes de Oficios", "", "/QGSLA/images/icon1.gif",
					"/QGSLA/images/icon2.gif", "Reportes de Oficios" ],

			[ "|Oficio CIR 42", "OficioCIR42.do?metodo=inicio&opcion=0",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Oficio CIR 42" ],

			[ "|Oficio CIR 7743", "Oficio7743.do?metodo=inicio&opcion=0",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Oficio CIR 7743" ],

			[ "|Oficio 19", "Oficio19.do?metodo=inicio&opcion=0",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Oficio 19" ],

			[ "|Oficio 18", "Oficio18.do?metodo=inicio&opcion=0",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Oficio 18" ],

			[ "|Oficio Saldos CIC",
					"OficioSaldosCIC.do?metodo=inicio&opcion=0",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Oficio Saldos CIC" ],

			[ "|Oficio Sección II",
					"OficioSeccionII.do?metodo=inicio&opcion=0",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Oficio Sección II" ],

			[ "|Oficio Licitacion Conjunta",
					"OficioLicitacionConjunta.do?metodo=inicio&opcion=0",
					"/QGSLA/images/icon1.gif", "/QGSLA/images/icon2.gif",
					"Oficio Licitacion Conjunta" ],

	];
}

function iniciarPagina() {

}