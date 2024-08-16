import { v4 as uuidv4 } from 'uuid';
export function generateUniqueIdWithTimestamp() {
  const uniqueId = uuidv4();

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().replace(/[-:.TZ]/g, ''); // Formato: YYYYMMDDHHMMSSmmm

  const uniqueIdWithTimestamp = `${uniqueId}-${formattedDate}`;

  return uniqueIdWithTimestamp;
}
