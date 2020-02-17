<script>
var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");

var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
var edad_conyu = prompt("¿Cuántos años tiene su cónyuge?");
var hijos = prompt("¿Tiene hijos?", "SI/NO");
var cantidadHijos = prompt("Ingrese la cantidad de hijos menores de 21 años:", "Por favor ingrese únicamente números");

const precioBase = 250;

comision = precioBase * 0.30;

var edad = anioNacimiento - 2020;
recargos = 0;


switch (edad) {
	case 18:
	case 19:
	case 20:
		document.write("Cargos por edad: Q.0.00");
		break;
	case 21: 
	case 22: 
	case 23: 
	case 24: 
	case 25: 
		recargos = precioBase * 0.01;
		document.write("Cargos por edad: Q.", recargos) ;
		break;
	case 26: 
	case 27: 
	case 28: 
	case 29: 
	case 30: 
		recargos = precioBase * 0.02;
		document.write("Cargos por edad: Q.", recargos) ;
		break;
	case 31: 
	case 32: 
	case 33: 
	case 34: 
	case 35: 
	case 36: 
	case 37: 
	case 38: 
	case 39: 
	case 40: 
		recargos = precioBase * 0.05;
		document.write("Cargos por edad: Q.", recargos) ;
		break;
			case 31: 
	case 41: 
	case 42: 
	case 43:
	case 44: 
	case 45: 
	case 46: 
	case 47: 
	case 48: 
	case 49: 
	case 50: 
		recargos = precioBase * 0.08;
		document.write("Cargos por edad: Q.", recargos) ;
		break;
	case 51: 
	case 52: 
	case 53:
	case 54: 
	case 55: 
	case 56: 
	case 57: 
	case 58: 
	case 59: 
	case 60: 
	case 61: 
	case 62: 
	case 63: 
	case 64: 
	case 65: 
		recargos = precioBase * 0.12;
		document.write("Cargos por edad: Q.", recargos) ;
		break;
	default:
		document.write"No le podemos asegurar";
		break;
}

totalPagar = precioBase + comision + recargos;
document.write(totalPagar);

</script>
