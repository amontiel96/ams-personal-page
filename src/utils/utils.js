import { v4 as uuidv4 } from 'uuid';
export function generateUniqueIdWithTimestamp() {
  const uniqueId = uuidv4();

  return uniqueId;
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

