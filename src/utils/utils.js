import { v4 as uuidv4 } from 'uuid';


var numberSequence = 0;

function getSequence(){
  var result = numberSequence;
  numberSequence = numberSequence + 1;
  return result;
}

function sequencialDate() {
  const ahora = new Date();

  const año = ahora.getFullYear(); // 2024
  const mes = String(ahora.getMonth() + 1).padStart(2, '0'); // 08 (Mes de agosto)
  const dia = String(ahora.getDate()).padStart(2, '0'); // 18
  const horas = String(ahora.getHours()).padStart(2, '0'); // 14 (Hora en formato de 24 horas)
  const minutos = String(ahora.getMinutes()).padStart(2, '0'); // 35
  const segundos = String(ahora.getSeconds()).padStart(2, '0'); // 52

  // Formato: YYYYMMDDHHMMSS
  const fechaNumerica = `${año}${mes}${dia}${horas}${minutos}${segundos}`;

  return fechaNumerica;
}

export function generateUniqueIdWithTimestamp() {
  const uniqueId = uuidv4();

  return sequencialDate()+"-"+uniqueId;
}

export function uniqueIdEvent(){
  const uniqueId = uuidv4();

  return getSequence()+"-"+uniqueId;
}


export function getRegisterDate(){
  const fecha = new Date();

  const dia = String(fecha.getDate()).padStart(2, '0');
  const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0, por lo que se le suma 1
  const anio = fecha.getFullYear();

  let hora = fecha.getHours();
  const minutos = String(fecha.getMinutes()).padStart(2, '0');
  const segundos = String(fecha.getSeconds()).padStart(2, '0');

  const esPM = hora >= 12;
  hora = hora % 12 || 12; // Convierte la hora al formato de 12 horas y ajusta para 12:00 PM y AM
  hora = String(hora).padStart(2, '0');

  const periodo = esPM ? 'PM' : 'AM';

  return `${dia}-${mes}-${anio}-HR-${hora}-${minutos}-${segundos}-${periodo}`;
}



